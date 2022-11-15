const fs = require('fs');
const path = require('path');
const yaml = require('json-to-pretty-yaml');

// 1 - Renames each readme.md to index.md
//    e.g.
//      before => roadmaps/frontend/content/internet/readme.md
//      after  => roadmaps/frontend/content/internet/index.md
//
// 2 - Replaces the resource tags with short codes
//    e.g.
//      <ResourceGroupTitle>Free Content</ResourceGroupTitle>
//      <BadgeLink colorScheme='yellow' badgeText='Read' href='https://www.w3schools.com/css/'>W3Schools — Learn CSS</BadgeLink>
//
//      {% resources %}
//        {% Blog "https://www.w3schools.com/css/", "W3Schools — Learn CSS" %}
//      {% endresources %}
//
// 3 - Removes the index.md file from within the content dir i.e. to avoid `/frontend` permalink for `/frontend/index.md`
//     Because we have the `/frontend` permalink serving the actual roadmap and not any content
const roadmapsDir = path.join(__dirname, '../src/roadmaps');
const roadmapDirs = fs.readdirSync(roadmapsDir);

roadmapDirs.forEach((roadmapDirName) => {
  const roadmapDirPath = path.join(roadmapsDir, roadmapDirName);
  const contentDirPath = path.join(roadmapDirPath, 'content');

  console.log(`[Start] == Migrating ${roadmapDirName}`);

  if (!fs.existsSync(contentDirPath)) {
    console.log(`Content dir not found ${roadmapDirName}/content`);
    return;
  }

  function handleContentDir(parentDirPath) {
    const dirChildrenNames = fs.readdirSync(parentDirPath);

    dirChildrenNames.forEach((dirChildName) => {
      let dirChildPath = path.join(parentDirPath, dirChildName);

      // If directory, handle the children for it
      if (fs.lstatSync(dirChildPath).isDirectory()) {
        handleContentDir(dirChildPath);
      }

      //////////////////////////////////////////////////////////
      // 1 - Rename directories to remove the numbers
      //////////////////////////////////////////////////////////
      // let newDirChildPath = path.join(
      //   path.dirname(dirChildPath),
      //   path.basename(dirChildPath).replace(/^\d+-/, '')
      // );
      // fs.renameSync(dirChildPath, dirChildPath);

      //////////////////////////////////////////////////////////
      // 1 - Rename readme.md to index.md
      //////////////////////////////////////////////////////////
      if (dirChildPath.endsWith('readme.md')) {
        const newFilePath = path.join(path.dirname(dirChildPath), `index.md`);

        fs.renameSync(dirChildPath, newFilePath);
        dirChildPath = newFilePath;
      }

      //////////////////////////////////////////////////////////
      // 2 - Replace the resource tags with short codes
      //////////////////////////////////////////////////////////
      if (fs.lstatSync(dirChildPath).isFile()) {
        const fileContent = fs.readFileSync(dirChildPath, 'utf-8');

        const shortCodes = [...fileContent.matchAll(/<BadgeLink.+<\/BadgeLink>/g)].map(([fullMatch]) => {
          const resourceType = fullMatch.match(/badgeText=["'](.+?)["']/)[1];
          const link = fullMatch.match(/href=["'](.+?)["']/)[1];
          const text = fullMatch.match(/>([^<]+)<\/BadgeLink>$/)[1];

          switch (resourceType.replace(/^Official.+/, 'Official').toLowerCase()) {
            case 'course':
              return `  {% Course "${link}", "${text.replaceAll(/['"]/g, '')}" %}`;
            case 'video':
              return `  {% Video "${link}", "${text.replaceAll(/['"]/g, '')}" %}`;
            case 'blog':
              return `  {% Blog "${link}", "${text.replaceAll(/['"]/g, '')}" %}`;
            case 'official':
              return `  {% Official "${link}", "${text.replaceAll(/['"]/g, '')}" %}`;
            default:
              return `  {% Blog "${link}", "${text.replaceAll(/['"]/g, '')}" %}`;
          }
        });

        const shortCodePair = ['{% resources %}', ...shortCodes, '{% endresources %}'];

        const shortCodedResources = shortCodePair.join('\n');

        let newFileContent = fileContent.replace(
          /<ResourceGroupTitle>([^<\/BadgeLink>]|\S|\s)+<\/BadgeLink>/,
          shortCodedResources
        );

        // In case if the resources were not wrapped in <ResourceGroupTitle>
        newFileContent = newFileContent.replace(
          /<BadgeLink([^<\/BadgeLink>]|\S|\s)+<\/BadgeLink>/,
          shortCodedResources
        );

        fs.writeFileSync(dirChildPath, newFileContent);
      }
    });
  }

  handleContentDir(contentDirPath);

  // 3 - Removes the index.md file from within the content dir i.e. to avoid `/frontend` permalink for `/frontend/index.md`
  //     Because we have the `/frontend` permalink serving the actual roadmap and not any content
  const contentRootFile = path.join(contentDirPath, '/index.md');
  if (fs.existsSync(contentRootFile)) {
    fs.rmSync(contentRootFile);
  }

  ////////////////////////////////////////////////
  // Create the topic file
  ////////////////////////////////////////////////
  const topicFilePath = path.join(roadmapDirPath, 'topic.md');
  if (fs.existsSync(topicFilePath)) {
    fs.rmSync(topicFilePath);
  }

  const topicFrontMatter = yaml.stringify({
    layout: 'layouts/topic.njk',
    pagination: {
      data: `topics.${roadmapDirName}`,
      size: 1,
      alias: 'topic',
      addAllPagesToCollections: true,
    },
    permalink: '{{ topic.permalink }}',
    sitemap: {
      priority: 0.7,
      changefreq: 'monthly',
    },
    tags: ['topic-sitemap'],
  });

  const topicFileContent = '{{ topic.content }}';
  fs.writeFileSync(topicFilePath, `---\n${topicFrontMatter}---\n\n${topicFileContent}`);

  ////////////////////////////////////////////////
  // Create the topics reference file
  ////////////////////////////////////////////////
  const topicRefFilePath = path.join(roadmapDirPath, 'topics.md');
  if (fs.existsSync(topicRefFilePath)) {
    fs.rmSync(topicRefFilePath);
  }

  // Generate heading from the roadmap dir name
  function generateHeadingFromDirName(dirName) {
    const formattedName = dirName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedName
      .replace(/Fullstack/i, 'Full Stack')
      .replace(/Devops/i, 'DevOps')
      .replace(/Iot/i, 'IoT')
      .replace(/Ui/i, 'UI')
      .replace(/Ux/i, 'UX')
      .replace(/Qa/i, 'QA')
      .replace(/dba/i, 'DBA')
      .replace(/postgresql/i, 'PostgreSQL');
  }

  const roadmapTitle = generateHeadingFromDirName(roadmapDirName);

  const topicRefFrontMatter = yaml.stringify({
    layout: 'layouts/topics.njk',
    permalink: `/${roadmapDirName}/topics/`,
    heading: `${roadmapTitle} Topics`,
    roadmap: {
      contentKey: roadmapDirName,
      title: roadmapTitle,
      permalink: `/${roadmapDirName}/`,
    },
    sitemap: {
      priority: 0.8,
      changefreq: 'monthly',
    },
    tags: ['main-sitemap'],
  });

  const topicRefFileContent = '';
  fs.writeFileSync(topicRefFilePath, `---\n${topicRefFrontMatter}---\n\n${topicRefFileContent}`);

  console.log(`        == Migrated ${roadmapDirName}`);
});
