import { TransferGuide } from "@/app/types/guide";

// ─── Key format: "cc|transfer|major" (all lowercase) ───
// Add more entries as you expand. Any missing combo falls back to a generic response.

const transferDatabase: Record<string, TransferGuide> = {

  // ── El Camino → UCLA, Computer Science ──
  "el camino college|university of california, los angeles (ucla)|computer science": {
    major: "Computer Science",
    communityCollege: "El Camino College",
    transferCollege: "University of California, Los Angeles (UCLA)",
    minimumGPA: 3.4,
    averageAcceptedGPA: 3.8,
    totalUnitsRequired: 90,
    courseMappings: [
      {
        ccCourse: "CS 1 - Introduction to Computer Science I",
        ccUnits: 4,
        universityEquivalent: "COM SCI 31 - Introduction to Computer Science I",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "CS 2 - Introduction to Computer Science II",
        ccUnits: 4,
        universityEquivalent: "COM SCI 32 - Introduction to Computer Science II",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "CS 3 - Data Structures",
        ccUnits: 3,
        universityEquivalent: "COM SCI 33 - Introduction to Computer Organization",
        universityUnits: 5,
        status: "required",
        notes: "Covers partial content — may need supplemental coursework",
      },
      {
        ccCourse: "MATH 210 - Calculus I",
        ccUnits: 5,
        universityEquivalent: "MATH 31A - Differential and Integral Calculus",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "MATH 220 - Calculus II",
        ccUnits: 5,
        universityEquivalent: "MATH 31B - Integration and Infinite Series",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "MATH 230 - Linear Algebra",
        ccUnits: 3,
        universityEquivalent: "MATH 33A - Linear Algebra and Applications",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "PHYS 1A - Mechanics",
        ccUnits: 4,
        universityEquivalent: "PHYSICS 1A - Mechanics",
        universityUnits: 5,
        status: "recommended",
      },
      {
        ccCourse: "ENGL 1A - Reading and Composition",
        ccUnits: 3,
        universityEquivalent: "ENGCOMP 3 - English Composition",
        universityUnits: 5,
        status: "required",
        notes: "IGETC requirement",
      },
    ],
    checklist: [
      {
        id: "1",
        task: "Complete IGETC certification",
        deadline: "Spring semester before transfer",
        category: "academic",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        task: "Submit UC Application via UC TAP",
        deadline: "November 1–30",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "3",
        task: "Request official transcripts from El Camino",
        deadline: "January 31",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "4",
        task: "Submit FAFSA / CA Dream Act application",
        deadline: "March 2",
        category: "financial",
        priority: "high",
        completed: false,
      },
      {
        id: "5",
        task: "Write UC Personal Insight Questions (4 essays)",
        deadline: "November 30",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "6",
        task: "Meet with El Camino transfer counselor",
        deadline: "Ongoing — at least once per semester",
        category: "academic",
        priority: "medium",
        completed: false,
      },
      {
        id: "7",
        task: "Apply for UCLA housing",
        deadline: "May (after acceptance)",
        category: "housing",
        priority: "medium",
        completed: false,
      },
      {
        id: "8",
        task: "Complete TAG (Transfer Admission Guarantee) if eligible",
        deadline: "September 1–30",
        category: "application",
        priority: "medium",
        completed: false,
        // Note: UCLA does NOT participate in TAG, but other UCs do
      },
    ],
    tips: [
      "UCLA CS is extremely competitive — aim for a 3.8+ GPA to be competitive.",
      "Complete all major-prep courses before transferring; incomplete prereqs are a common rejection reason.",
      "Use ASSIST.org to verify the latest course articulation agreements.",
      "Join El Camino's Transfer Center and attend UCLA-specific workshops.",
      "Consider applying to multiple UCs — TAG guarantees admission at participating campuses.",
    ],
  },

  // ── Santa Monica College → UCLA, Business ──
  "santa monica college|university of california, los angeles (ucla)|business": {
    major: "Business Economics",
    communityCollege: "Santa Monica College",
    transferCollege: "University of California, Los Angeles (UCLA)",
    minimumGPA: 3.2,
    averageAcceptedGPA: 3.7,
    totalUnitsRequired: 90,
    courseMappings: [
      {
        ccCourse: "ECON 1 - Principles of Macroeconomics",
        ccUnits: 3,
        universityEquivalent: "ECON 1 - Principles of Economics",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "ECON 2 - Principles of Microeconomics",
        ccUnits: 3,
        universityEquivalent: "ECON 2 - Principles of Economics",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "MATH 7 - Calculus I",
        ccUnits: 5,
        universityEquivalent: "MATH 31A - Differential and Integral Calculus",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "MATH 8 - Calculus II",
        ccUnits: 5,
        universityEquivalent: "MATH 31B - Integration and Infinite Series",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "ACCTG 1 - Financial Accounting",
        ccUnits: 5,
        universityEquivalent: "MGMT 1A - Principles of Accounting",
        universityUnits: 4,
        status: "recommended",
      },
      {
        ccCourse: "ENGL 1 - Reading and Composition I",
        ccUnits: 3,
        universityEquivalent: "ENGCOMP 3 - English Composition",
        universityUnits: 5,
        status: "required",
        notes: "IGETC requirement",
      },
    ],
    checklist: [
      {
        id: "1",
        task: "Complete IGETC certification",
        deadline: "Spring semester before transfer",
        category: "academic",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        task: "Submit UC Application",
        deadline: "November 1–30",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "3",
        task: "Submit FAFSA / CA Dream Act",
        deadline: "March 2",
        category: "financial",
        priority: "high",
        completed: false,
      },
      {
        id: "4",
        task: "Write Personal Insight Questions",
        deadline: "November 30",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "5",
        task: "Meet with SMC transfer counselor",
        deadline: "Ongoing",
        category: "academic",
        priority: "medium",
        completed: false,
      },
    ],
    tips: [
      "UCLA does not have a traditional 'Business' major — the closest is Business Economics in the College of Letters & Science.",
      "SMC has one of the highest UCLA transfer rates in California — leverage their transfer resources.",
      "Maintain strong grades in Econ and Math courses; these carry the most weight.",
    ],
  },

  // ── El Camino → CSULB, Engineering ──
  "el camino college|california state university, long beach (csulb)|engineering": {
    major: "Engineering",
    communityCollege: "El Camino College",
    transferCollege: "California State University, Long Beach (CSULB)",
    minimumGPA: 2.5,
    averageAcceptedGPA: 3.2,
    totalUnitsRequired: 60,
    courseMappings: [
      {
        ccCourse: "MATH 210 - Calculus I",
        ccUnits: 5,
        universityEquivalent: "MATH 122 - Calculus I",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "MATH 220 - Calculus II",
        ccUnits: 5,
        universityEquivalent: "MATH 123 - Calculus II",
        universityUnits: 4,
        status: "required",
      },
      {
        ccCourse: "PHYS 1A - Mechanics",
        ccUnits: 4,
        universityEquivalent: "PHYS 151 - Mechanics and Heat",
        universityUnits: 3,
        status: "required",
      },
      {
        ccCourse: "PHYS 1B - Electricity and Magnetism",
        ccUnits: 4,
        universityEquivalent: "PHYS 152 - Electricity and Magnetism",
        universityUnits: 3,
        status: "required",
      },
      {
        ccCourse: "CHEM 1A - General Chemistry",
        ccUnits: 5,
        universityEquivalent: "CHEM 111A - General Chemistry",
        universityUnits: 5,
        status: "required",
      },
      {
        ccCourse: "ENGL 1A - Reading and Composition",
        ccUnits: 3,
        universityEquivalent: "ENGL 100 - Freshman Composition",
        universityUnits: 3,
        status: "required",
        notes: "GE requirement",
      },
    ],
    checklist: [
      {
        id: "1",
        task: "Complete CSU GE-Breadth requirements",
        deadline: "Spring semester before transfer",
        category: "academic",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        task: "Submit Cal State Apply application",
        deadline: "October 1 – December 15",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "3",
        task: "Submit FAFSA",
        deadline: "March 2",
        category: "financial",
        priority: "high",
        completed: false,
      },
      {
        id: "4",
        task: "Request official transcripts",
        deadline: "After acceptance, before enrollment",
        category: "application",
        priority: "medium",
        completed: false,
      },
    ],
    tips: [
      "CSULB Engineering is impacted — complete ALL major-prep courses before applying.",
      "A 3.0+ GPA makes you competitive; 2.5 is the bare minimum.",
      "Check ASSIST.org for the most current articulation agreements.",
    ],
  },
};

// ─── Lookup helper ───
export function getTransferGuide(
  cc: string,
  transfer: string,
  major: string
): TransferGuide | null {
  const key = `${cc.toLowerCase()}|${transfer.toLowerCase()}|${major.toLowerCase()}`;
  return transferDatabase[key] ?? null;
}

// ─── Fallback generic guide ───
export function getGenericGuide(
  cc: string,
  transfer: string,
  major: string
): TransferGuide {
  const isUC = transfer.toLowerCase().includes("university of california");

  return {
    major,
    communityCollege: cc,
    transferCollege: transfer,
    minimumGPA: isUC ? 3.0 : 2.0,
    averageAcceptedGPA: isUC ? 3.5 : 2.8,
    totalUnitsRequired: isUC ? 90 : 60,
    courseMappings: [],
    checklist: [
      {
        id: "1",
        task: isUC ? "Complete IGETC certification" : "Complete CSU GE-Breadth or IGETC",
        deadline: "Spring semester before transfer",
        category: "academic",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        task: isUC ? "Submit UC Application" : "Submit Cal State Apply application",
        deadline: isUC ? "November 1–30" : "October 1 – December 15",
        category: "application",
        priority: "high",
        completed: false,
      },
      {
        id: "3",
        task: "Submit FAFSA / CA Dream Act",
        deadline: "March 2",
        category: "financial",
        priority: "high",
        completed: false,
      },
      {
        id: "4",
        task: `Meet with ${cc} transfer counselor`,
        deadline: "Ongoing",
        category: "academic",
        priority: "medium",
        completed: false,
      },
    ],
    tips: [
      "Visit ASSIST.org for the official course articulation between your colleges.",
      `We don't have specific course mappings for ${major} from ${cc} to ${transfer} yet. Check with your counselor.`,
      "This is a generic guide — specific course requirements may vary.",
    ],
  };
}