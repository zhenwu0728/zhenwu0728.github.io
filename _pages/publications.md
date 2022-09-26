---
layout: page
permalink: /publications/
title: publications
description: "# Contributed equally * Corresponding author"
years: [2022,2021,2020,2019,2018,2017,2016,2015]
nav: true
nav_order: 3
---
<!-- _pages/publications.md -->
### Submitted/Under Review
<div class="publications">
  {% bibliography -f papers -q @unpublished %}
</div>

<br/>

### Published Papers
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @article[year={{y}}]* %}
{% endfor %}

</div>

<br/>

### Presentation & Talks
<div class="publications">
  {% bibliography -f papers -q @inproceedings %}
</div>
