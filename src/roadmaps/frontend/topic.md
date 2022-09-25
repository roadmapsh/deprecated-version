---
layout: layouts/topic.njk
pagination:
  data: "topics.frontend"
  size: 1
  alias: topic
  addAllPagesToCollections: false
permalink: "{{ topic.permalink }}"
---

{{ topic.content | resourceShortCodes }}
