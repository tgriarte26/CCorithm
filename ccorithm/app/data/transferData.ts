import { TransferGuide } from "@/app/types/guide";

// ─── Key format: "cc|transfer|major" (all lowercase) ───

const transferDatabase: Record<string, TransferGuide> = {
  // ══════════════════════════════════════════════
  // El Camino → UCLA, Computer Science
  // ══════════════════════════════════════════════
  "el camino college|university of california, los angeles (ucla)|computer science":
    {
      major: "Computer Science",
      communityCollege: "El Camino College",
      transferCollege: "University of California, Los Angeles (UCLA)",
      minimumGPA: 3.4,
      averageAcceptedGPA: 3.8,
      totalUnitsRequired: 90,
      courseMappings: [
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "COM SCI 31 - Introduction to Computer Science I",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take CSCI 1 + CSCI 2",
              courses: [
                {
                  name: "CSCI 1 - Problem Solving and Program Design Using C++",
                  units: 4,
                },
                { name: "CSCI 2 - Introduction to Data Structures", units: 5 },
              ],
            },
            {
              label: "Take CS 30",
              courses: [
                { name: "CS 30 - Advanced Programming in C++", units: 4 },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "COM SCI 32 - Introduction to Computer Science II",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take CSCI 2",
              courses: [
                { name: "CSCI 2 - Introduction to Data Structures", units: 5 },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "CSCI 16 - Assembly Language Programming for the x86 (IBM PC) Processors",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take CSCI 16",
              courses: [
                {
                  name: "COM SCI 33 - Introduction to Computer Organization",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "COM SCI 35L - Software Construction Laboratory",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take course at university",
              courses: [],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              label: "Take course at university",
              courses: [
                {
                  name: "COM SCI M51A - Logic Design of Digital Systems",
                  units: 5,
                },
              ],
            },
            {
              label: "Take course at university",
              courses: [
                {
                  name: "EC ENGR M16 - Logic Design of Digital Systems",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take CSCI 1 + CSCI 2",
              courses: [],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 31A - Differential and Integral Calculus",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 190",
              courses: [
                {
                  name: "MATH 190 - Single Variable Calculus and Analytic Geometry I",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 31B - Integration and Infinite Series",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 191",
              courses: [
                {
                  name: "MATH 191 - Single Variable Calculus and Analytic Geometry II",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 32A - Calculus of Several Variables",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 220",
              courses: [
                {
                  name: "MATH 220 - Multi-Variable Calculus",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 32B - Calculus of Several Variables",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 220",
              courses: [
                {
                  name: "MATH 220 - Multi-Variable Calculus",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 33A - Linear Algebra and Applications",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 270",
              courses: [
                {
                  name: "MATH 270 - Differential Equations with Linear Algebra",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 33B - Differential Equations",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 270",
              courses: [
                {
                  name: "MATH 270 - Differential Equations with Linear Algebra",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "MATH 61 - Introduction to Discrete Structures",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take MATH 210",
              courses: [
                {
                  name: "MATH 210 - Introduction to Discrete Structures",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "PHYS 1A - Mechanics of Solids",
                  units: 4,
                },
                {
                  name: "PHYS 1C - Electricity and Magnetism",
                  units: 4,
                },
                {
                  name: "PHYS 1D - Optics and Modern Physics",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label:
                "Take PHYSICS 1A + PHYSICS 1B + PHYSICS 1C + PHYSICS 4AL + PHYSICS 4BL",
              courses: [
                {
                  name: "PHYSICS 1A - Physics for Scientists and Engineers: Mechanics",
                  units: 5,
                },
                {
                  name: "PHYSICS 1B - Physics for Scientists and Engineers: Oscillations, Waves, Electric and Magnetic Fields",
                  units: 5,
                },
                {
                  name: "PHYSICS 1C - Physics for Scientists and Engineers: Electrodynamics, Optics, and Special Relativity",
                  units: 5,
                },
                {
                  name: "PHYSICS 4AL - Physics Laboratory for Scientists and Engineers: Mechanics",
                  units: 2,
                },
                {
                  name: "PHYSICS 4BL - Physics Laboratory for Scientists and Engineers: Electricity and Magnetism",
                  units: 2,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "ENGCOMP 3 - English Composition, Rhetoric, and Language",
                  units: 4,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take ENGL C1000",
              courses: [
                {
                  name: "ENGL C1000 - Academic Reading and Writing",
                  units: 5,
                },
              ],
            },
            {
              label: "Take ENGL C1000H",
              courses: [
                {
                  name: "ENGL C1000H - Academic Reading and Writing Honors",
                  units: 5,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "English Composition Courses",
                  units: 0,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take ENGL 1B",
              courses: [
                {
                  name: "ENGL 1B - Literature and Composition",
                  units: 3,
                },
              ],
            },
            {
              label: "Take ENGL 1BH",
              courses: [
                {
                  name: "ENGL 1BH - Honors Literature and Composition",
                  units: 3,
                },
              ],
            },
            {
              label: "Take ENGL C1001",
              courses: [
                {
                  name: "ENGL C1001 - Critical Thinking and Writing",
                  units: 4,
                },
              ],
            },
            {
              label: "Take ENGL C1001H",
              courses: [
                {
                  name: "ENGL C1001H - Critical Thinking and Writing Honors",
                  units: 4,
                },
              ],
            },
            {
              label: "Take PHIL 105",
              courses: [
                {
                  name: "PHIL 105 - Critical Thinking and Writing",
                  units: 3,
                },
              ],
            },
            {
              label: "Take PSYC 103",
              courses: [
                {
                  name: "PSYC 103 - Critical Thinking and Psychology",
                  units: 3,
                },
              ],
            },
          ],
        },
        {
          universityEquivalent: [
            {
              courses: [
                {
                  name: "Computer programming courses: C++ preferred",
                  units: 0,
                },
              ],
            },
          ],
          status: "required",
          options: [
            {
              label: "Take CSCI 1",
              courses: [
                {
                  name: "CSCI 1 - Problem Solving and Program Design Using C++",
                  units: 4,
                },
              ],
            },
            {
              label: "Take CSCI 30",
              courses: [
                {
                  name: "CSCI 30 - Advanced Programming in C++",
                  units: 4,
                },
              ],
            },
            {
              label: "Take CSCI 2 + CSCI 3",
              courses: [
                {
                  name: "CSCI 2 - Introduction to Data Structures",
                  units: 5,
                },
                {
                  name: "CSCI 3 - Object-Oriented Programming in Java",
                  units: 4,
                },
              ],
            },
          ],
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
  major: string,
): TransferGuide | null {
  const key = `${cc.toLowerCase()}|${transfer.toLowerCase()}|${major.toLowerCase()}`;
  return transferDatabase[key] ?? null;
}

// ─── Fallback generic guide ───
export function getGenericGuide(
  cc: string,
  transfer: string,
  major: string,
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
        task: isUC
          ? "Complete IGETC certification"
          : "Complete CSU GE-Breadth or IGETC",
        deadline: "Spring semester before transfer",
        category: "academic",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        task: isUC
          ? "Submit UC Application"
          : "Submit Cal State Apply application",
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
