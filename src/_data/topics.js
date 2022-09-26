const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const roadmapsDir = path.join(__dirname, '../roadmaps');
const roadmapsDirNames = fs.readdirSync(roadmapsDir);

// Returns an array of objects
// [
//    {
//        filePath: '',
//        roadmapContent: '## Some Topic\nDetails of the topic are here',
//        heading: 'Some Topic'
//    }
// ]
function listContentFiles(dirPath, pagesList) {
  if (!fs.existsSync(dirPath)) {
    return pagesList;
  }

  const dirContent = fs.readdirSync(dirPath);

  // If the index.md file is there, bring it to the top of the array
  // because this file contains the details about the enclosing folder
  // and we should show it first, wherever we show the list
  const indexFileIndex = dirContent.indexOf('index.md');
  if (indexFileIndex !== -1) {
    dirContent.unshift(dirContent.splice(indexFileIndex, 1)[0]);
  }

  dirContent.forEach((dirChildName) => {
    const dirChildFullPath = path.join(dirPath, dirChildName);

    // For directories, find the nested children pages
    if (fs.lstatSync(dirChildFullPath).isDirectory()) {
      pagesList = listContentFiles(dirChildFullPath, pagesList);
    } else {
      const pageContent = fs.readFileSync(dirChildFullPath, 'utf-8');
      const headingMatch = pageContent.match(/#.+/) || [''];

      pagesList.push({
        filePath: dirChildFullPath,
        content: pageContent,
        heading: headingMatch[0].replace(/^#+/, '').trim(),
      });
    }
  });

  return pagesList;
}

function getRoadmapFileForBreadCrumb(permalink) {
  // e.g. /frontend/ to become `frontend`
  const roadmapDirName = permalink.replaceAll(/\//g, '');
  const roadmapDir = path.join(roadmapsDir, roadmapDirName);

  if (!fs.existsSync(roadmapDir)) {
    return null;
  }

  const roadmapFile = fs
    .readdirSync(roadmapDir)
    .find(
      (roadmapDirFile) =>
        path.basename(roadmapDirFile).replace(/\..+/, '') === roadmapDirName
    );

  if (!roadmapFile) {
    return;
  }

  const roadmapFilePath = path.join(roadmapDir, roadmapFile);
  const roadmapFileContent = fs.readFileSync(roadmapFilePath, 'utf-8');

  const frontmatter = matter(roadmapFileContent);

  return {
    permalink,
    heading: frontmatter.data.title,
  };
}

/**
 * Filters the content files based on permalinks
 * @param contentFiles
 * @param permalinks
 * @returns {*}
 */
function filterFilesByPermalinks(contentFiles, permalinks) {
  return permalinks
    .map((permalink) => {
      // Find the file details from the content files that we have collected
      let foundFile = contentFiles.find(
        (contentFile) => contentFile.permalink === permalink
      );

      // If it is not a content file, it may be the roadmap file
      if (!foundFile) {
        foundFile = getRoadmapFileForBreadCrumb(permalink);
      }

      if (!foundFile) {
        return;
      }

      return {
        permalink: permalink,
        heading: foundFile.heading,
      };
    })
    .filter(Boolean);
}

/**
 * Populates the breadcrumbs in the content files
 * @param contentFiles
 * @returns {*}
 */
function populateBreadCrumbs(contentFiles) {
  return contentFiles.map((contentFile) => {
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

    return {
      ...contentFile,
      breadcrumbs: filterFilesByPermalinks(contentFiles, breadcrumbPermalinks),
    };
  });
}

const roadmapContent = {};
roadmapsDirNames.forEach((roadmapDirName) => {
  const roadmapContentDirPath = path.join(
    roadmapsDir,
    roadmapDirName,
    'content'
  );

  let contentFiles = listContentFiles(roadmapContentDirPath, []);

  // Assign permalinks to each content file
  contentFiles = contentFiles.map((contentFile) => {
    const permalink = contentFile.filePath
      .replace(roadmapContentDirPath, '') // e.g. `/Users/kamran/projects/dev-roadmap/src/roadmaps/frontend` will become `/frontend`
      .replace('/index.md', '') // e.g. `/frontend/css/index.md` will become `/frontend/css/`
      .replace('.md', ''); // e.g. `/frontend/css/tailwind.md` will become `/frontend/css/tailwind/`

    return {
      ...contentFile,
      permalink: path
        .join('/', roadmapDirName, permalink, '/')
        .replaceAll(/\/\d+-/g, '/'),
    };
  });

  // Assign breadcrumbs to each content file
  contentFiles = populateBreadCrumbs(contentFiles);

  roadmapContent[roadmapDirName] = contentFiles;
});

module.exports = roadmapContent;
