---
layout: page
permalink: /publications/
title: publications
description: "# Contributed equally * Corresponding author"
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->

### Published Papers
<div class="publications">
  {% bibliography -f papers -q @article %}
</div>

<br/>

### Presentation & Talks

<hr>

<div class="publications">
  {% bibliography -f papers -q @inproceedings %}
</div>
