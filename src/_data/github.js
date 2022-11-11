const fetch = require('node-fetch');
const { AssetCache } = require('@11ty/eleventy-fetch');

const formatter = Intl.NumberFormat('en-US', {
  notation: 'compact',
});

module.exports = async function () {
  console.log('Fetching new github stargazers count…');

  let asset = new AssetCache('roadmap_github_data ');
  if (asset.isCacheValid('1d')) {
    return asset.getCachedValue();
  }

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch('https://api.github.com/repos/kamranahmedse/developer-roadmap')
    .then((res) => res.json()) // node-fetch option to transform to json
    .then((json) => {
      // prune the data to return only what we want
      const repoData = {
        stargazers_count: formatter.format(json.stargazers_count),
      };

      asset.save(repoData, 'json');

      return repoData;
    });
};
