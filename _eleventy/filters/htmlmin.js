const htmlmin = require('html-minifier');

module.exports = async function jsmin(content, outputPath) {
  if (outputPath.indexOf('.html') < 0) {
    return;
  }

  return htmlmin.minify(content, {
    useShortDoctype: true,
    removeComments: true,
    collapseWhitespace: true,
  });
};
