---
layout: page
permalink: /research/
title: research
description: <em><strong>Understanding the interactions between microbial activities and biogeochemical cycles</strong></em>
nav: true
nav_order: 2
---

<!-- ## **Interactions between phytoplankton and global elemental cycles** -->

Microorganisms mediate the global cycles of climatically important elements including carbon, nitrogen, phosphorus, oxygen, sulfur and iron in various waterbodies (e.g., oceans and lakes). Aquatic microbial communities are extremely diverse, highly dynamic, and structured across a wide range of space and time-scales due to small scale features (e.g., diel cycle and (sub)mesoscale motions) which shape variations of nutrients, light, and microbial physiology. **Current climate, biogeochemistry, and earth system models typically do not resolve these local-scale physics, flexible elemental composition, diversity of phenotypes, or elemental cycling within lakes, limiting their ability to interpret or predict the effects of these phenomena. The integrated effect of such unresolved features is, however, thought to contribute significantly to global productivity and diversity, and the coupling between global nitrogen and phosphours cycles.**

My research interest mainly lies in how to understand and represent the role of these unresolved features in both oceans and lakes, and evaluate their sensitivity and potential feedback to changes in climate. I apply a competent combination of idealized theory, numerical models, and statistical tools to quantitively test ecological theories against observed data and to improve global scale predictions and state-estimates. I seek to develop and apply interpretive and predictive models of stoichiometry and biogeography of aquatic microbes, as well as microbial mediation of biogeochemical cycles in the ocean and in lakes. 

<br/>

#### **Microbial Loop and Carbon Cycle**

The structure and rates of photosynthesis and biosynthesis by primary producers in the ocean's subtropical gyres reflect the balance between photons delivered from above, macro-nutrients delivered largely from below, and essential trace metals such as iron which has both oceanic and atmospheric sources.  The observed vertical profiles in Figure 1 from North Pacific and North Atlantic subtropical gyres reveal the transition from nutrient to light limitation over a relatively short distance (less than 100m). The vertical gradients of light and fixed nitrogen oppose one another in the upper ocean suggesting an excess supply of energy near the surface. However, primary production also increases towards the surface raising the question of **how organisms are balancing carbon, energy and nutrient supply and demand.**

Phytoplankton may balance the supply and demand of photosynthesis and biosynthesis by the regulation of nutrient uptake, storage of resources in excess of demand, photo-respiration or the exudation of excess photosynthate. The exudates may be a source of carbon for heterotrophic bacteria, increasing the total biomass of bacteria, enhancing remineralization, and promoting the co-evolution of phototrophic and heterotrophic populations. In this project, we seek to understand how phytoplankton use these mechanisms (especially **exudation**) to balance the supply and demand of carbon, energy and nutrients, and **how exudates affect the population of heterotrophic bacteria**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/research_1.png" title="Figure 1" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    Figure 1. Observed climatological average of photosynthesis rate, Chla, nitrate, and photosynthetically active radiation (PAR) at HOT and BATS. The data were from 1988 to 2018 at both stations. Figure modified from <a href= "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021GB006941">Wu et al. 2021</a> 
</div>
<br/>

Few phytoplankton are strictly photo-autotrophic. Many phytoplankton are mixotrophs, utilizing dissolved organic matter, taking up particulate detrital organic matter or preying upon other living cells and even harvesting organelles. **Mixotrophic lifestyle may enhance fitness, for example  when light intensity is low but inorganic nutrients are abundant**. Mixotrophy can also save energy and can reduce resources available to competitors. However, the contribution of heterotrophic carbon assimilation to phytoplankton growth is not well quantified. One reason is that the uptake measurements using specific organic carbon sources (e.g. glucose, amino acids) do not represent the entirely available DOC pool and may underestimate the actual DOC uptake rates, and the contribution of mixotrophy.

*Prochlorococcus* are the most abundant photo-autotrophic cells on Earth, actively growing at depths ranging from the ocean surface down to the base of the photic zone (~160 m) where the light intensity varies 3-4 orders of magnitudes. Lab experiments showed that *Prochlorococcus* are mixotrophs, able to uptake dissolved organic compounds such as glucose, pyruvate, amino acids, nucleotides and perhaps DMSP. However, to what extent mixotrophy can support or replace photosynthesis for growth and/or respiration in *Prochlorococcus* is still unknown. **In this project, we seek to understand how mixotrophy supports the growth and affects the intracellular stoichiometry of *Prochlorococcus* in low light conditions**.

<br/>

## **Diel Variation of Microbial Stoichiometry**

The growth rate of phytoplankton depends on both external resource availability and intracellular allocation of macromolecules. The macromolecular allocation of phytoplankton also varies significantly in different environments. **The environmentally dependent growth rate of phytoplankton and its macromolecular allocation are important elements of its fitness**.

Previous phytoplankton models have examined the relationships between growth rates and external resource availability, internal stores of resources, and the internal allocation of different functional pools. However, most of these models are biomass-based models (Eulerian models). **Using [our own individual-based model with measurable pools of macromolecules](https://github.com/JuliaOcean/PlanktonIndividuals.jl), we seek to understand the relationship between phytoplankton growth and its macromolecular allocation in a dynamic environment**. 

<br/>

## **Nitrogen and phosphorus cycles in global lakes**

In my PhD work, I used statistical and numerical models to understand the driving factors of algal blooms in Lake Dianchi, one of the most eutrophic large shallow lakes in China. My work revealed the importance of internal nutrient cycling, relative to external inputs, during the restoration of Lake Dianchi and quantitively evaluated the contributions leading to eutrophication. I discovered that during algal blooms, the internal nutrient cycling, not external inputs, played the central role in the whole nutrient cycles in lakes, and contributed a lot to algal blooms which finally resulted in eutrophication.

As part of my postdoctoral work, I expanded my research on internal nutrient cycling from a single eutrophic lake to a meta-analysis, finding general patterns at the global scale. The study revealed that preferential phosphorus retention emerges in almost 90\% of global lakes, which exacerbates the imbalance of the nutrient cycles and could result in biodiversity losses and algal blooms in lakes or downstream ecosystems. In the future, I plan to continue this study to provide more interpretable and reliable estimates of global nutrient retention in lakes. This research will require fundamental work to build a high-resolution database of lacustrine chlorophyll-a and external nutrient inputs globally.