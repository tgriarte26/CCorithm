// ─── A single CC course ───
export interface CCCourse {
    name: string;
    units: number;
}

// ─── Course Transfer Mapping ───
// Each mapping represents ONE university course requirement.
// "options" lists the different ways a student can satisfy it.
export interface CourseMapping {
    universityEquivalent: string;
    universityUnits: number;
    status: "required" | "recommended" | "elective";
    notes?: string;
    options: {
        label: string;         // e.g. "Take CS 1 + CS 2" or "Take CS 30"
        courses: CCCourse[];   // the CC courses needed for this option
    }[];
}

// ─── Transfer Checklist Item ───
export interface ChecklistItem {
    id: string;
    task: string;
    deadline: string;
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