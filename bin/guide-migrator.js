const fs = require('fs');
const path = require('path');
const yaml = require('json-to-pretty-yaml');
const guides = require('./data/guides.json');

guides.forEach((guide) => {
  const { id: guideId } = guide;

  const guidePath = path.join(__dirname, `../src/guides/${guideId}.md`);
  const guideWithoutFrontmatter = fs.readFileSync(guidePath, 'utf8');
  const guideFrontMatter = yaml.stringify({
    layout: 'layouts/guide.njk',
    title: guide.title,
    description: guide.description,
    isNew: guide.isNew,
    type: guide.type,
    date: guide.createdAt.replace(/T.*/, ''),
    sitemap: {
      priority: 0.7,
      changefreq: 'weekly',
    },
    tags: ['guide', `${guide.type}-guide`, `guide-sitemap`],
  });

  const guideWithFrontmatter = `---\n${guideFrontMatter}---\n\n${guideWithoutFrontmatter}`;

  console.log(`Writing guide ${guideId} to disk`);
  fs.writeFileSync(guidePath, guideWithFrontmatter);
});
