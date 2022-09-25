const fs = require('fs');
const path = require('path');

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

  fs.readdirSync(dirPath).forEach((dirChildName) => {
    const dirChildFullPath = path.join(dirPath, dirChildName);

    // For directories, find the nested children pages
    if (fs.lstatSync(dirChildFullPath).isDirectory()) {
      pagesList = listContentFiles(dirChildFullPath, pagesList);
    } else {
      const pageContent = fs.readFileSync(dirChildFullPath, 'utf-8');
      const firstLine = (pageContent.split('\n')[0] || '').trim();

      pagesList.push({
        filePath: dirChildFullPath,
        content: pageContent,
        heading: firstLine.replace(/^#+/, '').trim(),
      });
    }
  });

  return pagesList;
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
      const foundFile = contentFiles.find(
        (contentFile) => contentFile.permalink === permalink
      );

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
    const breadCrumbPermalinks = [];
    const subLinks = [];

    for (let counter = 0; counter < linkParts.length; counter++) {
      const part = linkParts[counter];
      subLinks.push(part);

      breadCrumbPermalinks.push(`/${subLinks.join('/')}/`);
    }

    return {
      ...contentFile,
      breadCrumbs: filterFilesByPermalinks(contentFiles, breadCrumbPermalinks),
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
