const { execSync } = require('child_process');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const shortcodes = require('./_11ty/shortcodes');
const jsmin = require('./_11ty/filters/jsmin');
const cssmin = require('./_11ty/filters/cssmin');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(syntaxHighlight);

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

  eleventyConfig.addNunjucksAsyncFilter('jsmin', jsmin);
  eleventyConfig.addNunjucksAsyncFilter('cssmin', cssmin);

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
