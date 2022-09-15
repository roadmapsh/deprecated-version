import { fetchRoadmapSvg, fetchTopicHtml } from './api';

/**
 * @typedef {{ jsonUrl: string, roadmapContainerId: string, roadmapId: string }} Settings
 */

class RoadmapRenderer {
  /** @param {Settings} settings */
  constructor(settings) {
    this.settings = settings;

    this.onDOMLoaded = this.onDOMLoaded.bind(this);
    this.bindUI = this.bindUI.bind(this);
    this.handleCloseTopic = this.handleCloseTopic.bind(this);
  }

  onDOMLoaded() {
    fetchRoadmapSvg(this.settings.jsonUrl)
      .then((svg) => {
        document
          .getElementById(this.settings.roadmapContainerId)
          .replaceChildren(svg);
      })
      .catch(console.error);
  }

  handleCloseTopic(e) {
    if (e.target.closest('#topic-content-content')) {
      return;
    }

    document.querySelector('#topic-content-overlay').classList.add('hidden');
  }

  handleLoadTopic(e) {
    const targetGroup = e.target.closest('g') || {};
    const groupId = targetGroup.dataset ? targetGroup.dataset.groupId : '';
    if (!groupId) {
      return;
    }

    if (/^ext_link/.test(groupId)) {
      window.open(`https://${groupId.replace('ext_link:', '')}`);
      return;
    }

    document.querySelector('#topic-content-overlay').classList.remove('hidden');

    fetchTopicHtml(this.settings.roadmapId, groupId)
      .then((content) => {
        document
          .querySelector('#topic-content-content')
          .replaceChildren(content);
      })
      .catch(console.error);
  }

  onClick(e) {
    this.handleLoadTopic(e);
    this.handleCloseTopic(e);
  }

  bindUI() {
    window.addEventListener('DOMContentLoaded', this.onDOMLoaded);
    window.addEventListener('click', this.onClick);
  }
}

/** @param {Settings} settings */
window.renderRoadmap = function (settings) {
  const renderer = new RoadmapRenderer(settings);
  renderer.bindUI();
};
