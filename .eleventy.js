const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

const { execSync } = require('child_process');

const markdown = require('./config/utils/markdown');

// Shortcodes
const linkShortCodes = require('./config/shortcodes/links');
const version = require('./config/shortcodes/version');
const resources = require('./config/shortcodes/resources');

// Filters
const jsmin = require('./config/filters/jsmin');
const cssmin = require('./config/filters/cssmin');
const htmlmin = require('./config/filters/htmlmin');
const sortByOrder = require('./config/filters/sort-by-order');
const resourceShortCodes = require('./config/filters/resource-shortcodes');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addWatchTarget('./src/styles/main.css');
  eleventyConfig.addWatchTarget('./src/scripts/');

  eleventyConfig.ignores.add('./src/roadmaps/**/content');

  // To be copied as it is
  eleventyConfig
    .addPassthroughCopy('./src/assets')
    .addPassthroughCopy('./src/CNAME')
    .addPassthroughCopy('./src/.nojekyll');

  // Shortcodes
  eleventyConfig.addShortcode('Video', linkShortCodes.Video);
  eleventyConfig.addShortcode('Blog', linkShortCodes.Blog);
  eleventyConfig.addShortcode('Course', linkShortCodes.Course);
  eleventyConfig.addShortcode('Official', linkShortCodes.Official);
  eleventyConfig.addShortcode('version', version);
  eleventyConfig.addPairedShortcode('resources', resources);

  // Filters
  eleventyConfig.addNunjucksAsyncFilter('jsmin', jsmin);
  eleventyConfig.addNunjucksAsyncFilter('cssmin', cssmin);
  eleventyConfig.addNunjucksFilter('htmlmin', htmlmin);
  eleventyConfig.addFilter('sortByOrder', sortByOrder);
  eleventyConfig.addFilter('resourceShortCodes', resourceShortCodes);

  // Transforms
  eleventyConfig.addTransform('htmlmin', htmlmin);
  // @todo add transform for jsmin
  // @todo add transform for cssmin

  // Custom markdown library
  eleventyConfig.setLibrary('md', markdown);

  // Rebuild tailwind before reloading
  eleventyConfig.on('eleventy.after', async () => {
    console.log('Building Tailwind…');
    console.log(execSync('npm run build:tailwind').toString());

    console.log('Bundling JavaScript files');
    const scriptsDir = path.join(__dirname, './src/scripts/');
    return esbuild.build({
      entryPoints: fs
        .readdirSync(scriptsDir)
        .map((scriptName) => path.join(scriptsDir, scriptName)),
      entryNames: '[dir]/[name]',
      outdir: path.join(__dirname, '_site', 'scripts'),
      bundle: true,
      minify: true,
      sourcemap: process.env.ELEVENTY_ENV !== 'production',
    });
  });

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
