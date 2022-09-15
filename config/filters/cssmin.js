const CleanCSS = require('clean-css');

module.exports = async function cssmin(code, callback) {
  try {
    const minified = new CleanCSS({}).minify(code);
    callback(null, minified.styles);
  } catch (err) {
    console.error('Terser error: ', err);
    callback(null, code);
  }
};
