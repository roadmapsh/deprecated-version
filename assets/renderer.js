function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}

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

function fetchTopic(roadmapId, groupId) {
  const topicPartial = groupId.replace(/^\d+-/, '').replaceAll(/:/g, '/');
  const fullUrl = `/${roadmapId}/${topicPartial}/`;

  return fetch(fullUrl)
    .then((res) => {
      return res.text();
    })
    .then((topicHtml) => {
      // It's full HTML with page body, head etc
      // We only need the inner HTML of the #topic-content
      const node = new DOMParser().parseFromString(topicHtml, 'text/html');

      return node.querySelector('#topic-content');
    });
}
