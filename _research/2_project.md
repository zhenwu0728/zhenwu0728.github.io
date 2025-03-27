---
layout: page
title: Intracellular Carbon Flux
description: Phtosynthesis, exudation, and mixotrophy etc. in different environment
img: assets/img/research_6.png
importance: 2
---

Phytoplankton capture solar energy, fix carbon and nutrients into organic matters at specific stoichiometric ratios, and together with heterotrophic bacteria, fuel the whole marine food web. The structure and rates of photosynthesis and biosynthesis by phytoplankton in the ocean’s subtropical gyres reflect the balance between photons delivered from above and macro-nutrients delivered largely from below (Fig.1). In my past research, I have focused on how phytoplankton balance the supply and demand of carbon, energy and nutrients during my postdoctoral tenure.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research_1.png" title="Figure 1" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    Figure 1. Observed climatological average of photosynthesis rate, Chla, nitrate, and photosynthetically active radiation (PAR) at HOT and BATS. The data were from 1988 to 2018 at both stations. Figure modified from <a href= "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021GB006941">Wu et al. 2021</a> 
</div>

I implemented the machanisms of carbon exudation of phytoplankton in the MIT Darwin model, a widely used trait-based marine ecosystem model. I found that exudation by phytoplankton, which aims to balance energy and nutrient fluxes, contributes as much as 20% of the dissolved organic carbon supply and accounts for as much as 50% of primary production in oligotrophic surface ocean. In addition, my recent discovery has uncovered that *Prochlorococcus*, the most numerically abundant phytoplankton in the ocean, utilize significant amount of organic carbon in addition to photosynthesis, especially when light intensity is low. These two studies suggest that phytoplankton may uptake or release dissolved organic carbon in light-limited (deep ocean) or nutriet-limited (surface ocean) conditions, altering the C:N:P ratios at daily scale.

In the future, I plan to take the advantage of 'macro-molecular allocation' in PlanktonIndividuals.jl to examine the integreated effect of these two processes on cellular carbon flux under different nutrient and light conditions. I will test against various species of phytoplankton, starting with the widely studied *Prochlorococcus*, and expanding to diatoms, prokaryotes, and nitrogen fixers.
