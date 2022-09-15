export class Topic {
  constructor() {
    this.overlayId = 'topic-overlay';
    this.contentId = 'topic-content';
    this.loaderId = 'topic-loader';
    this.topicBodyId = 'topic-body';

    this.handleTopicClick = this.handleTopicClick.bind(this);

    this.close = this.close.bind(this);
    this.loading = this.loading.bind(this);
    this.populate = this.populate.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);

    this.init = this.init.bind(this);
  }

  get loaderEl() {
    return document.getElementById(this.loaderId);
  }

  get contentEl() {
    return document.getElementById(this.contentId);
  }

  get overlayEl() {
    return document.getElementById(this.overlayId);
  }

  loading() {
    this.loaderEl.classList.remove('hidden'); // Show loader
    this.contentEl.replaceChildren(''); // Remove content
    this.overlayEl.classList.remove('hidden'); // Show Overlay
  }

  close() {
    this.overlayEl.classList.add('hidden'); // Hide Overlay
    this.loaderEl.classList.remove('hidden'); // Show loader
    this.contentEl.replaceChildren(''); // Remove content
  }

  /**
   * @param {string | HTMLElement} html
   */
  populate(html) {
    this.contentEl.replaceChildren(html);
    this.loaderEl.classList.add('hidden');
  }

  fetchTopicHtml(roadmapId, topicId) {
    const topicPartial = topicId.replace(/^\d+-/, '').replaceAll(/:/g, '/');
    const fullUrl = `/${roadmapId}/${topicPartial}/`;

    return fetch(fullUrl)
      .then((res) => {
        return res.text();
      })
      .then((topicHtml) => {
        // It's full HTML with page body, head etc.
        // We only need the inner HTML of the #main-content
        const node = new DOMParser().parseFromString(topicHtml, 'text/html');

        return node.getElementById('main-content');
      });
  }

  handleTopicClick(e) {
    const { roadmapId, topicId } = e.detail;
    if (!topicId || !roadmapId) {
      console.log('Missing topic or roadmap: ', e.detail);
      return;
    }

    if (/^ext_link/.test(topicId)) {
      window.open(`https://${topicId.replace('ext_link:', '')}`);
      return;
    }

    this.loading();
    this.fetchTopicHtml(roadmapId, topicId)
      .then((content) => {
        this.populate(content);
      })
      .catch((e) => {
        console.error(e);
        this.populate('Error loading the content!');
      });
  }

  handleOverlayClick(e) {
    // Clicked inside the roadmap topic
    if (e.target.closest(`#${this.topicBodyId}`)) {
      return;
    }

    this.close();
  }

  init() {
    window.addEventListener('topic.click', this.handleTopicClick);
    window.addEventListener('click', this.handleOverlayClick);
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'escape') {
        this.close();
      }
    });
  }
}
