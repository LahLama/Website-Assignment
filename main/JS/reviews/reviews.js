const gameReviews = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Hollow Signal",
    description: "A tense atmospheric thriller with clever puzzle design, though its late-game pacing stumbles under the weight of its own ambition.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Ironveil Chronicles",
    description: "A sprawling RPG with rich world-building and satisfying combat, let down slightly by repetitive side quest structure.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Duskrunner",
    description: "A stylish parkour platformer that nails its movement feel, with tight level design that keeps you pushing for one more run.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Thornfield",
    description: "A slow-burn survival game with genuine tension and strong environmental storytelling, though the crafting system feels underdeveloped.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Pulsebreak",
    description: "A rhythm-action hybrid that blends tight combat with an infectious soundtrack, making every encounter feel satisfying and deliberate.",
    link: "https://www.example.com"
  }
];

const showButton = document.querySelector("#ratingsShowAll");
// const hideButton = document.querySelector("#testimonal_forwardButton");
const reviewCont = document.querySelector("#cards_ratings");
let isShowing = false;
showButton.addEventListener("click", showAllReviews);

function onStartReviewPage() {
    reviewCont.innerHTML = "";
    for (let index = 0; index < 3; index++) {
        var newCard = renderReview(gameReviews[index]);
        reviewCont.append(newCard);
    }
}

onStartReviewPage();

function showAllReviews() { 

    if (!isShowing) {
        reviewCont.innerHTML = "";
        gameReviews.forEach(review => {
            var newCard = renderReview(review);
            reviewCont.append(newCard);
        });
        showButton.textContent = "Hide Reviews";
    }
    else{
        onStartReviewPage();
        showButton.textContent = "Show All Reviews"
    }
    
    isShowing = !isShowing;
}

function renderReview(review) {
    
    const card = document.createElement("div");

    card.classList.add("ratingCard");
    card.setAttribute("data-id", review.id);

    card.innerHTML =`
   <img src="${review.img}" alt="image of the game" class="reviewImage">
    <div class="center reviewInfo ">
        <h4> ${review.gameTitle} </h4>
        <p> ${review.description}</p>
        <a href=${review.link}>  
            <button  class="expandReviewBtn center">Open Review </button>
        </a>
    </div>
    `;

    return card;

}