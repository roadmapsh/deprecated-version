---
layout: layouts/content.njk
pagination:
  data: "content.backend"
  size: 1
  alias: topic
  addAllPagesToCollections: false
permalink: "{{ topic.permalink }}"
---

{{ topic.content | resourceShortCodes }}
