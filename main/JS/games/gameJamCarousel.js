const gameJams = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Hollow Signal",
    role: "Gameplay Programmer",
    description: "Implemented core interaction systems and event-driven triggers for a puzzle-platformer built in 48 hours.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Ashborne",
    role: "Narrative Designer",
    description: "Wrote branching dialogue and designed choice-consequence systems for a post-apocalyptic survival game.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Tidebreaker",
    role: "UI/UX Designer",
    description: "Designed accessible menus, health indicators, and feedback systems for a fast-paced naval roguelike.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Wren & the Void",
    role: "Level Designer",
    description: "Built hand-crafted levels with guided exploration, hidden areas, and escalating difficulty across three biomes.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Runemark",
    role: "Technical Artist",
    description: "Created stylised VFX and optimised sprite atlases to maintain consistent frame rates on lower-end hardware.",
    link: "https://www.example.com"
  }
];

//Follows prev,next, card name
let gameJam_config = {
  prev: "#backButton_gameJams",
  next: "#forwardButton_gameJams",
  card: "#descriptionArea_gameJams"
}

createCarousel(gameJams, gameJam_config);
