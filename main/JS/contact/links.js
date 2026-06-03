// const socialMedia = [
//   {
//     id: 1,
//     img: "/ASSETS/IMAGES/icons/github.svg",
//     name: "GitHub",
//     link: "https://www.github.com"
//   },
//   {
//     id: 2,
//     img: "/ASSETS/IMAGES/icons/linkedin.svg",
//     name: "LinkedIn",
//     link: "https://www.linkedin.com"
//   },
//   {
//     id: 3,
//     img: "/ASSETS/IMAGES/icons/twitter.svg",
//     name: "Twitter",
//     link: "https://www.twitter.com"
//   },
//   {
//     id: 4,
//     img: "/ASSETS/IMAGES/icons/itch.svg",
//     name: "Itch.io",
//     link: "https://www.itch.io"
//   },
//   {
//     id: 5,
//     img: "/ASSETS/IMAGES/icons/youtube.svg",
//     name: "YouTube",
//     link: "https://www.youtube.com"
//   }
// ];


const socialMedia = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    name: "GitHub",
    link: "https://www.github.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    name: "LinkedIn",
    link: "https://www.linkedin.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    name: "Twitter",
    link: "https://www.twitter.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    name: "Itch.io",
    link: "https://www.itch.io"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    name: "YouTube",
    link: "https://www.youtube.com"
  }
];

socialMedia.forEach(page => {
    // finds the skill container
    var linksContainer = document.querySelector("#circleLinks")

    // Creates new skill item div
    var newLink = document.createElement("div");
    newLink.classList.add("link")

    newLink.innerHTML = `
        <a href=${page.link} target="_blank">
            <img src=${page.img} class="imageIcon" alt="">
            <p class="hoverName tooltip"> ${page.name} </p>
        </a>
    `;

    linksContainer.append(newLink);

   
});
