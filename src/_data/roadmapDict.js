const getRoadmaps = require('./roadmaps');
const { AssetCache } = require('@11ty/eleventy-fetch');

module.exports = async function getRoadmapDict() {
  let asset = new AssetCache('roadmaps_dict ');
  console.log('[RoadmapDict] Preparing roadmaps data..');

  if (asset.isCacheValid('2h')) {
    console.log('[RoadmapDict] Cache HIT');
    return asset.getCachedValue();
  }

  console.log('[RoadmapDict] Cache Miss');

  const roadmaps = await getRoadmaps();
  const roadmapDict = roadmaps.reduce((acc, curr) => {
    const roadmapId = curr.id;

    acc[roadmapId] = curr;

    return acc;
  }, {});

  await asset.save(roadmapDict, 'json');

  return roadmapDict;
};
