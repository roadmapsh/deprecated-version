const fs = require('node:fs/promises');
const fsSync = require('node:fs');
const path = require('path');
const matter = require('gray-matter');
const { AssetCache } = require('@11ty/eleventy-fetch');
const renderShortCodes = require('../../config/filters/resource-shortcodes');
const roadmapsDir = path.join(__dirname, '../roadmaps');

// Returns an array of objects
// [
//    {
//        filePath: '',
//        roadmapContent: '## Some Topic\nDetails of the topic are here',
//        heading: 'Some Topic'
//    }
// ]
async function listContentFiles(dirPath, pagesList) {
  if (!fsSync.existsSync(dirPath)) {
    return pagesList;
  }

  const dirContent = await fs.readdir(dirPath);

  // If the index.md file is there, bring it to the top of the array
  // because this file contains the details about the enclosing folder,
  // and we should show it first, wherever we show the list
  const indexFileIndex = dirContent.indexOf('index.md');
  if (indexFileIndex !== -1) {
    dirContent.unshift(dirContent.splice(indexFileIndex, 1)[0]);
  }

  for (const dirChildName of dirContent) {
    const dirChildFullPath = path.join(dirPath, dirChildName);

    // For directories, find the nested children pages
    if ((await fs.lstat(dirChildFullPath)).isDirectory()) {
      pagesList = await listContentFiles(dirChildFullPath, pagesList);
    } else {
      const pageContent = await fs.readFile(dirChildFullPath, 'utf-8');
      const headingMatch = pageContent.match(/#.+/) || [''];

      pagesList.push({
        filePath: dirChildFullPath,
        content: renderShortCodes(pageContent),
        heading: headingMatch[0].replace(/^#+/, '').trim(),
      });
    }
  }

  return pagesList;
}

async function getRoadmapFileForBreadCrumb(permalink) {
  // e.g. /frontend/ to become `frontend`
  const roadmapDirName = permalink.replaceAll(/\//g, '');
  const roadmapDir = path.join(roadmapsDir, roadmapDirName);

  if (!fsSync.existsSync(roadmapDir)) {
    return null;
  }

  const roadmapFile = (await fs.readdir(roadmapDir)).find(
    (roadmapDirFile) => path.basename(roadmapDirFile).replace(/\..+/, '') === roadmapDirName
  );

  if (!roadmapFile) {
    return;
  }

  const roadmapFilePath = path.join(roadmapDir, roadmapFile);
  const roadmapFileContent = await fs.readFile(roadmapFilePath, 'utf-8');

  const frontmatter = matter(roadmapFileContent);

  return {
    permalink,
    heading: frontmatter.data.featuredTitle || frontmatter.data.title,
  };
}

/**
 * Filters the content files based on permalinks
 * @param contentFiles
 * @param permalinks
 * @returns {*}
 */
async function filterFilesByPermalinks(contentFiles, permalinks) {
  const filteredPermalinks = [];

  for (let permalink of permalinks) {
    // Find the file details from the content files that we have collected
    let foundFile = contentFiles.find((contentFile) => contentFile.permalink === permalink);

    // If it is not a content file, it may be the roadmap file
    if (!foundFile) {
      foundFile = await getRoadmapFileForBreadCrumb(permalink);
    }

    if (!foundFile) {
      continue;
    }

    filteredPermalinks.push({
      permalink: permalink,
      heading: foundFile.heading,
    });
  }

  return filteredPermalinks;
}

/**
 * Populates the breadcrumbs in the content files
 * @param contentFiles
 * @returns {*}
 */
async function populateBreadCrumbs(contentFiles) {
  const breadCrumbs = [];

  for (let contentFile of contentFiles) {
    // e.g. /backend/internet/how-does-internet-work/http/
    const permalink = contentFile.permalink;
    const normalizedLink = permalink.replaceAll(/(^\/)|(\/$)/g, '');

    // We need to collect all the pages with permalinks to generate breadcrumbs
    //    /backend/
    //    /backend/internet/
    //    /backend/internet/how-does-internet-work/
    //    /backend/internet/how-does-internet-work/http/
    const linkParts = normalizedLink.split('/');
    const breadcrumbPermalinks = [];
    const subLinks = [];

    for (let counter = 0; counter < linkParts.length; counter++) {
      const part = linkParts[counter];
      subLinks.push(part);

      breadcrumbPermalinks.push(`/${subLinks.join('/')}/`);
    }

    breadCrumbs.push({
      ...contentFile,
      breadcrumbs: await filterFilesByPermalinks(contentFiles, breadcrumbPermalinks),
    });
  }

  return breadCrumbs;
}

module.exports = async function prepareTopicsData() {
  let asset = new AssetCache('roadmap_topics_data ');
  if (asset.isCacheValid('2h')) {
    return asset.getCachedValue();
  }

  const roadmapsDirNames = await fs.readdir(roadmapsDir);

  const roadmapTopicsData = {};
  for (const roadmapDirName of roadmapsDirNames) {
    const roadmapContentDirPath = path.join(roadmapsDir, roadmapDirName, 'content');

    let contentFiles = await listContentFiles(roadmapContentDirPath, []);

    // Assign permalinks to each content file
    contentFiles = contentFiles.map((contentFile) => {
      const permalink = contentFile.filePath
        .replace(roadmapContentDirPath, '') // e.g. `/Users/kamran/projects/dev-roadmap/src/roadmaps/frontend` will become `/frontend`
        .replace('/index.md', '') // e.g. `/frontend/css/index.md` will become `/frontend/css/`
        .replace('.md', ''); // e.g. `/frontend/css/tailwind.md` will become `/frontend/css/tailwind/`

      return {
        ...contentFile,
        permalink: path.join('/', roadmapDirName, permalink, '/').replaceAll(/\/\d+-/g, '/'),
      };
    });

    // Assign breadcrumbs to each content file
    contentFiles = await populateBreadCrumbs(contentFiles);

    roadmapTopicsData[roadmapDirName] = contentFiles;
  }

  await asset.save(roadmapTopicsData, 'json');

  return roadmapTopicsData;
};
