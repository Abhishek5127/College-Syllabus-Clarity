export const department = {
    id: "bsc",
    name: "BSc",
    tagline: "Science fundamentals with lab-driven learning.",
    semesters: [
      {
        id: "1",
        label: "Semester I",
        focus:
          "Microbiology, mycology, phytopathology, algae, lichens and bryophytes foundations.",
        subjects: [
          "DCC-2: Microbiology, Mycology and Phytopathology, Algae, Lichens and Bryophytes",
          "DCC-2P: Practicals based on DCC-2",
        ],
        subjectDetails: {
          "DCC-2: Microbiology, Mycology and Phytopathology, Algae, Lichens and Bryophytes":
            {
              code: "DCC-2",
              title:
                "Microbiology, Mycology and Phytopathology, Algae, Lichens and Bryophytes",
              overview: {
                courseCredit: "4",
                hoursPerWeek: "4",
                totalTeachingHours: "56",
                teachingPedagogy:
                  "Classroom lecture, tutorials, group discussion, seminar, field work.",
                courseOutcomes: [
                  "CO1: Summarize the structure, pigmentation, food reserves and methods of reproduction of fungi.",
                  "CO2: Explain the economic importance of fungi.",
                  "CO3: Differentiate plant diseases with reference to causative agents, symptoms, etiology and control measures.",
                  "CO4: Enumerate the structure, pigmentation, food reserves and methods of reproduction of algae.",
                  "CO5: Explain the economic importance of algae, fungi and lichen.",
                ],
              },
              textBooks: [
                "Sharma, O.P. (1992). Text Book of Thallophytes. McGraw Hill Pub. Co., New Delhi.",
                "Sharma, P.D. (1991). The Fungi. Rastogi & Co., Meerut.",
                "Dube, H.C. (1990). An Introduction of Fungi. Scientific Pub. House, Jodhpur.",
                "Clifton, A. (1985). Introduction of the Bacteria. McGraw Hill & Co., New York.",
                "Kumar, H.D. (2017). Introductory Phycology. East West Pub., New Delhi.",
                "Vashishtha, B.R. et al. (2010). Bryophyta. S. Chand & Comp., New Delhi.",
                "Vashishtha, B.R. et al. (2010). Algae. S. Chand & Comp., New Delhi.",
                "Lee, R. (2008). Phycology. Cambridge Univ. Press, 4th Edition.",
                "Puri, P. (1980). Bryophyta. Atma Ram & Sons, Delhi.",
              ],
              units: [
                {
                  title: "Unit I: Microbiology and Mycology",
                  topics: [
                    "Microbiology (Virus): discovery, general structure, classification (LHT), replication of TMV, lytic and lysogenic cycles, economic importance of viruses, bacteriophages.",
                    "Bacteria: discovery, general characters, cell structure and type, archaebacteria, eubacteria, Gram's staining, nutritional types, reproduction in bacteria (vegetative, asexual and recombination types: conjugation, transformation and transduction).",
                    "Mycoplasma: general account. Cyanobacteria: general characters and economic importance. Life history of Oscillatoria and Nostoc.",
                    "Mycology: general characters and classification of fungi (Alexopoulos & Mims, 1979). Economic importance of fungi. Important features and life history of Mastigomycotina (Phytophthora), Zygomycotina (Mucor), Ascomycotina (Peziza), Basidiomycotina (Agaricus, Puccinia, Ustilago), Deuteromycotina (Cercospora).",
                    "Phytopathology: occurrence, disease symptoms, etiology, treatment and control of plant diseases.",
                    "Viruses: Tobacco mosaic virus; Yellow vein mosaic of Bhindi.",
                    "Bacteria: Citrus canker.",
                    "Phytoplasma: Little leaf of Brinjal.",
                    "Fungi: Black rust of wheat; Smut of wheat; Tikka of groundnut.",
                  ],
                },
                {
                  title: "Unit II: Lichens and Algae",
                  topics: [
                    "General account of lichens; growth forms (crustose, foliose, fruticose), thallus and reproductive structures (soredia, apothecium).",
                    "Arbuscular mycorrhizae and their significance.",
                    "Algae: general characters and thallus organisation, pigments and reserve food material, classification (Fritsch's classification), economic importance.",
                    "Important features and life history: Chlorophyceae (Volvox, Oedogonium, Chara), Xanthophyceae (Vaucheria), Phaeophyceae (Ectocarpus, Sargassum), Rhodophyceae (Polysiphonia).",
                  ],
                },
                {
                  title: "Unit III: Bryophyta",
                  topics: [
                    "General characters and classification of Bryophyta, economic importance of Bryophyta.",
                    "Evolutionary trends in thallus and sporogonium.",
                    "Structure, reproduction and classification: Hepaticopsida (Riccia, Marchantia), Anthocerotopsida (Anthoceros), Bryopsida (Funaria).",
                  ],
                },
              ],
            },
          "DCC-2P: Practicals based on DCC-2": {
            code: "DCC-2P",
            title: "Practicals based on DCC-2",
            overview: {
              courseCredit: "2",
              hoursPerWeek: "4",
              totalTeachingHours: "56",
            },
            units: [
              {
                title: "Practical Exercises",
                topics: [
                  "Study of genera included under Microbiology, Fungi and Pathology.",
                  "Observation of disease symptoms in hosts infected by fungi, viruses, bacteria and phytoplasma; section cutting of diseased material and identification of pathogens as per theory syllabus.",
                  "Study of morphology, reproductive structures and anatomy of the examples cited in the theory under Algae, Lichens and Bryophyta.",
                ],
              },
            ],
          },
        },
        outcomes: [
          "Explain fundamental microbial, fungal and algal structures and life histories.",
          "Differentiate plant diseases by agent, symptoms, etiology and control.",
          "Describe bryophyte groups with evolutionary trends.",
        ],
        assessments: ["Lab Practicals", "Viva", "Final Exam"],
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
  }
