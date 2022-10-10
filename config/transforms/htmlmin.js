const minifyHtml = require('@minify-html/node');

module.exports = async function jsmin(content, outputPath) {
  if (outputPath.indexOf('.html') < 0) {
    return;
  }

  return minifyHtml.minify(Buffer.from(content), {
    keep_spaces_between_attributes: true,
    keep_comments: false,
    // There is an issue with CSS minification, causing it to result in broken CSS
    //   https://github.com/wilsonzlin/minify-html/issues/110
    //   https://github.com/Mnwa/css-minify/issues/1
    // Enable it once the issue is resolved
    // minify_css: true,
  });
};
