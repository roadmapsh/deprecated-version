const { execSync } = require('child_process');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdown = require('./_eleventy/utils/markdown');

const shortcodes = require('./_eleventy/shortcodes');
const jsmin = require('./_eleventy/filters/jsmin');
const cssmin = require('./_eleventy/filters/cssmin');
const htmlmin = require('./_eleventy/filters/htmlmin');
const sortByOrder = require('./_eleventy/filters/sort-by-order');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget('./src/styles/main.css');

  // To be copied as it is
  eleventyConfig
    .addPassthroughCopy('./src/assets')
    .addPassthroughCopy('./src/CNAME')
    .addPassthroughCopy('./src/.nojekyll');

  // Shortcodes
  Object.keys(shortcodes).forEach((shortCodeName) => {
    eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName]);
  });

  // Rebuild tailwind before reloading
  eleventyConfig.on('eleventy.after', async () => {
    console.log('Building Tailwind…');
    console.log(execSync('npm run build:tailwind').toString());
  });

  // Filters
  eleventyConfig.addNunjucksAsyncFilter('jsmin', jsmin);
  eleventyConfig.addNunjucksAsyncFilter('cssmin', cssmin);
  eleventyConfig.addNunjucksFilter('htmlmin', htmlmin);
  eleventyConfig.addFilter('sortByOrder', sortByOrder);

  // Transforms
  eleventyConfig.addTransform('htmlmin', htmlmin);

  // Custom markdown library
  eleventyConfig.setLibrary('md', markdown);

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
