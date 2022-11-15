const fs = require('node:fs/promises');
const fsSync = require('node:fs');
const path = require('path');
const matter = require('gray-matter');
const { AssetCache } = require('@11ty/eleventy-fetch');
const roadmapsDir = path.join(__dirname, '../roadmaps');

module.exports = async function getRoadmaps() {
  let asset = new AssetCache('roadmaps_list ');

  if (asset.isCacheValid('2h')) {
    return asset.getCachedValue();
  }

  // get all directories inside the roadmapsDir
  const roadmapsDirNames = (await fs.readdir(roadmapsDir)).filter((roadmapDir) => {
    const roadmapDirPath = path.join(roadmapsDir, roadmapDir);
    return fsSync.statSync(roadmapDirPath).isDirectory();
  });

  const roadmaps = [];
  for (const roadmapDirName of roadmapsDirNames) {
    const roadmapDir = path.join(roadmapsDir, roadmapDirName);

    const roadmapFileContent = await fs.readFile(path.join(roadmapDir, `${roadmapDirName}.md`), 'utf-8');
    const roadmapFrontmatter = matter(roadmapFileContent)?.data;

    roadmaps.push({
      id: roadmapDirName,
      ...roadmapFrontmatter,
    });
  }

  await asset.save(roadmaps, 'json');

  return roadmaps;
};
