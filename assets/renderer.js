function renderRoadmap(roadmapId) {
  const renderer = window['roadmap-renderer'];
  if (!renderer || !renderer.wireframeJSONToSVG) {
    console.error('Roadmap renderer is not loaded');
    return;
  }

  return fetch('/jsons/roadmaps/' + roadmapId + '.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return renderer.wireframeJSONToSVG(json);
    });
}
