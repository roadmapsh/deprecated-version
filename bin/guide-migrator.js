const fs = require('fs');
const path = require('path');
const yaml = require('json-to-pretty-yaml');

const contentDirPath = path.join(__dirname, './developer-roadmap/content');
const guides = require('./developer-roadmap/content/guides.json');

const guideImagesDirPath = path.join(__dirname, './developer-roadmap/public/guides');
const newGuideImagesDirPath = path.join(__dirname, '../src/assets/guides');

// Remove the guide images directory
if (fs.existsSync(newGuideImagesDirPath)) {
  fs.rmSync(newGuideImagesDirPath, { recursive: true });
}

fs.cpSync(guideImagesDirPath, newGuideImagesDirPath, { recursive: true });

// Remove the old guides directory
const newGuidesDirPath = path.join(__dirname, '../src/guides');
if (fs.existsSync(newGuidesDirPath)) {
  fs.rmSync(newGuidesDirPath, { recursive: true });
}

fs.mkdirSync(newGuidesDirPath);

guides.forEach((guide) => {
  const { id: guideId } = guide;

  const originalGuidePath = path.join(contentDirPath, 'guides', `${guideId}.md`);
  const newGuidePath = path.join(__dirname, `../src/guides/${guideId}.md`);

  const guideWithoutFrontmatter = fs.readFileSync(originalGuidePath, 'utf8');
  fs.copyFileSync(originalGuidePath, newGuidePath);

  const guideFrontMatter = yaml
    .stringify({
      layout: 'layouts/guide.njk',
      title: guide.title,
      description: guide.description,
      seo: {
        title: `${guide.title} - roadmap.sh`,
        description: guide.description,
      },
      isNew: guide.isNew,
      type: guide.type,
      date: guide.createdAt.replace(/T.*/, ''),
      sitemap: {
        priority: 0.7,
        changefreq: 'weekly',
      },
      tags: ['guide', `${guide.type}-guide`, `guide-sitemap`],
    })
    .replace(/date: "(.+?)"/, 'date: $1');

  const guideWithUpdatedUrls = guideWithoutFrontmatter
    .replace(/\[\!\[\]\((.+?\.png)\)\]\((.+?\.png)\)/g, '[![](/assets$1)](/assets$2)')
    .replace(/assetshttp\//g, 'http')
    .replace(/assetshttps:\/\//g, 'https://')
    .replace(/\/http/g, 'http')
    .replace(/]\(\/guides\/(.+?)\.png\)/g, '](/assets/guides/$1.png)');

  const guideWithFrontmatter = `---\n${guideFrontMatter}---\n\n${guideWithUpdatedUrls}`;

  console.log(`Writing guide ${guideId} to disk`);
  fs.writeFileSync(newGuidePath, guideWithFrontmatter);
});
