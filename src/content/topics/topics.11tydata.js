module.exports = {
  eleventyComputed: {
    topicPage: (data) => {
      const roadmap = data.roadmap;
      const topics = data.topics || [];

      if (!roadmap) {
        return {};
      }

      return {
        heading: `${roadmap.featuredTitle} Topics`,
        roadmapTopics: topics.filter((topic) => topic.roadmapId === roadmap.id),
        roadmap: {
          title: roadmap.featuredTitle,
          permalink: roadmap.permalink,
        },
      };
    },
  },
};
