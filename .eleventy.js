const { execSync } = require('child_process');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget('./src/styles/main.css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.on('eleventy.after', async () => {
    console.log('Building Tailwind…');
    console.log(execSync('npm run build:tailwind').toString());
  });

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
