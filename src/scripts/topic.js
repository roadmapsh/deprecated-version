/**
 * @typedef {{ roadmapId: string, topicLoaderId: string, topicContentId: string, topicOverlayId: string }} TopicConfig
 */
import { TopicOverlay } from './topic-overlay';

export class Topic {
  /**
   * @param {TopicConfig} config
   */
  constructor(config) {
    this.config = config;

    this.topicOverlay = new TopicOverlay({
      contentId: this.config.topicContentId,
      loaderId: this.config.topicLoaderId,
      overlayId: this.config.topicOverlayId,
    });

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
        // We only need the inner HTML of the #main-content
        const node = new DOMParser().parseFromString(topicHtml, 'text/html');

        return node.getElementById('main-content');
      });
  }

  handleCloseTopic(e) {
    // If clicked inside the content container
    if (e.target.closest(this.config.topicContentId)) {
      return;
    }

    e.stopPropagation();

    this.topicOverlay.close();
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

    this.topicOverlay.loading();

    this.fetchTopicHtml(this.config.roadmapId, groupId)
      .then((content) => {
        this.topicOverlay.populate(content);
      })
      .catch((e) => {
        console.error(e);
        this.topicOverlay.populate('Error loading the content!');
      });
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
