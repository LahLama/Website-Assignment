
const games = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Nebula Drift",
    role: "Gameplay Programmer",
    description: "Built core movement systems and handled player controls for space navigation mechanics.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Ironbound Arena",
    role: "UI Designer",
    description: "Designed and implemented in-game menus and HUD elements for competitive match clarity.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Echo Valley",
    role: "Level Designer",
    description: "Created exploration-focused levels with environmental storytelling and pacing flow.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Pixel Heist",
    role: "Systems Designer",
    description: "Developed stealth mechanics and enemy behaviour logic for mission-based gameplay.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Frostline Protocol",
    role: "Technical Artist",
    description: "Optimised shaders and visual effects for performance across multiple platforms.",
    link: "https://www.example.com"
  }
];

//Follows prev,next, card name
let games_config = {
  prev: "#backButton_games",
  next: "#forwardButton_games",
  card: "#descriptionArea_games"
}

createCarousel(games, games_config);
