function renderRoadmap(jsonUrl) {
  if (!jsonUrl) {
    console.error('jsonUrl not defined in frontmatter');
    return;
  }

  const renderer = window['roadmap-renderer'];
  if (!renderer || !renderer.wireframeJSONToSVG) {
    console.error('Roadmap renderer is not loaded');
    return;
  }

  return fetch(jsonUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return renderer.wireframeJSONToSVG(json);
    });
}
