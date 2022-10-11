---
layout: layouts/topic.njk
pagination:
  data: "topics.backend"
  size: 1
  alias: topic
  addAllPagesToCollections: false
permalink: "{{ topic.permalink }}"
sitemap:
  priority: 0.7
  changefreq: monthly
tags:
  - topic-sitemap
---

{{ topic.content }}
