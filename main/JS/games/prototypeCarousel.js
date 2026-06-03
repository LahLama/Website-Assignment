const prototypes = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Gravshift",
    role: "Gameplay Programmer",
    description: "Prototyped a gravity-flipping platformer mechanic with momentum preservation and dynamic obstacle generation.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Spore Tactics",
    role: "Systems Designer",
    description: "Explored turn-based combat with organic unit growth systems and terrain-based ability modifiers.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Mirrorgate",
    role: "Gameplay Programmer",
    description: "Built a proof-of-concept for a dual-reality puzzle mechanic where player actions mirror across two dimensions.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Thornwatch",
    role: "Level Designer",
    description: "Prototyped a top-down stealth layout with dynamic guard patrol paths and destructible cover objects.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Velocity Rift",
    role: "Technical Designer",
    description: "Tested a time-dilation mechanic for a racing game where slowing time affects vehicle handling and track hazards.",
    link: "https://www.example.com"
  }
];

//Follows prev,next, card name
let prototype_config = {
  prev: "#backButton_prototypes",
  next: "#forwardButton_prototypes",
  card: "#descriptionArea_prototypes"
}

createCarousel(prototypes, prototype_config);
