// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import apiLogo from './assets/tech_logo/Apilogo.png';
import wordpressLogo from './assets/tech_logo/wordpress.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
// import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
// import nodejsLogo from './assets/tech_logo/nodejs.png';
// import expressjsLogo from './assets/tech_logo/express.png';
// import mongodbLogo from './assets/tech_logo/mongodb.png';

// Experience Section Logo's
import appzeto from './assets/company_logo/appzeto.png';
import crt from './assets/company_logo/cry.png';

// Education Section Logo's
import sageLogo from './assets/education_logo/sage.png';
import sunshineLogo from './assets/education_logo/sunshine.png';
import guardianLogo from './assets/education_logo/guardian.png';

// Project Section Logo's
import chalosawariLogo from './assets/work_logo/chalosawari.png';
import qrcodeLogo from './assets/work_logo/qrcode.png';
import onlinebankingLogo from './assets/work_logo/onlinebank.png';
import portfolioLogo from './assets/work_logo/portfolio.png';

// Certification Images
import nptelCertificate from './assets/certification/nptel.jpeg';
import learnQuestCertificate from './assets/certification/learnquest.jpeg';
import boordCertificate from './assets/certification/boord.jpeg';
import coreJavaCertificate from './assets/certification/core.jpeg';
import advancedJavaCertificate from './assets/certification/advance.jpeg';
import j2eeCertificate from './assets/certification/j2ee.jpeg';
import udemyCertificate from './assets/certification/udemy.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'WordPress', logo: wordpressLogo },
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Rest API', logo: apiLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: appzeto,
      role: "Frontend Developer",
      company: "Appzeto",
      date: "July 2025 - Present",
      desc: "Developed dynamic and scalable web applications using HTML,CSS3,JavaScript,ReactJS, Tailwind,WordPress handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS"
      ],
    },
    {
      id: 1,
      img: crt,
      role: "Java Developer",
      company: "Coding Raja Technologies",
      date: "June 2024 - July 2024",
      desc: "Built an online banking system utilizing frontend technologies HTML5, CSS3, and JavaScript for an interactive user experience. Developed the backend with Java and MySQL to enhance system performance and ensure reliable data management. Successfully completed all tasks within the given timeframe, maintaining efficiency and quality.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "JAVA",
        "JSP",
        "SERVLET",
        "MYSQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: sageLogo,
      school: "Sage University, Indore",
      date: "August 2021 - June 2025",
      grade: "8.24 CGPA",
      desc: "I completed my Bachelor degree in Bachelor of Technology in specilization of Computer Science Engineering from Sage University , Indore. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Programming ,computing and technology. From exploring many subjects to diving into Frontened and Backend, I gained practical insights into the world of software development. My time at Sage University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology(CSE)",
    },
    {
      id: 1,
      img: sunshineLogo,
      school: "Sun Shine Higher Secondary, Dewas",
      date: "April 2020 - February 2021",
      grade: "84.4%",
      desc: "I completed my class 12 education from Sun Shine Higher Secondary, Dewas  under the MP board, where I studied Physics, Chemistry,and Mathematics (PCM) and make lots of memories with my friends.",
      degree: "XII (PCM)",
    },
    {
      id: 2,
      img: guardianLogo,
      school: "The Guardian High School, Dewas",
      date: "April 2018 - Feb 2019",
      grade: "79.2%",
      desc: "I completed my class 10 education from The Guardian High School, Dewas  under the MP board, where I studied many subjects and make lots of memories with my friends.",
      degree: "X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Chalo Sawari",
      description:"Chalo Sawari is a responsive full-stack travel booking platform designed for seamless Bus, Car, and Traveller rentals. The system features three distinct modules – User, Driver, and Admin – to handle the complete booking lifecycle.The platform allows users to search, filter, and sort available vehicles, view booking details, and make secure reservations. Admins can manage vehicles, drivers, bookings, and pricing, while drivers can track and manage their assigned rides.",      
      image: chalosawariLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"]
    },
    {
      id: 1,
      title: "QR Code Attendance System With DataBase",
      description:"The QR Code Attendance System with Database is a web-based application designed with separate modules for admins and students, ensuring secure and efficient attendance management. The system features robust authentication with dedicated sign-up and sign-in processes for both user types. Admins can easily manage student records, generate unique QR codes for marking attendance, and monitor attendance data in real time. Students can conveniently scan QR codes to mark their presence, view detailed attendance history, and update personal profile information. Backed by a strong and optimized database, the system ensures fast, accurate, and reliable data handling and retrieval, making it an effective solution for modern attendance tracking.",
      image: qrcodeLogo,
      tags: ["HTML5", "CSS3", "JavaScript", "JAVA", "SQL", "JSP", "Servlets"]
    },
    {
      id: 2,
      title: "Online Banking System with Database",
      description:"The Online Banking System with Database is a secure, database-driven web application designed with separate Admin and Customer modules for efficient account and transaction management. The Admin module provides comprehensive control, including customer onboarding, account management, deposits, withdrawals, balance checks, and fund transfers. The Customer module allows users to view and manage their accounts, transfer funds, check balances, and update profile details, all with secure session handling to protect sensitive data. Backed by a robust database, the system ensures accurate transaction processing and reliable data retrieval, delivering a smooth and secure online banking experience.",
      image: onlinebankingLogo,
      tags: ["HTML5", "CSS3", "JavaScript", "JAVA", "SQL", "JSP", "Servlets"]
    },
    {
      id: 3,
      title: "Portfolio",
      description:"This is a modern, responsive portfolio website built with React.js and Tailwind CSS. It features a sleek dark theme with animated components, smooth scrolling effects, and a professional layout that includes sections for About, Skills, Experience, Work Projects, Education, and Contact. The project utilizes Vite as the build tool and incorporates various React libraries for enhanced user experience, including email integration, typing effects, and parallax animations. The website is designed to showcase professional information in an engaging and visually appealing manner with a focus on modern web development practices and responsive design principles.",
      image: portfolioLogo,
      tags: ["HTML5", "CSS3", "JavaScript", "React Js", "Tailwind CSS"]
    }
  ];

  export const certifications = [
    {
      id: 0,
      title: "NPTEL Certification in Programming in Java",
      issuer: "NPTEL",
      platform: "NPTEL",
      year: "January - April 2023",
      skills: ["76% with Silver"],
      certificateUrl: "#",
      imageUrl: nptelCertificate,
    },
          {
        id: 1,
        title: "Frontend for Java Full Stack Development",
        issuer: "BOARD Infinity",
        platform: "Coursera",
        year: "2024",
        skills: ["Frontend", "Java", "Full Stack", "Web Development"],
        certificateUrl: "#",
        imageUrl: boordCertificate,
      },
          {
        id: 2,
        title: "Introduction to Java",
        issuer: "Learn Quest",
        platform: "Coursera",
        year: "January - April 2023",
        skills: ["Java", "Programming", "Object-Oriented"],
        certificateUrl: "#",
        imageUrl: learnQuestCertificate
      },
    {
      id: 3,
      title: "Core Java, Advanced Java, J2EE",
      issuer: "Universal Informatics",
      platform: "Universal Informatics",
      year: "2023-2024",
      skills: ["Core Java", "Advanced Java", "J2EE", "Enterprise"],
      certificateUrl: "#",
      multipleCertificates: [
        {
          title: "Core Java",
          imageUrl: coreJavaCertificate,
          description: "Core Java Programming Certification"
        },
        {
          title: "Advanced Java", 
          imageUrl: advancedJavaCertificate,
          description: "Advanced Java Programming Certification"
        },
        {
          title: "J2EE",
          imageUrl: j2eeCertificate,
          description: "Java 2 Enterprise Edition Certification"
        }
      ]
    },
    {
      id: 4,
      title: "HTML, CSS, JavaScript",
      issuer: "Udemy",
      platform: "Udemy",
      year: "2024",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      certificateUrl: "#",
      imageUrl: udemyCertificate
    },
  ];  