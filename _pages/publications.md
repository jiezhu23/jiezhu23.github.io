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

{% assign sorted_publications = site.publications | sort: "date" | reverse | sort: "priority" %}
{% assign selected_publications = sorted_publications | where: "selected", true %}
{% assign other_publications = sorted_publications | where_exp: "post", "post.selected != true" %}

<h2>Selected Publications</h2>
{% for post in selected_publications %}
  {% include archive-single.html %}
{% endfor %}

<h2>Other Publications</h2>
{% for post in other_publications %}
  {% include archive-single.html %}
{% endfor %}
