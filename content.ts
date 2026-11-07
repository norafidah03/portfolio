// All the text on the site lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Norafidah Kamarulzaman",
  fullName: "Norafidah Binti Kamarulzaman",
  role: "Data Analyst",
  location: "Kuala Lumpur, Malaysia",
  tagline:
    "Computer Science graduate (Data Analytics major) who turns messy public data into findings people can act on.",
  intro:
    "I graduated from Universiti Teknologi PETRONAS with a CGPA of 3.92 and Dean's List every semester. I like work that starts with a real question: how Klang Valley commuters actually move, or how scammers target Malaysians on social media. I build the pipeline, test it, and explain what the numbers mean.",
  email: "norafidahkamarulzaman03@gmail.com",
  linkedin: "https://www.linkedin.com/in/norafidah-kamarulzaman",
  github: "https://github.com/norafidah03",
  cv: "/Norafidah_Kamarulzaman_CV.pdf",
  photo: "/photo.jpg",
};

export const stats = [
  { value: "3.92", label: "CGPA, BSc Computer Science (Hons)" },
  { value: "8/8", label: "Semesters on the Dean's List" },
  { value: "0.93", label: "ROC-AUC, scam detection model" },
  { value: "4", label: "Certifications in data, AI and cloud" },
];

export type Project = {
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Transit Insight: Klang Valley Mobility Analytics",
    kind: "Personal project · 2026",
    featured: true,
    summary:
      "How has rail and bus ridership recovered since COVID, which lines are most stretched, and which districts are under-served? Built on open data from data.gov.my, Prasarana GTFS and OpenDOSM.",
    highlights: [
      "Rail ridership on lines open since 2019 averaged 116% of the 2019 level in 2025; LRT Kelana Jaya is the only one still below.",
      "MRT Kajang is the most stretched rail line at 776 weekday riders per scheduled train-hour.",
      "Klang has one Rapid KL bus stop per 7,200 residents, versus about one per 1,250 in KL.",
      "Tested Python pipeline (fetch, clean, build) feeding a live Streamlit dashboard.",
    ],
    tags: ["Python", "pandas", "GTFS", "Plotly", "Streamlit", "pytest"],
    links: [
      { label: "Live dashboard", href: "https://transit-ridership-my-4jhdrpw8kh8u6rx4nb9vc8.streamlit.app/" },
      { label: "Code", href: "https://github.com/norafidah03/transit-ridership-my" },
    ],
  },
  {
    title: "AI-Driven Financial Scam Detection",
    kind: "Final Year Project · UTP",
    summary:
      "An end-to-end NLP system that flags financial scam posts on Malaysian social media, in both Malay and English.",
    highlights: [
      "Fine-tuned multilingual BERT (mBERT) against an SVM baseline, reaching ROC-AUC 0.9327.",
      "Handled text preparation, feature extraction and model training on Malaysian social media data.",
      "Deployed as an interactive Streamlit prototype with a scam simulation mode.",
    ],
    tags: ["NLP", "mBERT", "SVM", "Python", "Streamlit"],
    links: [{ label: "Code", href: "https://github.com/norafidah03/scam-detection-project" }],
  },
  {
    title: "Alertify: Disaster Response App",
    kind: "Technopreneurship team project · UTP",
    summary:
      "A real-time flood alert and emergency response mobile app to help the public prepare for floods.",
    highlights: [
      "Integrated the Public Infobanjir API to pull, format and display live flood data.",
      "Learned a new low-code platform (Thunkable) independently to solve data formatting issues.",
    ],
    tags: ["Thunkable", "REST API", "Mobile"],
    links: [{ label: "Demo video", href: "https://www.youtube.com/watch?v=ntbmsYzHz58&t=445s" }],
  },
];

export const experience = [
  {
    role: "Software Engineer Trainee",
    org: "MTechnix Sdn. Bhd.",
    team: "Software Department · K-Youth Development Programme 2026",
    period: "Aug 2026 to Present",
    points: [
      "Applied emerging technologies to develop a multi-lingual AI call agent, integrating APIs and managing data ingestion pipelines to support advanced analytical models.",
      "Supported the project team in building a full-stack web application for an operational technology (OT) cybersecurity risk register, ensuring data quality and practical business solutions.",
    ],
  },
  {
    role: "Software Development Support Intern",
    org: "Verity Intelligence Sdn. Bhd.",
    team: "Technology Department, Database Division",
    period: "May to Dec 2024",
    points: [
      "Developed and optimised automated data crawlers in UiPath for the Data Crawlers Workflow Enhancement project.",
      "Built Python scrapers with Selenium and Google Cloud Vision for automated web data extraction.",
      "Engineered a MyKad image verification module using OpenCV and YuNet face detection.",
      "Deployed a Python automation bot as a Windows service.",
      "Ran regression testing and UAT to fix defects before release.",
    ],
  },
];

export const education = [
  {
    school: "Universiti Teknologi PETRONAS",
    detail: "Bachelor of Computer Science (Hons), Data Analytics major, Financial Management minor",
    period: "2022 to 2025",
    note: "CGPA 3.92 · Dean's List every semester · Yayasan UTP Scholarship",
  },
  {
    school: "Universiti Teknologi PETRONAS",
    detail: "Foundation in Science (Computer Science)",
    period: "2021 to 2022",
    note: "CGPA 3.89",
  },
];

export const skills = [
  { group: "Data analytics", items: ["SQL", "Python", "R", "Excel and pivot tables", "Google Sheets", "Data cleaning", "Data storytelling"] },
  { group: "Visualisation", items: ["Tableau", "Plotly", "Streamlit", "Dashboard design"] },
  { group: "Machine learning and AI", items: ["NLP", "Transformers (mBERT)", "SVM", "OpenCV", "Prompt design"] },
  { group: "Automation and engineering", items: ["Selenium", "UiPath", "Web scraping", "pytest", "Regression and UAT", "AWS"] },
  { group: "Other languages", items: ["C++", "Java", "Visual Basic", "MATLAB"] },
];

export const leadership = [
  { role: "Vice President (2024), Secretary (2023)", org: "Association for Information Systems, UTP Student Chapter", note: "Organised two national-level competitions and a club event in 2023." },
  { role: "Project Director", org: "AIS-UTP-SC Career Awareness Video Competition", note: "National level, 13 teams." },
  { role: "Supervisor", org: "ESTECH 2023 Coding King Competition", note: "National level, 20 teams." },
  { role: "Secretary", org: "KRAKEN x KEMBARA International Coastal Cleanup Day 2023", note: "Removed 209.5 kg of underwater and beach debris at Perhentian Island." },
  { role: "Head of Public Relations", org: "Sawasdee English Camp 2.0, Narathiwat, Thailand", note: "19 committee members, 29 participants." },
];

export const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google via Coursera", date: "Oct 2026" },
  { name: "Google AI Professional Certificate", issuer: "Google via Coursera", date: "Aug 2026" },
  { name: "AI Ready Malaysia: Student Edition", issuer: "Pepper Labs Sdn Bhd", date: "Aug 2026" },
  { name: "AWS Academy Graduate: Cloud Foundations", issuer: "Amazon Web Services", date: "Nov 2025" },
  { name: "1st Runner Up, Oh My Code! Competition", issuer: "UTP", date: "May 2022" },
];
