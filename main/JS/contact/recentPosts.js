


const latestPosts = [
  {
    id: 1,
    name: "Instagram - Latest Post",
    img: "/ASSETS/IMAGES/test1.png",
    caption: "Just wrapped up a new game jam project - really happy with how the mechanics came together this time around!",
    link: "https://www.example.com"
  },
  {
    id: 2,
    name: "LinkedIn - Latest Post",
    img: "/ASSETS/IMAGES/test1.png",
    caption: "Excited to share that I've just completed a new embedded systems project using ESP32 and MQTT. Write-up coming soon!",
    link: "https://www.example.com"
  },
  {
    id: 3,
    name: "GitHub - Latest Post",
    img: "/ASSETS/IMAGES/test1.png",
    caption: "Just pushed a major update to my pathfinding visualiser - added A* and Dijkstra comparison mode.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    name: "Itch.io - Latest Post",
    img: "/ASSETS/IMAGES/test1.png",
    caption: "New prototype is live! Gravshift is a gravity-flipping platformer built in 48 hours - would love some feedback.",
    link: "https://www.example.com"
  }
];

latestPosts.forEach(page => {
    // finds the skill container
    var postsContainer = document.querySelector("#recentPosts")

    // Creates new skill item div
    var newPost = document.createElement("div");
    newPost.classList.add("mediaPage")
    newPost.classList.add("center")
    newPost.setAttribute("href", page.link)

    newPost.innerHTML = `
        <h4> ${page.name} </h4>
                <img src=${page.img} height="256px" width="256px">

                <p> ${page.caption} </p>
            </a>
    `;

    postsContainer.append(newPost);

   
});
