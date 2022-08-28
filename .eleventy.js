const { execSync } = require('child_process');
const shortcodes = require('./_11ty/shortcodes');
const jsMin = require('./_11ty/filters/jsmin');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget('./src/styles/main.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  // Shortcodes
  Object.keys(shortcodes).forEach((shortCodeName) => {
    eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName]);
  });

  // Rebuild tailwind before reloading
  eleventyConfig.on('eleventy.after', async () => {
    console.log('Building Tailwind…');
    console.log(execSync('npm run build:tailwind').toString());
  });

  eleventyConfig.addNunjucksAsyncFilter('jsmin', jsMin);

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
