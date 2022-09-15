import { wireframeJSONToSVG } from 'roadmap-renderer';

export function fetchRoadmapSvg(jsonUrl) {
  if (!jsonUrl) {
    console.error('jsonUrl not defined in frontmatter');
    return;
  }

  return fetch(jsonUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return wireframeJSONToSVG(json);
    });
}

export function fetchTopicHtml(roadmapId, groupId) {
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
