module.exports = {
  eleventyComputed: {
    seo: (data) => {
      const topic = data.topic;
      const config = data.config;

      if (!topic) {
        return {};
      }

      const topicHeading = topic.heading.replace(/[\?\.]/g, '');

      return {
        title: `${topic.heading} — roadmap.sh`,
        description: `Free resources to learn ${topicHeading}. ${data.config.description}`,
        keywords: [topic.heading, ...data.config.keywords],
      };
    },
  },
};
