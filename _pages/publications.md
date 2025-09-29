---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">Google Scholar</a>.</div>
{% endif %}

{% include base_path %}

<h2>Selected Publications</h2>
{% for post in site.publications reversed %}
  {% if post.selected %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2>Other Publications</h2>
{% for post in site.publications reversed %}
  {% if post.selected != true %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
