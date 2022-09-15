export class TopicOverlay {
  /**
   * @param {{ overlayId: string, contentId: string, loaderId: string }} config
   */
  constructor(config) {
    this.config = config;

    this.close = this.close.bind(this);
    this.loading = this.loading.bind(this);
    this.populate = this.populate.bind(this);
  }

  get loaderEl() {
    return document.getElementById(this.config.loaderId);
  }

  get contentEl() {
    return document.getElementById(this.config.contentId);
  }

  get overlayEl() {
    return document.getElementById(this.config.overlayId);
  }

  /**
   * @returns {TopicOverlay}
   */
  loading() {
    this.loaderEl.classList.remove('hidden'); // Show loader
    this.contentEl.replaceChildren(''); // Remove content
    this.overlayEl.classList.remove('hidden'); // Show Overlay

    return this;
  }

  /**
   * @returns {TopicOverlay}
   */
  close() {
    this.overlayEl.classList.add('hidden'); // Hide Overlay
    this.loaderEl.classList.remove('hidden'); // Show loader
    this.contentEl.replaceChildren(''); // Remove content

    return this;
  }

  /**
   * @param {string | HTMLElement} html
   * @returns {TopicOverlay}
   */
  populate(html) {
    this.contentEl.replaceChildren(html);
    this.loaderEl.classList.add('hidden');

    return this;
  }
}
