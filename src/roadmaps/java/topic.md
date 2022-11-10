---
layout: "layouts/topic.njk"
pagination:
  data: "topics.java"
  size: 1
  alias: "topic"
  addAllPagesToCollections: true
permalink: "{{ topic.permalink }}"
sitemap:
  priority: 0.7
  changefreq: "monthly"
tags:
  - "topic-sitemap"
---

{{ topic.content }}