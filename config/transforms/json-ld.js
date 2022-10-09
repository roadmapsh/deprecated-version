const { JSDOM } = require('jsdom');

// Validate json-ld being valid JSON and add the document images to the JSON.
module.exports = function jsonLd(rawContent, outputPath) {
  let content = rawContent;

  if (outputPath && outputPath.endsWith('.html')) {
    const dom = new JSDOM(content);
    const jsonLd = dom.window.document.querySelector(
      "script[type='application/ld+json']"
    );
    if (!jsonLd) {
      return content;
    }

    const images = [
      ...dom.window.document.querySelectorAll('main img,amp-img'),
    ];
    try {
      const obj = JSON.parse(jsonLd.textContent);

      if (images.length) {
        obj.image = images.map((img) => `https://roadmap.sh/${img.src}`);
        jsonLd.textContent = JSON.stringify(obj);
        content = dom.serialize();
      }
    } catch (e) {
      throw new Error(`Failed to parse json-ld: ${e.message}`);
    }
  }

  return content;
};
