const practicalProjects = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Smart Grid Monitor",
    role: "Embedded Systems Engineer",
    description: "Developed a real-time power consumption monitoring system using a microcontroller with UART data logging.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Autonomous Line Follower",
    role: "Robotics Engineer",
    description: "Designed and programmed a PID-controlled line-following robot with IR sensors and motor driver integration.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Solar Charge Controller",
    role: "Power Electronics Engineer",
    description: "Built an MPPT-based solar charge controller with overcharge protection and battery voltage regulation.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Home Automation Hub",
    role: "IoT Systems Designer",
    description: "Integrated ESP32-based nodes with MQTT protocol to control lighting and temperature sensors remotely.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "PCB Motor Driver",
    role: "PCB Design Engineer",
    description: "Designed a custom H-bridge motor driver PCB with thermal management and current limiting for DC motors.",
    link: "https://www.example.com"
  }
];

//Follows prev,next, card name
let practical_config = {
  prev: "#backButton_practicals",
  next: "#forwardButton_practicals",
  card: "#descriptionArea_practicals"
}

createCarousel(practicalProjects, practical_config);
