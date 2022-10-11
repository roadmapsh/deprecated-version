---
layout: layouts/topic.njk
pagination:
  data: "topics.blockchain"
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
