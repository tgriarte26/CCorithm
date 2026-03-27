// ─── A single CC course ───
export interface CCCourse {
    name: string;
    units: number;
}

export interface UniversityCourse {
    name: string;
    units: number;
}

// ─── Course Transfer Mapping ───
export interface CourseMapping {
    universityEquivalent: {
        label?: string;
        courses: UniversityCourse[];   
    }[];
    status: "required" | "recommended" | "elective";
    notes?: string;
    options: {
        label: string;     
        courses: CCCourse[];
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