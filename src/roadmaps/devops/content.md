---
layout: layouts/content.njk
pagination:
  data: "content.devops"
  size: 1
  alias: topic
  addAllPagesToCollections: false
permalink: "{{ topic.permalink }}"
---

{{ topic.content | resourceShortCodes }}
