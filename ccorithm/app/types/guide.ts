// ─── Course Transfer Mapping ───
export interface CourseMapping {
  ccCourse: string;       // e.g. "CS 1 - Intro to Computer Science"
  ccUnits: number;
  universityEquivalent: string; // e.g. "COM SCI 31"
  universityUnits: number;
  status: "required" | "recommended" | "elective";
  notes?: string;
}

// ─── Transfer Checklist Item ───
export interface ChecklistItem {
  id: string;
  task: string;
  deadline: string;       // e.g. "November 30, 2025"
  category: "application" | "academic" | "financial" | "housing";
  priority: "high" | "medium" | "low";
  completed: boolean;
}

// ─── Full Guide Response ───
export interface TransferGuide {
  major: string;
  communityCollege: string;
  transferCollege: string;
  minimumGPA: number;
  averageAcceptedGPA: number;
  totalUnitsRequired: number;
  courseMappings: CourseMapping[];
  checklist: ChecklistItem[];
  tips: string[];
}