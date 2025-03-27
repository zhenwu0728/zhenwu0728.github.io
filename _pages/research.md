---
layout: page
permalink: /research/
title: research
description: <em><strong>Understanding the interactions between microbial activities and biogeochemical cycles</strong></em>
nav: true
nav_order: 2
horizontal: true
---

<hr>

### **Background & Significance**

Microorganisms mediate the global cycles of climatically important elements including carbon, nitrogen, phosphorus, oxygen, sulfur and iron in various waterbodies (e.g., oceans and lakes). Aquatic microbial communities are extremely diverse, highly dynamic, and structured across a wide range of space and time-scales due to small scale features (e.g., diel cycle and (sub)mesoscale motions) which shape variations of nutrients, light, and microbial physiology. **Current climate, biogeochemistry, and earth system models typically do not resolve these local-scale physics, flexible elemental composition, diversity of phenotypes, or elemental cycling within lakes, limiting their ability to interpret or predict the effects of these phenomena. The integrated effect of such unresolved features is, however, thought to contribute significantly to global productivity and diversity, and the coupling between global nitrogen and phosphours cycles.**

My research interest mainly lies in how to understand and represent the role of these unresolved features in both oceans and lakes, and evaluate their sensitivity and potential feedback to changes in climate. I apply a competent combination of idealized theory, numerical models, and statistical tools to quantitively test ecological theories against observed data and to improve global scale predictions and state-estimates. I seek to develop and apply interpretive and predictive models of stoichiometry and biogeography of aquatic microbes, as well as microbial mediation of biogeochemical cycles in the ocean and in lakes. 

<hr>

### **Research Projects**

<p></p>

<div class="research">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.research | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.liquid %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.liquid %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.research | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-1">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.liquid %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.liquid %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
