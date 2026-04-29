import diraya_backend_image from "/public/image/diraya_inc_cover.jpeg";
import vitepay from "/public/image/vitepay.png";
import travel from "/public/image/travel.jpg";
import portfolio from "/public/image/portfolio.gif";
import anistour from "/public/image/anistour.png";
import taskfix from "/public/image/taskfix.png";
import reops from "/public/image/reops.jpeg";
import rohool from "/public/image/rohool.png";
import vitfe from "/public/image/vitfe.png";
import container_migration from "/public/image/container_migration.jpeg";

export const projectsData = [
  {
    id: 1,
    name: "ReOps Training Platform Backend",
    title: "ReOps Training Platform Backend",
    description:
      "Designed and implemented a modular backend using DDD and CQRS, with optimized PostgreSQL modeling, Redis queues, BDD testing, and production-ready CI/CD workflows.",
    tools: ["Laravel", "PHP", "PostgreSQL", "Redis", "Docker", "Pest", "GitHub Actions"],
    role: "Backend Engineer",
    code: "",
    url: "https://partners.reops.io",
    image: reops,
  },
  {
    id: 2,
    name: "Rohool Logistics Platform",
    title: "Rohool Logistics Platform",
    description:
      "Contributed to scaling a last-mile logistics platform handling 1,000+ daily orders by optimizing queries, improving queue-based workloads, and supporting high-concurrency operations on AWS.",
    tools: ["Laravel", "PHP", "PostgreSQL", "Docker", "AWS", "SQS", "CloudWatch"],
    role: "Backend Developer",
    code: "",
    url: "https://lm.rohool.net",
    image: rohool,
  },
  {
    id: 3,
    name: "Vitfe VTC Platform",
    title: "Vitfe VTC Platform",
    description:
      "Refactored a legacy ride-hailing backend, redesigned API modules around REST standards, and improved maintainability with SOLID principles and targeted unit tests.",
    tools: ["Laravel", "PHP", "MySQL", "RESTful APIs", "PHPUnit"],
    role: "Backend Developer",
    code: "",
    url: "https://github.com/Diraya-Inc",
    image: vitfe,
  },
  {
    id: 4,
    title: "VitePay",
    name: "VitePay",
    description:
      "Built and maintained backend APIs, integrated third-party messaging services, and deployed Dockerized applications to production infrastructure on DigitalOcean.",
    tools: [
      "Laravel",
      "PHP",
      "MySQL",
      "RESTful APIs",
      "Docker",
      "DigitalOcean",
      "Pusher",
      "Mailtrap",
      "Firebase",
    ],
    role: "Backend Developer",
    code: "",
    url: "https://vitepay-git-main-smailhal1.vercel.app/",
    image: vitepay,
  },
  {
    id: 5,
    name: "TaskFix",
    title: "TaskFix – AI-Powered CLI Task Formatter",
    description:
      "Created an open-source Go CLI that transforms rough task notes into structured technical tickets using AI, with support for GitHub/Jira style outputs and automation-friendly workflows.",
    tools: ["Go", "CLI", "REST API", "JSON", "GitHub"],
    role: "Sole Developer",
    code: "https://github.com/abdomassoun/taskfix",
    url: "https://github.com/abdomassoun/taskfix",
    image: taskfix,
  },
  {
    id: 6,
    name: "Stateful Container Migration",
    title: "Stateful Container Migration in Kubernetes",
    description:
      "Master’s research project evaluating stateful container migration in edge environments using CRIU, Kubernetes orchestration, distributed storage, and performance analysis.",
    tools: ["Kubernetes", "Go", "gRPC", "CRIU", "NFS", "Ansible", "Grafana"],
    role: "System Designer & Implementation Lead",
    code: "https://github.com/abdomassoun/container-live-migration",
    url: "https://github.com/abdomassoun/container-live-migration",
    image: container_migration,
  },
  {
    id: 7,
    name: "AnisTour Rental Car Management System",
    title: "AnisTour (Rental Car Management System)",
    description:
      "Contributed to backend refactoring and performance improvements for a rental car management platform, applying SOLID principles, clean architecture, and automated testing practices.",
    tools: ["Laravel", "PHP", "MySQL", "Docker", "AWS", "GitHub Actions"],
    role: "Backend Developer",
    code: "",
    url: "https://www.anistour.com/",
    image: anistour,
  },

];
