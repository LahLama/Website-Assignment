const codedProjects = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "TaskFlow",
    role: "Full Stack Developer",
    description: "Built a kanban-style project management web app with real-time updates using React, Node.js, and WebSockets.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "DevMetrics Dashboard",
    role: "Frontend Developer",
    description: "Developed an analytics dashboard that visualises GitHub repository activity and pull request trends using REST APIs.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "SecureVault API",
    role: "Backend Developer",
    description: "Designed a RESTful API with JWT authentication, role-based access control, and encrypted credential storage.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Pathfinder CLI",
    role: "Software Engineer",
    description: "Created a command-line tool for visualising and comparing pathfinding algorithms across custom grid inputs.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "BudgetBuddy",
    role: "Mobile Developer",
    description: "Built a cross-platform budgeting app in Flutter with local data persistence and monthly spending breakdowns.",
    link: "https://www.example.com"
  }
];

//Follows prev,next, card name
let coded_config = {
  prev: "#backButton_coded",
  next: "#forwardButton_coded",
  card: "#descriptionArea_coded"
}

createCarousel(codedProjects, coded_config);
