---
layout: page
title: PlanktonIndividuals.jl
description: Development of Individual-Based Micobial Life Cycle Model
img: assets/img/research_4.gif
importance: 1
---

Individual-based models differ from the density-based approaches used in most biogeochemical simulations in the way they represent heterogeneous populations. The unique power of individual-based models lies in the ability to track the position, biomass, and physiological state trajectories of individual cells. To this end, I have developed an individual-based phytoplankton life cycle model ([PlanktonIndividuals.jl](https://juliaocean.github.io/PlanktonIndividuals.jl/dev/) hereafter) with high temporal resolution to connect cellular-scale processes to population-level dynamics of marine microbes. By introducing the concept of `macro-molecular allocation' into the model, PlanktonIndividuals.jl resolves the variable elemental composition of each cell, linked to its physiological state and resource environment. PlanktonIndividuals.jl also uses intra-cellular DNA replication to inform cell division and thus connect to population dynamics in a mechanistic fashion.
It improves the skill of stoichiometric simulations compared to the widely used 'Monod' and 'Droop' models (Fig.1). Additionally, PlanktonIndividuals.jl exploits the power of modern ocean fluid dynamics models (e.g., MITgcm, ROMS, Oceananigans.jl) to provide the physical foundation to describe the environment experienced by individual microbes at local scales.

At present, PlanktonIndividuals.jl represents phytoplankton, resolving carbon, nitrogen, and phosphorus cycles. In my future work, I plan to extend the trophic structure of the model to include heterotrophic bacteria and to resolve the cellular allocation and flows of iron, silica, and oxygen cycles. This will enable the model to further examine the elemental composition of marine microbes beyond carbon, nitrogen and phosphorus, and to investigate the synergetic and competitive relationships between phytoplankton and heterotrophic bacteria from their individual behaviors to interpret their traits at the population level.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/research_5.png" title="Figure 1" class="img-fluid rounded z-depth-0" %}
    </div>
</div>
<div class="caption">
    Figure 1. Schematic representations of photoautotroph physiology in ecosystem models. Figure modified from <a href= "https://www.annualreviews.org/doi/10.1146/annurev-marine-120709-142848">Follows et al. 2011</a> 
</div>
