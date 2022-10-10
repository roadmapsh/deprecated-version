module.exports = function sortedRoadmaps(roadmapTag) {
  return (collectionApi) => {
    return collectionApi.getFilteredByTags(roadmapTag).sort((a, b) => a.data.order - b.data.order);
  };
};
