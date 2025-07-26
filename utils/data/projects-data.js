import diraya_backend_image from "/public/image/diraya_inc_cover.jpeg";
import vitepay from "/public/image/vitepay.png";

export const projectsData = [
  {
    id: 1,
    title: "Diraya Backend Refactoring & API Development",
    description:
      "At Diraya Inc., I worked on refactoring a legacy Laravel backend to improve scalability, readability, and maintainability. I applied SOLID principles, introduced clean architecture patterns, and developed RESTful APIs. The project also included writing unit, feature, and integration tests, integrating third-party services, and managing Dockerized deployments.",
    tools: ["Laravel", "PHP", "MySQL", "Docker", "Redis", "GitHub Actions", "PHPUnit","AWS"],
    role: "Backend Development",
    code: "", 
    url: "https://github.com/Diraya-Inc",
    image: diraya_backend_image, 
  },
  {
    id: 2,
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

];

