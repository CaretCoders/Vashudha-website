export interface CropGrowthStage {
  stageName: string;
  description: string;
  targetMoistureRange: [number, number]; // e.g. [65, 80] %
  targetSoilTempRange: [number, number]; // e.g. [18, 24] C
  targetPhRange: [number, number]; // e.g. [6.0, 6.8]
  targetEcRange: [number, number]; // mS/cm
  keyNutrientFocus: string;
  typicalInterventionRisk: string;
}

export interface CropReferenceData {
  id: string;
  cropName: string;
  scientificName: string;
  category: string;
  growthStages: CropGrowthStage[];
  researchNote: string;
}

export interface ResearchDomain {
  id: string;
  number: string;
  title: string;
  description: string;
  keyTopics: string[];
  currentFocus: string;
}

export interface JournalPost {
  id: string;
  category: "What we're researching" | "What we're testing" | "What we learned" | "What changed our thinking" | "What comes next";
  title: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  pillar: "Agriculture" | "Technology" | "Research" | "Experimentation";
  buildingResponsibility: string;
  bio: string;
}

export interface MeasurementCategory {
  title: string;
  categoryNumber: string;
  description: string;
  signals: string[];
  fieldContext: string;
}

export interface RoadmapStage {
  number: string;
  title: string;
  status: "Current Focus" | "In Development" | "Planned" | "Future Phase";
  description: string;
  deliverables: string[];
}

export type ModalType = "research_newsletter" | "partner_form" | "journal_post" | "team_member" | null;
