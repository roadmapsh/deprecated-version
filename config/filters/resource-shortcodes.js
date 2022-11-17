const links = require('../shortcodes/links');
const resources = require('../shortcodes/resources');

module.exports = function resourceShortCodes(content) {
  let roadmapTagMatches = content.match(/{%\s*?Roadmap\s*?['"]([^'"]+?)['"]\s*?,\s+['"]([^'"]+?)['"]\s*?%}?/);
  const roadmapTag = roadmapTagMatches ? links.Roadmap(roadmapTagMatches[1], roadmapTagMatches[2]) : '';

  if (roadmapTag) {
    content = content.replace(roadmapTagMatches[0], roadmapTag);
  }

  const resourcesRegex = /{%\s+resources\s*?(['"](.+?)['"])*?\s*?%}([\s\S]+){%\s+endresources\s+%}/;
  if (!content.match(resourcesRegex)) {
    return content;
  }

  const resourceHeading = content.match(resourcesRegex)[2] || 'Free Content';

  const shortCodeMatches = [
    ...content.matchAll(/{%\s*?(Video|Blog|Course|Official)\s*?['"]([^'"]+?)['"]\s*?,\s+['"]([^'"]+?)['"]\s*?%}?/g),
  ];

  const shortCodeHtml = shortCodeMatches.map((match) => {
    const [, linkType, url, text] = match;

    return links[linkType](url, text.trim());
  });

  return content.replace(resourcesRegex, resources(shortCodeHtml.join('\n'), resourceHeading));
};
