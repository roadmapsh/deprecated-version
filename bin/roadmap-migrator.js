const fs = require('fs');
const path = require('path');
const yaml = require('json-to-pretty-yaml');

const oldAssetsPath = path.join(__dirname, 'developer-roadmap/public');
const newAssetsPath = path.join(__dirname, '../src/assets/');

// Create JSONs dir
const newJsonsPath = path.join(newAssetsPath, 'jsons');
if (fs.existsSync(newJsonsPath)) {
  fs.rmSync(newJsonsPath, { recursive: true });
}

fs.mkdirSync(newJsonsPath);

// Create PDFs dir
const newPdfsPath = path.join(newAssetsPath, 'pdfs');
if (fs.existsSync(newPdfsPath)) {
  fs.rmSync(newPdfsPath, { recursive: true });
}

fs.mkdirSync(newPdfsPath);

const oldRoadmapsDirPath = path.join(__dirname, 'developer-roadmap/content/roadmaps');
const newRoadmapsDirPath = path.join(__dirname, '../src/roadmaps');

if (fs.existsSync(newRoadmapsDirPath)) {
  fs.rmSync(newRoadmapsDirPath, { recursive: true });
}

fs.mkdirSync(newRoadmapsDirPath);

const oldRoadmaps = fs
  .readdirSync(oldRoadmapsDirPath)
  .map((roadmapDirName) => path.join(oldRoadmapsDirPath, roadmapDirName));

const orderInfo = {};
const typeCounter = {
  role: 1,
  tool: 1,
};

// Calculate the sorting information for the roadmaps
oldRoadmaps.forEach((oldRoadmapPath) => {
  const roadmapId = path.basename(oldRoadmapPath).replace(/\d+-/g, '').toLowerCase();
  const oldRoadmapMeta = require(path.join(oldRoadmapPath, 'meta.json'));

  orderInfo[roadmapId] = typeCounter[oldRoadmapMeta.type];
  typeCounter[oldRoadmapMeta.type] += 1;
});

// Iterate and create new roadmaps
oldRoadmaps.forEach((oldRoadmapPath) => {
  const roadmapId = path.basename(oldRoadmapPath).replace(/\d+-/g, '').toLowerCase();

  const oldRoadmapMeta = require(path.join(oldRoadmapPath, 'meta.json'));
  const isTextual = oldRoadmapMeta?.landingPath?.endsWith('.md');

  const roadmapFileContent = isTextual
    ? fs.readFileSync(path.join(oldRoadmapPath, oldRoadmapMeta.landingPath), 'utf8')
    : '';

  const newRoadmapMeta = {
    layout: isTextual ? 'layouts/md-roadmap.njk' : 'layouts/svg-roadmap.njk',
    permalink: `/${roadmapId}/`,
    jsonUrl: `/assets/jsons/${roadmapId}.json`,
    pdfUrl: `/assets/pdfs/${roadmapId}.pdf`,
    order: orderInfo[roadmapId],
    featuredTitle:
      oldRoadmapMeta.featuredTitle === 'Software Design and Architecture'
        ? 'Software Design'
        : oldRoadmapMeta.featuredTitle,
    featuredDescription: oldRoadmapMeta.featuredDescription,
    title: oldRoadmapMeta.title,
    description: oldRoadmapMeta.description,
    seo: oldRoadmapMeta.seo,
    sitemap: {
      priority: 1,
      changefreq: 'monthly',
    },
    tags: ['roadmap', 'main-sitemap', `${oldRoadmapMeta.type === 'tool' ? 'skill' : oldRoadmapMeta.type}-roadmap`],
  };

  const frontmatter = yaml.stringify(newRoadmapMeta);
  const newRoadmapDirPath = path.join(newRoadmapsDirPath, roadmapId);
  const newRoadmapFilePath = path.join(newRoadmapDirPath, `/${roadmapId}.md`);

  fs.mkdirSync(newRoadmapDirPath);
  fs.writeFileSync(newRoadmapFilePath, `---\n${frontmatter}---\n\n${roadmapFileContent}`);

  const jsonFile = path.join(oldAssetsPath, oldRoadmapMeta.jsonUrl || '/unknown');
  const pdfFile = path.join(oldAssetsPath, oldRoadmapMeta.pdfUrl || '/unknown');

  if (fs.existsSync(jsonFile)) {
    fs.copyFileSync(jsonFile, path.join(newJsonsPath, `${roadmapId}.json`));
  }

  if (fs.existsSync(pdfFile)) {
    fs.copyFileSync(pdfFile, path.join(newPdfsPath, `${roadmapId}.pdf`));
  }

  // Copy the content directory
  const oldRoadmapContentDir = path.join(oldRoadmapPath, 'content');
  if (fs.existsSync(oldRoadmapContentDir)) {
    fs.cpSync(oldRoadmapContentDir, path.join(newRoadmapDirPath, 'content'), { recursive: true });
  }
});
