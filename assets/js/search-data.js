// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Understanding the interactions between microbial activities and biogeochemical cycles",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "# Contributed equally * Corresponding author",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-tada-our-paper-planktonindividuals-jl-a-gpu-supported-individual-based-phytoplankton-life-cycle-model-is-published-in-journal-of-open-source-software",
          title: ':tada: Our paper PlanktonIndividuals.jl: A GPU supported individual-based phytoplankton life cycle model is...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-imbalance-of-global-nutrient-cycles-exacerbated-by-the-greater-retention-of-phosphorus-over-nitrogen-in-lakes-is-published-in-nature-geoscience",
          title: ':tada: Our paper Imbalance of global nutrient cycles exacerbated by the greater retention...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-single-cell-measurements-and-modelling-reveal-substantial-organic-carbon-acquisition-by-prochlorococcus-is-published-in-nature-microbiology-covered-by-mit-news",
          title: ':tada: Our paper Single cell measurements and modelling reveal substantial organic carbon acquisition...',
          description: "",
          section: "News",},{id: "news-tada-i-started-a-new-position-as-an-assistant-professor-at-peking-university-and-now-looking-for-postdocs-and-phd-students",
          title: ':tada: I started a new position as an Assistant Professor at Peking University,...',
          description: "",
          section: "News",},{id: "research-planktonindividuals-jl",
          title: 'PlanktonIndividuals.jl',
          description: "Development of Individual-Based Micobial Life Cycle Model",
          section: "Research",handler: () => {
              window.location.href = "/research/1_project/";
            },},{id: "research-intracellular-carbon-flux",
          title: 'Intracellular Carbon Flux',
          description: "Phtosynthesis, exudation, and mixotrophy etc. in different environment",
          section: "Research",handler: () => {
              window.location.href = "/research/2_project/";
            },},{id: "research-nutrient-retention-in-global-lakes",
          title: 'Nutrient Retention in Global Lakes',
          description: "Resolving Nitrogen and Phosphorus Cycles in Global Lakes",
          section: "Research",handler: () => {
              window.location.href = "/research/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%65%6E%77%75@%70%6B%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BRGmhEAAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
