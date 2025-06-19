const settings = {
  isSplash: true,
};

const seo = {
  title: "Safaeat's⚡Portfolio",
  description:
    "Passionate Data Analyst and Machine Learning specialist with Django expertise, focused on building impactful AI solutions and scalable web applications. Eager to tackle challenging projects and contribute to innovative developments in data-driven technologies.",
  og: {
    title: "Personal Portfolio of Safaeat Molla",
    type: "website",
    url: "###",
  },
};

//Home Page
const greeting = {
  title: "Safaeat Molla",
  logo_name: "Safaeat",
  nickname: "Data Analyst | Django Developer",
  subTitle:
    "Passionate Data Analyst and Machine Learning specialist with Django expertise, focused on building impactful AI solutions and scalable web applications. Eager to tackle challenging projects and contribute to innovative developments in data-driven technologies.",
  resumeLink: "###",
  githubProfile: "https://github.com/Safaeat",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Safaeat",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/safaeat-molla-07660525a/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#1877F2", 
  },
  {
    name: "Gmail",
    link: "mailto:info.safaeatmolla@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sm_araffat/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F", 
  },
  {
    name: "Research Gate",
    link: "https://www.researchgate.net/profile/Safaeat-Molla?ev=hdr_xprf",
    fontAwesomeIcon: "fa-researchgate",
    backgroundColor: "#1877F2",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/SAraffat",
    fontAwesomeIcon: "fa-x-twitter", 
    backgroundColor: "#000000", 
  },
];

const skills = {
  data: [
    {
      title: "AI, ML & Data Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable models for various Machine Learning and statistical use cases",
        "⚡ Experience of working on Machine Learning projects",
        "⚡ Data quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Data Analysis & Visualization",
          fontAwesomeClassname: "carbon:data-volume",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
            color: "#F2C811",
          },
        },
      ],
    }, 
    {  
      title: "Django Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites front end using JS, React",
        "⚡ Experience of hosting websites on servers and cloud platforms",
        "⚡ Developing Web backend in Django",
      ],
      softwareSkills: [
        {
         skillName: "Django",
         fontAwesomeClassname: "simple-icons:django",
         style: {
         backgroundColor: "#092E20",
           color: "#ffffff",
         },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "devicon:tailwindcss",
          style: {
            backgroundColor: "transparent",
            color: "#38B2AC",          // Tailwind teal
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#47A248",           // MongoDB green
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Southeast University",
      subtitle: "BSc in Computer Science and Engineering - 3.34 CGPA",
      logo_path: "srm logo.png",
      duration: "Passing year - 2024",
      descriptions: [
        "🔺 I studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, Conputer Networking etc.",
        "📈 Apart from this, I have done courses on Artificial Intalligance, Data Mining, SDLC and SQL.",
        "⚡ Also I served as Treasurer at Southeast Computer Club.",
      ],
      website_link: "https://new.seu.edu.bd/",
    },
    {
      title: "Govt. Dohar Nawabganj College",
      subtitle: "Higher Secondery School(Science group) - 4.00 CGPA",
      logo_path: "college.png",
      duration: "Passing year - 2019",
      descriptions: [
        "🔺I pursued my studies in the Science department, where I developed a strong foundation in subjects such as Higher Mathematics, Physics, and Information and Communication Technology (ICT), which were among my favorites.",
      ],
      website_link: "https://govtdnc.edu.bd/",
    },
    {
      title: "Bandhura Holy Cross High School",
      subtitle: "Secondery School(Science group) - 5.00 CGPA",
      logo_path: "school.png",
      duration: "Passing year - 2017",
      descriptions: [
        "🔺In school, I had the chance to learn many different subjects. At the secondary level, I got the opportunity to study in the Science department.",
        "⚡I also had the opportunity to take part in extracurricular activities, such as science fairs and annual competitions, where I participated and received awards for my projects."
      ],
      website_link: "https://en.wikipedia.org/wiki/Bandura_Holy_Cross_School_%26_Collage",
    },
  ],
};



const certifications = {
  certifications: [
    {
      title: "Python Data Structures",
      subtitle: "Introduced core data structures of Python programming language",
      logo_path: "course.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/ZVKN508Y3KSG",
      alt_name: "University of Michigan",
      color_code: "#ffffff",  
    },
    {
      title: "Excel Basics for Data Analysis",
      subtitle: "Gained working knowledge of Excel for data analysis",
      logo_path: "ibm_logo.png",
      certificate_link: "#", 
      alt_name: "IBM",
      color_code: "#ffffff", 
    },
    {
      title: "Programming for Everybody",
      subtitle: "Learned basics of computer programming using Python",
      logo_path: "course.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/5LV8NHUZDSTT",
      alt_name: "University of Michigan",
      color_code: "#ffffff", 
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work / Internship",
  description:
    " I am currently looking for a job as a Django developer or Data Analysis in a major corporate environment. If you have opportunities aligned with my skills, projects, and experience, I would be delighted to connect and discuss how I can contribute to your team, project, or organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Looking for opportunities",
          company: "",
          company_url: "###",
          logo_path: "",
          duration: "Currently Present in ",
          location: "Nikunja 2, Dhaka",
          description:
            "Improving my skillset each and every day. If you've come this far in my portfolio, it might mean you have an opportunity for me. I'd love to connect and discuss how I can contribute to your team or project. Help me take the next step in my career journey !",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Office of IT Intern",
          company: "Southeast University",
          company_url: "https://new.seu.edu.bd/",
          logo_path: "srm logo.png",
          duration: "March 2024 - July 2024",
          location: "Tejgaon, Dhaka",
          description:
            " I developed a web-based CV generator for SEU students with features like real-time preview, template selection, and email verification for secure access. I also gained practical experience in web development, software testing, and data management within inventory systems and machine learning applications.",
            color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Treasurer",
          company: "Southeast Computer Club",
          company_url: "https://seucc.vercel.app/",
          location:
            "Southest University, Tejgaon, Dhaka",
          description:
            " As an executive, we organized workshops, programming contests, and volunteering events in the tech field, fostering skill development and community engagement among department of CSE students.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Research",
      work: true,
      experiences: [
        {
          title: "Research Assistant",
          company: "Southeast University",
          company_url: "###",
          logo_path: "",
          duration: "January 2023 - July 2024",
          location: "Southeast University, Tejgaon, Dhaka",
          description:
            " Conducted research on machine learning to develop a hybrid recommendation system for book suggestions, addressing the cold start problem.",
          color: "#000000",
        },
      ],
    },
  ],
};

//Publications
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on two research papers and one research has been accepted for publication in the Journal of Current Research in Engineering and Science.",
  avatar_image_path: "projects_image.svg",
};

export const publications = {
  data: [
    {
      id: "1",
      name: "Hybrid Recommendation Systems using Adaptive Clustering to address Cold start problems(IEEE)",
      createdAt: " (IEEE Xplore)",
      description:
        "This study combines content-based and collaborative filtering with fuzzy clustering to solve the cold start problem for new users. It enhances the accuracy and personalization of book recommendations by creating multidimensional user profiles and adapting through re-recommendation techniques.",
      url: "https://ieeexplore.ieee.org/document/10698666",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Machine Learnig, Python and Data Analysis projects along with Responsive Websites / Web apps and host - deploy them. I also have a strong desire to build Django related projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "GR.jpg",
    description: (
      <span>
        Be it for a project, a part-time role, a presentation, or simply to say
        hello, I'm always happy and looking forward to hearing from you.
        <br /> I can help you with Python, ML, SQL, Data Analysis and Django Developmeant.
      </span>
    ),
  },
  blogSection: {
    title: "Aspiration",
    subtitle:
      "I am actively seeking thrilling opportunities where I can contribute and grow. Explore my GitHub to discover my skills and projects, and feel free to reach out if you have a role that aligns with my talents and aspirations.",
    link: "https://github.com/Safaeat",
    avatar_image_path: "code.png",
  },
  addressSection: {
    title: "Connect",
    subtitle:
      "Feel free to reach out if you're looking for a Analyst or Developer, or simply want to connect. Check out my other social media for direct contact -🔻",
    avatar_image_path: "",
    location_map_link: "###",
  },
  phoneSection: {
    title: "What's Up or Mobile",
    subtitle: "+8801865216805",
  },
};

console.log(
  "%c Designed and Developed by Safaeat Molla⚡",
  "background-image: linear-gradient(90deg,#abc4ff,#D5CFD6); color: black;font-weight:1000;font-size:1rem; padding:20px;"
);

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
