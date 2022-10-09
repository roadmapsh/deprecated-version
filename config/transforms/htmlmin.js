const minifyHtml = require('@minify-html/node');

module.exports = async function jsmin(content, outputPath) {
  if (outputPath.indexOf('.html') < 0) {
    return;
  }

  return minifyHtml.minify(Buffer.from(content), {
    keep_spaces_between_attributes: true,
    keep_comments: false,
    minify_css: true,
  });
};
