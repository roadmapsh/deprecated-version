const fs = require('fs');
const path = require('path');

const roadmapsDir = path.join(__dirname, 'roadmaps');

const allRoadmaps = fs
  .readdirSync(roadmapsDir)
  .map((roadmapFileName) => require(path.join(roadmapsDir, roadmapFileName)));

module.exports = {
  all: allRoadmaps,
  interactive: allRoadmaps.filter((roadmap) => roadmap.isInteractive),
  nonInteractive: allRoadmaps.filter((roadmap) => !roadmap.isInteractive),
};
