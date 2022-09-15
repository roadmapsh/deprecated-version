/**
 * @typedef {{ roadmapId: string }} TopicConfig
 */
export class Topic {
  /**
   * @param {TopicConfig} config
   */
  constructor(config) {
    this.config = config;

    this.handleCloseTopic = this.handleCloseTopic.bind(this);
    this.handleLoadTopic = this.handleLoadTopic.bind(this);
    this.init = this.init.bind(this);
  }

  fetchTopicHtml(roadmapId, groupId) {
    const topicPartial = groupId.replace(/^\d+-/, '').replaceAll(/:/g, '/');
    const fullUrl = `/${roadmapId}/${topicPartial}/`;

    return fetch(fullUrl)
      .then((res) => {
        return res.text();
      })
      .then((topicHtml) => {
        // It's full HTML with page body, head etc
        // We only need the inner HTML of the #topic-content
        const node = new DOMParser().parseFromString(topicHtml, 'text/html');

        return node.querySelector('#topic-content');
      });
  }

  handleCloseTopic(e) {
    if (e.target.closest('#topic-content-content')) {
      return;
    }

    e.stopPropagation();

    document.querySelector('#topic-content-overlay').classList.add('hidden');
  }

  handleLoadTopic(e) {
    const targetGroup = e.target.closest('g') || {};
    const groupId = targetGroup.dataset ? targetGroup.dataset.groupId : '';
    if (!groupId) {
      return;
    }

    e.stopPropagation();

    if (/^ext_link/.test(groupId)) {
      window.open(`https://${groupId.replace('ext_link:', '')}`);
      return;
    }

    document.querySelector('#topic-content-overlay').classList.remove('hidden');

    this.fetchTopicHtml(this.config.roadmapId, groupId)
      .then((content) => {
        document
          .querySelector('#topic-content-content')
          .replaceChildren(content);
      })
      .catch(console.error);
  }

  init() {
    window.addEventListener('click', this.handleCloseTopic);
    window.addEventListener('click', this.handleLoadTopic);
  }
}

/**
 * @param {TopicConfig} config
 */
window.initTopic = function (config) {
  const topic = new Topic(config);
  topic.init();
};
