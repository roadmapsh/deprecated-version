const fs = require('fs');
const path = require('path');

// Create content files programmatically from content director
// https://bryanlrobinson.com/blog/using-11ty-javascript-data-files-to-mix-markdown-and-cms-content-into-one-collection/

// 1 - Creates the content.json directory for template
//    e.g.
//      with the following content for 11ty to consider it as dir
//      {
//        "layout": "layouts/content.njk"
//      }
//
// 2 - Renames the content directories to remove numbers
//    e.g.
//      before => roadmaps/frontend/content/100-internet/100-how-does-http-work.md
//      after  => roadmaps/frontend/content/internet/how-does-http-work.md
//
// 3 - Renames each readme.md to the parent directory name
//    e.g.
//      before => roadmaps/frontend/content/internet/readme.md
//      after  => roadmaps/frontend/content/internet/internet.md
//
// 4 - Replaces the resource tags with short codes
//    e.g.
//      <ResourceGroupTitle>Free Content</ResourceGroupTitle>
//      <BadgeLink colorScheme='yellow' badgeText='Read' href='https://www.w3schools.com/css/'>W3Schools — Learn CSS</BadgeLink>
//
//      {% resources %}
//        {% Blog "https://www.w3schools.com/css/", "W3Schools — Learn CSS" %}
//      {% endresources %}
const roadmapsDir = path.join(__dirname, '../src/roadmaps');
const roadmapDirs = fs.readdirSync(roadmapsDir);

roadmapDirs.forEach((roadmapDir) => {
  const roadmapDirPath = path.join(roadmapsDir, roadmapDir);
  const contentDirPath = path.join(roadmapDirPath, 'content');

  if (!fs.existsSync(contentDirPath)) {
    console.log(`Content dir not found ${roadmapDir}/content`);
    return;
  }

  //////////////////////////////////////////////////////////
  // 1 - Create content.json file for layout information
  //////////////////////////////////////////////////////////
  const configFilePath = path.join(contentDirPath, 'content.json');
  fs.writeFileSync(
    configFilePath,
    JSON.stringify(
      {
        layout: 'layouts/content.njk',
      },
      null,
      2
    )
  );

  function handleContentDir(parentDirPath) {
    const dirChildrenNames = fs.readdirSync(parentDirPath);

    dirChildrenNames.forEach((dirChildName) => {
      const dirChildPath = path.join(parentDirPath, dirChildName);

      // If directory, handle the children for it
      if (fs.lstatSync(dirChildPath).isDirectory()) {
        handleContentDir(dirChildPath);
      }

      //////////////////////////////////////////////////////////
      // 2 - Rename directories to remove the numbers
      //////////////////////////////////////////////////////////
      let newDirChildPath = path.join(
        path.dirname(dirChildPath),
        path.basename(dirChildPath).replace(/^\d+-/, '')
      );

      fs.renameSync(dirChildPath, newDirChildPath);
      //////////////////////////////////////////////////////////
      // 3 - Rename readme.md to parent directory name
      //////////////////////////////////////////////////////////
      if (newDirChildPath.endsWith('readme.md')) {
        const newFilePath = path.join(
          path.dirname(newDirChildPath),
          `${path.basename(parentDirPath).replace(/^\d+-/, '')}.md`
        );

        fs.renameSync(newDirChildPath, newFilePath);
        newDirChildPath = newFilePath;
      }

      //////////////////////////////////////////////////////////
      // 4 - Replace the resource tags with short codes
      //////////////////////////////////////////////////////////
      if (fs.lstatSync(newDirChildPath).isFile()) {
        const fileContent = fs.readFileSync(newDirChildPath, 'utf-8');

        const shortCodes = [
          ...fileContent.matchAll(/<BadgeLink.+<\/BadgeLink>/g),
        ].map(([fullMatch]) => {
          const resourceType = fullMatch.match(/badgeText=["'](.+?)["']/)[1];
          const link = fullMatch.match(/href=["'](.+?)["']/)[1];
          const text = fullMatch.match(/>([^<]+)<\/BadgeLink>$/)[1];

          switch (
            resourceType.replace(/^Official.+/, 'Official').toLowerCase()
          ) {
            case 'course':
              return `  {% Course "${link}", "${text.replaceAll(
                /['"]/g,
                ''
              )}" %}`;
            case 'video':
              return `  {% Video "${link}", "${text.replaceAll(
                /['"]/g,
                ''
              )}" %}`;
            case 'blog':
              return `  {% Blog "${link}", "${text.replaceAll(
                /['"]/g,
                ''
              )}" %}`;
            case 'official':
              return `  {% Official "${link}", "${text.replaceAll(
                /['"]/g,
                ''
              )}" %}`;
            default:
              return `  {% Blog "${link}", "${text.replaceAll(
                /['"]/g,
                ''
              )}" %}`;
          }
        });

        const shortCodePair = [
          '{% resources %}',
          ...shortCodes,
          '{% endresources %}',
        ];

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

        fs.writeFileSync(newDirChildPath, newFileContent);
      }
    });
  }

  handleContentDir(contentDirPath);
});
