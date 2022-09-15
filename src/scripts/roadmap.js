import { wireframeJSONToSVG } from 'roadmap-renderer';

/**
 * @typedef {{ jsonUrl: string, containerId: string }} RoadmapConfig
 */
export class Roadmap {
  /**
   * @param {RoadmapConfig} config
   */
  constructor(config) {
    this.config = config;

    this.init = this.init.bind(this);
    this.onDOMLoaded = this.onDOMLoaded.bind(this);
    this.fetchRoadmapSvg = this.fetchRoadmapSvg.bind(this);
  }

  /**
   * @param { string } jsonUrl
   * @returns {Promise<SVGElement>}
   */
  fetchRoadmapSvg(jsonUrl) {
    if (!jsonUrl) {
      console.error('jsonUrl not defined in frontmatter');
      return null;
    }

    return fetch(jsonUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        return wireframeJSONToSVG(json);
      });
  }

  onDOMLoaded() {
    this.fetchRoadmapSvg(this.config.jsonUrl)
      .then((svg) => {
        document.getElementById(this.config.containerId).replaceChildren(svg);
      })
      .catch(console.error);
  }

  init() {
    window.addEventListener('DOMContentLoaded', this.onDOMLoaded);
  }
}

/**
 * @param {RoadmapConfig} config
 */
window.initRoadmap = function (config) {
  const renderer = new Roadmap(config);
  renderer.init();
};
