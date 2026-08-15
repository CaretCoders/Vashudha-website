import { CropReferenceData, ResearchDomain, JournalPost, TeamMember, MeasurementCategory, RoadmapStage } from "../types";

export const HERO_SOIL_IMAGE = "/src/assets/images/hands_holding_soil_1786696581259.jpg";
export const CROP_FIELD_IMAGE = "/src/assets/images/vashudha_crop_field_1786636763783.jpg";
export const SOIL_TEXTURE_BG = "/src/assets/images/soil_texture_bg_1786696186320.jpg";
export const SMART_FARM_AERIAL_BG = "/src/assets/images/smart_farm_aerial_1786696197859.jpg";
export const DEEP_ROOTS_EARTH_BG = "/src/assets/images/deep_roots_earth_1786696211611.jpg";
export const HANDS_HOLDING_SOIL_IMAGE = "/src/assets/images/hands_holding_soil_1786696581259.jpg";
export const STORYBOARD_IMAGE = "/vashudha_storyboard.png";
export const VASHUDHA_LOGO = "/vashudha_logo.svg";

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  {
    id: "01",
    number: "01",
    title: "Soil Science",
    description: "Deep examination of soil composition, nutrient dynamics, pH equilibrium, electrical conductivity (EC), organic matter turnover, water behavior, and active soil biology.",
    keyTopics: ["Dynamic Nutrient Availability", "Root Zone Hydraulic Conductivity", "Soil Microbe Respiration", "Humic Matrix Interactions"],
    currentFocus: "Calibrating multi-depth moisture tension curves across varied soil texture profiles."
  },
  {
    id: "02",
    number: "02",
    title: "Crop Science",
    description: "Understanding growth stage milestones, micro-nutrient assimilation windows, abiotic stress signaling, and immediate physiological crop responses to root-zone changes.",
    keyTopics: ["Stage-Specific Uptake Windows", "Transpiration Rate Proxying", "Stomatal Conductance Signals", "Root Exudate Behavior"],
    currentFocus: "Mapping vegetative vs flowering nutrient demand shifts in cereal crops."
  },
  {
    id: "03",
    number: "03",
    title: "Sustainable Agriculture",
    description: "Evaluating natural farming techniques, regenerative soil cover practices, Integrated Pest Management (IPM), and Integrated Nutrient Management (INM) frameworks.",
    keyTopics: ["Bio-Stimulant Efficacy", "Microbial Inoculant Persistence", "Synthetic Input Phase-Down Patterns", "Cover Crop Residue Dynamics"],
    currentFocus: "Quantifying synthetic nitrogen reduction benchmarks in pilot plots."
  },
  {
    id: "04",
    number: "04",
    title: "IoT & Sensors",
    description: "Engineering custom sensor hardware, field-ready enclosures, multi-depth probes, SDI-12 protocol integration, ultra-low power telemetry, and long-term field stability.",
    keyTopics: ["Probe Drift Compensation", "Soil Temperature Normalized EC", "Solar-Capacitor Energy Harvesting", "Mesh Field Radios"],
    currentFocus: "Testing zero-maintenance multi-parameter soil probes under high salinity."
  },
  {
    id: "05",
    number: "05",
    title: "Data Intelligence",
    description: "Designing real-time data ingestion pipelines, time-series signal cleaning, environmental anomaly detection, and growth-stage reference model construction.",
    keyTopics: ["Sensor Outlier Filtering", "Spatial Interpolation Algorithms", "Diurnal Moisture Fluctuation Modeling", "Weather API Contextualization"],
    currentFocus: "Developing automated baseline noise filtering for in-situ soil tension sensors."
  },
  {
    id: "06",
    number: "06",
    title: "Machine Learning",
    description: "Training predictive models to identify hidden stress patterns, estimate moisture depletion trajectories, and formulate field-specific, context-aware recommendations.",
    keyTopics: ["Temporal Pattern Recognition", "Phenology Stage Classification", "Probabilistic Stress Scoring", "Intervention Impact Models"],
    currentFocus: "Validating stage-aware moisture deficit predictions against manual core samples."
  },
  {
    id: "07",
    number: "07",
    title: "Field Validation",
    description: "Progressing through rigorous testing rings: controlled greenhouse micro-plots, dedicated university partner trial farms, and real-world working farm validations.",
    keyTopics: ["Split-Plot Control Trials", "Farmer Ground-Truth Feedback", "Yield Parity Verification", "Chemical Input Reduction Audit"],
    currentFocus: "Running multi-season split-field trials with regional cereal growers."
  }
];

export const CROP_REFERENCE_DATA: CropReferenceData[] = [
  {
    id: "wheat",
    cropName: "Wheat (Triticum aestivum)",
    scientificName: "Triticum aestivum",
    category: "Cereal Grain",
    researchNote: "Wheat soil response varies heavily between crown root initiation and grain filling. Standard practice often over-applies nitrogen during early vegetative stages when root uptake is still establishing.",
    growthStages: [
      {
        stageName: "Germination & Tillering",
        description: "Crown root system establishes; plant requires steady shallow moisture and balanced phosphorus without excessive nitrate loading.",
        targetMoistureRange: [60, 75],
        targetSoilTempRange: [15, 22],
        targetPhRange: [6.2, 7.0],
        targetEcRange: [1.2, 1.8],
        keyNutrientFocus: "Available Orthophosphate & Calcium",
        typicalInterventionRisk: "Premature nitrogen surge causing rank growth with weak root depth."
      },
      {
        stageName: "Jointing & Booting",
        description: "Rapid stem elongation and flag leaf emergence; water requirement surges. Soil oxygenation remains vital.",
        targetMoistureRange: [70, 85],
        targetSoilTempRange: [18, 25],
        targetPhRange: [6.3, 6.8],
        targetEcRange: [1.5, 2.2],
        keyNutrientFocus: "Balanced Nitrogen & Potassium",
        typicalInterventionRisk: "Over-irrigation leading to root zone hypoxia during spikelet formation."
      },
      {
        stageName: "Flowering & Grain Filling",
        description: "Translocation of reserves into grain; soil moisture deficit directly impacts kernel weight. Nitrogen inputs must taper.",
        targetMoistureRange: [55, 70],
        targetSoilTempRange: [20, 26],
        targetPhRange: [6.2, 6.8],
        targetEcRange: [1.0, 1.6],
        keyNutrientFocus: "Potassium & Zinc Translocation",
        typicalInterventionRisk: "Late synthetic chemical top-dressing that remains unassimilated in dry surface soil."
      }
    ]
  },
  {
    id: "paddy",
    cropName: "Paddy Rice (Oryza sativa)",
    scientificName: "Oryza sativa",
    category: "Grain / Wetland",
    researchNote: "Alternate Wetting and Drying (AWD) research shows rice does not need continuous submergence. Field sensing pinpoints exact re-flooding thresholds to save water and reduce methane.",
    growthStages: [
      {
        stageName: "Transplanting & Active Tillering",
        description: "Root establishment in puddled or dry-seeded soil; monitor redox potential and nitrogen availability in upper 15cm.",
        targetMoistureRange: [85, 100],
        targetSoilTempRange: [22, 30],
        targetPhRange: [5.8, 6.8],
        targetEcRange: [1.0, 2.0],
        keyNutrientFocus: "Ammoniacal Nitrogen & Zinc",
        typicalInterventionRisk: "Unnecessary continuous deep flooding suppressing early root branching."
      },
      {
        stageName: "Panicle Initiation",
        description: "Critical yield-determining stage; soil water tension must remain within narrow optimal boundaries to prevent spikelet sterility.",
        targetMoistureRange: [75, 90],
        targetSoilTempRange: [24, 32],
        targetPhRange: [6.0, 6.8],
        targetEcRange: [1.2, 1.8],
        keyNutrientFocus: "Potassium & Silica Uptake",
        typicalInterventionRisk: "Dry root stress causing yield loss during panicle emergence."
      },
      {
        stageName: "Grain Ripening",
        description: "Moisture levels naturally recede; field drying prepares crop for harvest while maintaining kernel density.",
        targetMoistureRange: [40, 60],
        targetSoilTempRange: [20, 28],
        targetPhRange: [6.0, 7.0],
        targetEcRange: [0.8, 1.4],
        keyNutrientFocus: "Dry Matter Translocation",
        typicalInterventionRisk: "Late flooding causing lodging and post-harvest grain decay."
      }
    ]
  },
  {
    id: "cotton",
    cropName: "Cotton (Gossypium hirsutum)",
    scientificName: "Gossypium hirsutum",
    category: "Fiber Crop",
    researchNote: "Cotton is notoriously sensitive to vegetation vs reproductive balance. Excessive nitrogen and water in early squaring triggers rampant leaves instead of bolls.",
    growthStages: [
      {
        stageName: "Squaring (Pinhead to Matchhead)",
        description: "Floral buds develop; soil moisture must be managed to encourage taproot deep penetration without vegetative rank growth.",
        targetMoistureRange: [50, 65],
        targetSoilTempRange: [20, 28],
        targetPhRange: [6.5, 7.5],
        targetEcRange: [1.5, 2.5],
        keyNutrientFocus: "Boron, Phosphorus & Zinc",
        typicalInterventionRisk: "High early nitrogen causing excessive leaf canopy at expense of floral squares."
      },
      {
        stageName: "Peak Bloom & Boll Filling",
        description: "Highest water uptake period of the season; deep soil moisture reserves dictate final boll weight and fiber length.",
        targetMoistureRange: [70, 85],
        targetSoilTempRange: [25, 33],
        targetPhRange: [6.5, 7.2],
        targetEcRange: [1.8, 2.8],
        keyNutrientFocus: "Potassium & Boron Assimilation",
        typicalInterventionRisk: "Water stress causing boll shed or premature cutout."
      }
    ]
  },
  {
    id: "tomato",
    cropName: "Tomato (Solanum lycopersicum)",
    scientificName: "Solanum lycopersicum",
    category: "Horticulture",
    researchNote: "Electrical Conductivity (EC) balance directly governs tomato brix, blossom end rot, and fruit firmness. Continuous precise root zone EC sensing prevents blossom end rot without excessive spray.",
    growthStages: [
      {
        stageName: "Vegetative & Early Flowering",
        description: "Rapid leaf area development; roots demand high calcium availability and moderate moisture tension.",
        targetMoistureRange: [65, 80],
        targetSoilTempRange: [18, 26],
        targetPhRange: [6.0, 6.8],
        targetEcRange: [2.0, 3.0],
        keyNutrientFocus: "Calcium & Nitrate Balance",
        typicalInterventionRisk: "Fluctuating moisture leading to early calcium transport failure."
      },
      {
        stageName: "Fruit Development & Ripening",
        description: "Fruit swelling requires stable moisture; mild controlled EC elevation enhances flavor compound density.",
        targetMoistureRange: [60, 75],
        targetSoilTempRange: [20, 28],
        targetPhRange: [6.2, 6.8],
        targetEcRange: [2.5, 4.0],
        keyNutrientFocus: "Potassium & Magnesium",
        typicalInterventionRisk: "Over-watering near harvest causing fruit cracking and diluted sugar content."
      }
    ]
  }
];

export const MEASUREMENT_CATEGORIES: MeasurementCategory[] = [
  {
    title: "Soil",
    categoryNumber: "01",
    description: "Continuously monitoring the physical and chemical state of the root zone where inputs interact with plant life.",
    signals: ["Soil Moisture (Volumetric Water Content)", "Soil Temperature Profile", "Soil pH Equilibrium", "Electrical Conductivity (EC / Salinity)", "Nutrient-Related Ionic Activity Proxies"],
    fieldContext: "Probes placed at multi-depth intervals (15cm, 30cm, 60cm) to track water percolation and nutrient leaching past the root zone."
  },
  {
    title: "Environment",
    categoryNumber: "02",
    description: "Capturing atmospheric drivers that dictate plant transpiration, evaporation, and micro-climatic stress.",
    signals: ["Ambient Air Temperature", "Relative Humidity & VPD", "Precipitation Volume & Rate", "Solar Radiation Intensity", "Barometric Pressure Trends"],
    fieldContext: "Local field weather stations compute Vapor Pressure Deficit (VPD) to anticipate crop water demand hours in advance."
  },
  {
    title: "Crop",
    categoryNumber: "03",
    description: "Observing actual plant physiological responses and developmental markers across key growth stages.",
    signals: ["Phenological Growth Stage", "Canopy Temperature Delta", "Visual Stress & Wilting Indicators", "Chlorophyll & Leaf Area Indices", "Validated Crop Canopy Signals"],
    fieldContext: "Correlating ground-level sensor data with field observations to determine whether crop stress stems from water, salt, or disease."
  },
  {
    title: "Outcome",
    categoryNumber: "04",
    description: "Auditing long-term field performance, soil organic carbon trajectory, harvest quality, and chemical reduction.",
    signals: ["Harvest Yield & Quality Metrics", "Chemical Input Volumetric Baseline", "Soil Organic Matter Trajectory", "Water Use Efficiency (WUE)", "Long-Term Soil Microbiome Resilience"],
    fieldContext: "Verifying whether field recommendations achieved yield goals while reducing synthetic chemical application."
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: "jp-1",
    category: "What we're researching",
    title: "Root-Zone Nitrogen Leaching Under Dynamic Pulse Irrigation",
    date: "August 2026",
    summary: "Investigating how micro-pulse irrigation events preserve nitrate ions in the upper root layer compared to traditional flood applications.",
    content: "When synthetic or organic fertilizers are applied before high-volume irrigation, up to 40% of active nitrate can leach below the effective root zone within 36 hours. Our lab tests evaluate pulsed moisture delivery guided by real-time EC feedback.",
    author: "Soil Science Team",
    tags: ["Nitrogen", "Soil Physics", "Irrigation"]
  },
  {
    id: "jp-2",
    category: "What we're testing",
    title: "Calibrating Low-Cost Capacitive Soil Probes Across Clay-Heavy Profiles",
    date: "July 2026",
    summary: "Field trials comparing lab-grade TDR sensors against modified dielectric probes in high-clay vertisols.",
    content: "Clay soils expand and contract, creating micro-air gaps around sensor housing that skew dielectric permittivity readings. We are testing flexible conductive collars that maintain thermal and electrical contact throughout wetting-drying cycles.",
    author: "IoT Hardware Group",
    tags: ["Sensors", "Hardware", "Vertisols"]
  },
  {
    id: "jp-3",
    category: "What we learned",
    title: "Why Universal Moisture Percentages Fail Farmers in Different Regions",
    date: "June 2026",
    summary: "A 25% Volumetric Water Content reading in sandy loam represents field capacity, while in heavy clay it means wilting point stress.",
    content: "We confirmed that raw percentage numbers are meaningless to a farmer without soil matric potential translation. Vashudha models now automatically convert raw probe data into water tension kilopascals (kPa) customized to soil type.",
    author: "Data Intelligence & Ag Science",
    tags: ["Matric Potential", "Soil Texture", "Data Modeling"]
  },
  {
    id: "jp-4",
    category: "What changed our thinking",
    title: "Moving From Static Thresholds to Growth-Stage Reference Windows",
    date: "May 2026",
    summary: "Earlier models used static 'min/max' soil numbers. Real field evidence forced us to adopt dynamic reference curves.",
    content: "A crop's stress tolerance is not constant. Wheat during tillering handles moderate soil drying that would destroy yield during flag leaf emergence. Re-architecting our models around physiological stages was a turning point.",
    author: "Crop Science & ML Lead",
    tags: ["Phenology", "Machine Learning", "Reference Models"]
  },
  {
    id: "jp-5",
    category: "What comes next",
    title: "Initiating 2026-2027 Split-Field Pilot Farm Collaborations",
    date: "August 2026",
    summary: "Deploying our v0.3 sensing nodes on 12 partner farms across 3 agricultural zones to audit chemical reduction potential.",
    content: "Our upcoming pilot cohort will run side-by-side split plots: standard regional farmer practice on side A, Vashudha-guided precision recommendations on side B. We will document inputs, yields, and soil metrics openly.",
    author: "Field Operations & Partnerships",
    tags: ["Pilot Farms", "Open Science", "Field Trials"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "tm-1",
    name: "Dr. Ananya Sharma",
    role: "Agricultural Science Lead",
    pillar: "Agriculture",
    buildingResponsibility: "Mapping crop stress physiology, soil nutrient kinetics, and defining growth-stage reference conditions.",
    bio: "Ph.D. in Agronomy & Soil Chemistry. 12+ years researching nutrient loss dynamics in tropical and semi-arid soil systems."
  },
  {
    id: "tm-2",
    name: "Rahul Verma",
    role: "IoT Systems & Sensing Engineer",
    pillar: "Technology",
    buildingResponsibility: "Designing ultra-low power soil telemetry, probe drift calibration, and weather-proof field nodes.",
    bio: "Embedded systems specialist with background in rugged environmental instrumentation and SDI-12 protocol design."
  },
  {
    id: "tm-3",
    name: "Priya Nair",
    role: "Data Intelligence & ML Researcher",
    pillar: "Research",
    buildingResponsibility: "Constructing time-series anomaly filters, matric potential translation models, and recommendation engines.",
    bio: "M.S. in Applied Statistics & Machine Learning. Focused on contextual environmental predictions with noisy real-world data."
  },
  {
    id: "tm-4",
    name: "Siddharth K.",
    role: "Field Validation & Pilot Lead",
    pillar: "Experimentation",
    buildingResponsibility: "Managing split-plot field trials, farmer ground-truth logging, and input reduction verification.",
    bio: "Agricultural extension specialist who has worked directly alongside 400+ smallholder and commercial cereal growers."
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    number: "01",
    title: "Research & Modeling",
    status: "Current Focus",
    description: "Literature synthesis, laboratory soil column calibration, and crop growth-stage reference window mapping.",
    deliverables: ["Soil matric tension conversion algorithms", "Crop reference datasets for major cereals", "Sensor drift laboratory bench baseline"]
  },
  {
    number: "02",
    title: "Sensor Prototype v0.3",
    status: "Current Focus",
    description: "Building durable multi-depth probes with integrated temperature, moisture, and EC sensing nodes.",
    deliverables: ["Weatherproof solar-capacitor enclosures", "SDI-12 field bus telemetry", "Low-power radio field mesh"]
  },
  {
    number: "03",
    title: "Data Collection Framework",
    status: "In Development",
    description: "Automated ingestion pipeline designed to clean, normalize, and ground-truth continuous field observations.",
    deliverables: ["Outlier detection algorithms", "VPD & ET0 atmospheric calculation engine", "Cloud time-series database"]
  },
  {
    number: "04",
    title: "Controlled Field Testing",
    status: "In Development",
    description: "Greenhouse and research plot trials testing recommendations against traditional blanket treatments.",
    deliverables: ["Split-plot control datasets", "Synthetic nitrogen reduction verification", "Crop vigor imaging alignment"]
  },
  {
    number: "05",
    title: "Pilot Farm Deployment",
    status: "Planned",
    description: "Deploying sensing suites on 12-20 working farms across diverse soil textures and crop cycles.",
    deliverables: ["Farmer-facing decision dashboard", "Weekly field condition summaries", "Direct ground-truth feedback loop"]
  },
  {
    number: "06",
    title: "Field Validation Audit",
    status: "Planned",
    description: "Multivariate statistical review comparing yield parity, soil health metrics, and total chemical input reduction.",
    deliverables: ["Peer-reviewed trial summaries", "Open dataset release", "Input efficiency benchmarks"]
  },
  {
    number: "07",
    title: "Precision Agriculture Platform",
    status: "Future Phase",
    description: "Scaling field intelligence tools to commercial growers, research institutions, and agricultural cooperatives.",
    deliverables: ["Integrated IoT-to-Decision suite", "Agronomist collaboration tools", "Custom crop reference builder"]
  }
];
