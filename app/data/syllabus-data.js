export const departments = [
  {
    id: "bca",
    name: "BCA",
    tagline: "Computing foundations with applied software practice.",
    semesters: [
      {
        id: "1",
        label: "Semester I",
        focus: "Programming basics, digital literacy, and math.",
        subjects: [
          "Programming Fundamentals",
          "Computer Organization",
          "Mathematics I",
          "Communication Skills",
          "Office Productivity Lab",
        ],
        outcomes: [
          "Write structured programs with core control flow.",
          "Understand binary representation and computer hardware basics.",
          "Apply foundational calculus and discrete math ideas.",
        ],
        assessments: ["Lab Practicals", "Unit Tests", "Midterm Exam", "Final Exam"],
      },
      {
        id: "2",
        label: "Semester II",
        focus: "Data handling, web basics, and problem solving.",
        subjects: [
          "Data Structures",
          "Operating Systems Basics",
          "Web Technology I",
          "Mathematics II",
          "Programming Lab",
        ],
        outcomes: [
          "Implement linear data structures and algorithms.",
          "Explain process, memory, and file management concepts.",
          "Build static web pages with semantic HTML and CSS.",
        ],
        assessments: ["Lab Practicals", "Assignments", "Midterm Exam", "Final Exam"],
      },
      {
        id: "3",
        label: "Semester III",
        focus: "Database design and network fundamentals.",
        subjects: [
          "Database Management Systems",
          "Computer Networks I",
          "Programming in Java",
          "Web Technology II",
          "Mini Project",
        ],
        subjectDetails: {
          "Programming in Java": {
            code: "BCA-303",
            title: "Programming in Java",
            units: [
              {
                title: "Unit 1",
                topics: [
                  "Introducing Data Types and Operators, Java’s Primitive Types, Literals, Variables, operators, Type conversion in Assignments, Cast, Operator Precedence, Expressions.",
                  "Program Control Statements, Input characters from the Keyboard, if statement, Nested ifs, if-else-if Ladder, Switch Statement, Nestedswitch statements, for Loop, Enhanced for Loop, While Loop, do-while Loop, Use break, Use continue, Nested Loops.",
                  "Introduction to Classes, Objects and Methods, Class Fundamentals, Reference Variables and Assignment, Methods, Using Parameters, Constructors, Parameterized Constructors, The new operator.",
                  "Arrays, Multidimensional Arrays, Alternative Array Declaration Syntax, Assigning Array References, Usingthe Length Member, The Bitwise operators.",
                ],
              },
              {
                title: "Unit 2",
                topics: [
                  "String Fundamentals, The String Constructors, Three String-Related Language Features, The Length() Method, Obtaining the characters within a string, String comparison, using indexOf() and last IndexOf(),Changing the case of characters within a string, StringBuffer and StringBuilder.",
                  "Method Overloading, Overloading Constructors, Recursion",
                  "Inheritance Basics, Member Access and Inheritance, Constructors and Inheritance, Using super to CallSuperclass constructors, Using super to Access Superclass Members, Creating a Multilevel Hierarchy",
                  "Interface Fundamentals, Creating an Interface, Implementing an Interface, Using Interface References,Implementing Multiple Interfaces, extending Interfaces",
                ],
              },
              {
                title: "Unit 3",
                topics: [
                  "Package Fundamentals, Packages and Member Access, Importing Packages, Static Import",
                  "The Exception Hierarchy, Exception Handling Fundamentals, using Multiple catch clauses, Catching subclass Exceptions, nested try blocks, Throwing an Exception",
                  "Multithreading fundamentals, The Thread Class and Runnable Interface, Creating Thread, Creating Multiple Threads, Determining When a Thread Ends, Thread Priorities, Synchronization, Thread Communication using notify(), wait() and notifyAll(), suspending, Resuming and stopping Threads.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Design normalized relational schemas.",
          "Explain networking layers and protocols.",
          "Build modular software using OOP concepts.",
        ],
        assessments: ["Project Review", "Lab Practicals", "Midterm Exam", "Final Exam"],
      },
      {
        id: "4",
        label: "Semester IV",
        focus: "Software engineering and full-stack foundations.",
        subjects: [
          "Software Engineering",
          "Computer Networks II",
          "Data Analytics Basics",
          "Full-Stack Web Lab",
          "Professional Ethics",
        ],
        outcomes: [
          "Apply SDLC models to real software projects.",
          "Build CRUD apps with server-side logic.",
          "Interpret data with visual summaries.",
        ],
        assessments: ["Project Demo", "Case Study", "Midterm Exam", "Final Exam"],
      },
      {
        id: "5",
        label: "Semester V",
        focus: "Specializations and advanced development.",
        subjects: [
          "Mobile App Development",
          "Cloud Fundamentals",
          "Elective I",
          "Elective II",
          "Industry Project",
        ],
        outcomes: [
          "Deploy applications to cloud platforms.",
          "Build user-centric mobile experiences.",
          "Deliver a scoped product for a real problem.",
        ],
        assessments: ["Project Review", "Viva", "Final Exam"],
      },
      {
        id: "6",
        label: "Semester VI",
        focus: "Capstone and career readiness.",
        subjects: [
          "Capstone Project",
          "Cybersecurity Basics",
          "AI Fundamentals",
          "Professional Skills",
        ],
        outcomes: [
          "Deliver an end-to-end software solution.",
          "Apply secure development practices.",
          "Present technical work confidently.",
        ],
        assessments: ["Capstone Demo", "Thesis Report", "Viva"],
      },
    ],
  },
  {
    id: "ba",
    name: "BA",
    tagline: "Interdisciplinary humanities with analytical depth.",
    semesters: [
      {
        id: "1",
        label: "Semester I",
        focus: "Core humanities and academic writing.",
        subjects: [
          "Introduction to Sociology",
          "English Composition",
          "Political Thought I",
          "History of India I",
        ],
        outcomes: [
          "Develop academic reading and writing skills.",
          "Analyze foundational social theories.",
        ],
        assessments: ["Essays", "Presentations", "Final Exam"],
      },
      {
        id: "2",
        label: "Semester II",
        focus: "Cultural studies and research methods.",
        subjects: [
          "Research Methods",
          "Political Thought II",
          "History of India II",
          "Elective: Psychology",
        ],
        outcomes: [
          "Formulate research questions and write proposals.",
          "Connect historical events to modern contexts.",
        ],
        assessments: ["Research Proposal", "Midterm Exam", "Final Exam"],
      },
      {
        id: "3",
        label: "Semester III",
        focus: "Electives and applied field work.",
        subjects: [
          "Field Work Practicum",
          "Comparative Literature",
          "Public Policy Basics",
          "Elective: Economics",
        ],
        outcomes: [
          "Interpret literature using critical frameworks.",
          "Apply qualitative research methods in the field.",
        ],
        assessments: ["Field Report", "Seminar", "Final Exam"],
      },
    ],
  },
  {
    id: "bsc",
    name: "BSc",
    tagline: "Science fundamentals with lab-driven learning.",
    semesters: [
      {
        id: "1",
        label: "Semester I",
        focus: "Core science foundations.",
        subjects: [
          "Physics I",
          "Chemistry I",
          "Mathematics I",
          "Scientific Computing Lab",
        ],
        outcomes: [
          "Apply scientific measurement and lab safety.",
          "Solve calculus-based science problems.",
        ],
        assessments: ["Lab Practicals", "Midterm Exam", "Final Exam"],
      },
      {
        id: "2",
        label: "Semester II",
        focus: "Advanced lab work and analysis.",
        subjects: [
          "Physics II",
          "Chemistry II",
          "Mathematics II",
          "Data Analysis Lab",
        ],
        outcomes: [
          "Model scientific data with statistical tools.",
          "Conduct experiments with controlled variables.",
        ],
        assessments: ["Lab Practicals", "Project", "Final Exam"],
      },
      {
        id: "3",
        label: "Semester III",
        focus: "Discipline electives and research.",
        subjects: [
          "Biology I",
          "Environmental Science",
          "Elective: Materials Science",
          "Research Methodology",
        ],
        outcomes: [
          "Design experiments and document findings.",
          "Explain environmental systems and impact.",
        ],
        assessments: ["Research Brief", "Final Exam"],
      },
    ],
  },
  {
    id: "bed",
    name: "BEd",
    tagline: "Teaching foundations with classroom practice.",
    semesters: [
      {
        id: "1",
        label: "Semester I",
        focus: "Foundations of education.",
        subjects: [
          "Educational Psychology",
          "Philosophical Foundations",
          "Learner & Learning",
          "Communication Skills",
        ],
        outcomes: [
          "Explain learner development stages.",
          "Apply pedagogical communication techniques.",
        ],
        assessments: ["Lesson Plans", "Reflective Journal", "Final Exam"],
      },
      {
        id: "2",
        label: "Semester II",
        focus: "Teaching practice and assessment.",
        subjects: [
          "Curriculum Design",
          "Assessment Strategies",
          "Inclusive Education",
          "Micro Teaching Lab",
        ],
        outcomes: [
          "Design inclusive lesson plans.",
          "Implement formative and summative assessments.",
        ],
        assessments: ["Teaching Practicum", "Portfolio", "Final Exam"],
      },
    ],
  },
];
