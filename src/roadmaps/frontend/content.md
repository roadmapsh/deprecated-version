---
layout: layouts/content.njk
pagination:
  data: "content.frontend"
  size: 1
  alias: topic
  addAllPagesToCollections: false
permalink: "{{ topic.permalink }}"
---

{{ topic.content }}

{% resources %}
  {% Blog "https://www.vox.com/2014/6/16/18076282/the-internet", "The Internet Explained" %}
  {% Blog "http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm", "How Does the Internet Work?" %}
  {% Blog "/guides/what-is-internet", "Introduction to Internet" %}
  {% Blog "https://www.youtube.com/watch?v=x3c1ih2NJEg", "How does the Internet work?" %}
  {% Blog "https://www.youtube.com/watch?v=7_LPdttKXPc", "How the Internet Works in 5 Minutes" %}
  {% Blog "https://internetfundamentals.com", "Learn How the Web Works" %}
{% endresources %}

