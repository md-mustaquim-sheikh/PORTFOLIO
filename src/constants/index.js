import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "ML Developer",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "12th Grade - CBSE Board",
    company_name: "Modern Convent School",
    icon: starbucks,
    iconBg: "#000000",
    date: "Completed in 2022",
    points: [
      "Developed a strong foundation in science and mathematics.",
      "Excelled in subjects like Physics, Chemistry, and Mathematics, which laid the groundwork for AI/ML studies.",
      "Participated in academic activities and group projects, honing collaborative and analytical skills.",
    ],
  },
  {
    title: "Diploma in Computer Application",
    company_name: "ISBM University",
    icon: shopify,
    iconBg: "#000000",
    date: "Completed in 2023",
    points: [
      "Gained foundational knowledge in computer fundamentals, office tools, and internet technologies.",
      "Developed practical skills in MS Office (Word, Excel, PowerPoint), essential for documentation and presentations.",
      "Learned programming basics in C and Python, building logic and algorithmic thinking.",
      "Focused on real-world applications, preparing for roles in IT support, data entry, and office administration."
    ],

  },
  {
    title: "B.Tech in Artificial Intelligence and Machine Learning",
    company_name: "RSR-RCET Bhilai",
    icon: tesla,
    iconBg: "#000000",
    date: "2023-present",
    points: [
      "Pursuing a degree in Artificial Intelligence and Machine Learning, focusing on programming, algorithms, and data analysis.",
      "Engaged in projects combining web development and AI/ML, including real-world applications such as E-Commerce website.",
      "Gained knowledge in programming languages like Python and JavaScript, alongside tools like OpenCV for AI applications.",
      "Exploring the MERN stack to integrate front-end and back-end development with AI capabilities.",
    ],
  },

  {
    title: "Web Developer skills",
    company_name: "Apna College",
    icon: shopify,
    iconBg: "#000000",
    date: "ongoing",
    points: [
      "Acquired proficiency in HTML, CSS, and JavaScript, building user-friendly and responsive websites.",
      "Currently learning the MERN stack to advance full-stack development capabilities.",
      "Leveraging skills to create intelligent, data-driven web applications integrating AI/ML.",
      "Actively contributing to personal projects, enhancing technical expertise and problem-solving abilities."
    ],

  },
];


export const workExperiences = [
  {
    title: "Java Developer",
    company_name: "CodSoft",
    date: "Apr 2025 - Present",
    work_type: "Internship",
    points: [
      "Developing Java-based projects using OOP concepts and clean code practices.",
      "Collaborating with remote teams to improve and debug application functionality.",
      "Implementing backend logic and optimizing performance through structured testing."
    ],
  },
  {
    title: "Student Ambassador",
    company_name: "LetsUpgrade",
    date: "Apr 2025 - Present",
    work_type: "Internship",
    points: [
      "Promoting tech programs and events on social media platforms.",
      "Engaging peers and expanding student community reach.",
      "Assisting in organizing webinars and handling participant queries."
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Career360 & 1stop.ai",
    date: "Mar 2025 - Apr 2025",
    work_type: "Internship",
    points: [
      "Represented the brand and shared opportunities with fellow students.",
      "Promoted awareness through campaigns and online interactions.",
      "Supported event marketing and student engagement initiatives."
    ],
  },
];




const testimonials = [
  {
    testimonial:
      "I thought creating a smart, innovative web app was impossible, but this developer proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Building a web solution as intelligent as the concept seemed impossible—until this programmer delivered it.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I doubted we could match the intelligence of our vision online, but this developer made it a reality.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
