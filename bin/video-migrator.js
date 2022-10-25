const fs = require('fs');
const path = require('path');
const yaml = require('json-to-pretty-yaml');
const videos = require('./data/videos.json');

videos.forEach((video) => {
  const { id: videoId } = video;

  const videoPath = path.join(__dirname, `../src/videos/${videoId}.md`);
  const videoWithoutFrontmatter = fs.readFileSync(videoPath, 'utf8');
  const videoFrontMatter = yaml.stringify({
    layout: 'layouts/video.njk',
    title: video.title,
    description: video.description,
    duration: video.duration,
    isNew: video.isNew,
    date: video.createdAt.replace(/T.*/, ''),
    sitemap: {
      priority: 0.7,
      changefreq: 'weekly',
    },
    tags: ['video', `${video.type}-video`, `video-sitemap`],
  });

  const videoWithFrontmatter = `---\n${videoFrontMatter}---\n\n${videoWithoutFrontmatter}`;

  console.log(`Writing video ${videoId} to disk`);
  fs.writeFileSync(videoPath, videoWithFrontmatter);
});
