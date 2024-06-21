import ayla from "/public/image/ayla.jpg";
import algeria_wilaya from "/public/image/algeria_wilayas.png";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";
import vitepay from "/public/image/vitepay.png";
import anistour from "/public/image/anistour.png";

export const projectsData = [
  {
    id: 1,
    title: "Algeria-Wilayas for Laravel",
    description:
      "This package is designed to help Laravel developers integrate wilayas data into their projects in the easiest way possible. It includes an enum of wilayas and provides the ability to create a table that includes all the data of wilayas with their information (optional to create a table of wilayas). It also includes a Wilaya model (class).",
    tools: ["Laravel", "PHP", "Composer", "MySQL"],
    // ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
    role: "Backend Development",
    code: "",
    url: "https://github.com/abdomassoun/Algeria-Wilayas",
    image: algeria_wilaya,
  },
  {
  id: 6,
  title: "School Management System",
  description:
      "I developed a School Management System that includes features such as attendance tracking for teachers and students, payment management, and class and session calendaring. The system is built using Laravel, a full-stack PHP framework. It is deployed using cPanel and version controlled using Git.",
  tools: ["Laravel", "PHP", "MySQL", "cPanel", "Git"],
  role: "Full Stack Development",
  code: "",
  url: "https://github.com/abdomassoun/Portfolio/blob/main/doc/sms.md",
  image: ayla,},

  {
    id: 3,
    title: "VitePay",
    description:
      "I worked as a Backend Developer on the VitePay project. I designed and developed RESTful APIs for data integration between applications. I deployed the web application onto servers using the Digital Ocean platform and Ubuntu, leveraging Docker for efficient containerization. I integrated notification and messaging services such as Pusher, Mailtrap, and Firebase for enhanced communication functionalities. I collaborated closely with a team of developers to architect and build a dynamic web application from inception. I maintained high standards of code quality by writing clean, well-documented, and reusable code components. I also created and maintained databases using MySQL.",
    tools: [
      "MySQL",
      "Digital Ocean",
      "Ubuntu",
      "Docker",
      "Pusher",
      "Mailtrap",
      "Firebase",
    ],
    role: "Backend Development & Server Deployment",
    code: "",
    url: "https://github.com/abdomassoun/Portfolio/blob/main/doc/vitepay.md",
    image: vitepay,
  },
  {
    id: 2,
    title: "Rental Car Management System",
    description:
        "I developed a Rental Car Management System for a freelance project. The system includes features such as rental car management, order tracking, payment tracking, employee management, and customer tracking. It is built using Laravel, a full-stack PHP framework, and utilizes Livewire for interactive UI components. The database is managed using MySQL, and the frontend is styled using Bootstrap.",
    tools: ["Laravel", "Livewire", "MySQL", "Bootstrap"],
    role: "Full Stack Development",
    code: "",
    url: "https://github.com/abdomassoun/Portfolio/blob/main/doc/anistour.md",
    image: anistour,
},

];

