const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { exec } = require('child_process');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const markdown = require('./config/utils/markdown');
const htmlmin = require('./config/transforms/htmlmin');
const sortedRoadmaps = require('./config/collections/sorted-roadmaps');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget('./src/styles/main.css');
  eleventyConfig.addWatchTarget('./src/scripts/');

  eleventyConfig.ignores.add('./src/roadmaps/**/content');

  // To be copied as it is
  eleventyConfig
    .addPassthroughCopy('./src/assets')
    .addPassthroughCopy('./src/CNAME')
    .addPassthroughCopy('./src/.nojekyll');

  eleventyConfig.addCollection('skillRoadmaps', sortedRoadmaps('skill-roadmap'));
  eleventyConfig.addCollection('roleRoadmaps', sortedRoadmaps('role-roadmap'));

  // Only add the htmlmin transform if we are not in dev mode
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', htmlmin);
  }

  // Custom markdown library
  eleventyConfig.setLibrary('md', markdown);

  // Rebuild tailwind before reloading
  eleventyConfig.on('eleventy.after', async () => {
    console.log('Building Tailwind…');
    exec('npm run build:tailwind').toString();

    console.log('Bundling JavaScript files');
    const scriptsDir = path.join(__dirname, './src/scripts/');
    return esbuild.build({
      entryPoints: fs.readdirSync(scriptsDir).map((scriptName) => path.join(scriptsDir, scriptName)),
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
