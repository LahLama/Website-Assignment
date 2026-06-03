
const gameAnalysis = [
  {
    id: 1,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Hollow Knight",
    description: "An exploration of how environmental silence and sparse UI design create a sense of isolation that reinforces the game's themes of loss and perseverance.",
    link: "https://www.example.com"
  },
  {
    id: 2,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Celeste",
    description: "A breakdown of how Celeste uses its assist mode and difficulty curve as a mechanical metaphor for mental health and self-acceptance.",
    link: "https://www.example.com"
  },
  {
    id: 3,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Disco Elysium",
    description: "An analysis of how skill-based dialogue systems replace traditional combat to reframe player agency around identity and ideology rather than power.",
    link: "https://www.example.com"
  },
  {
    id: 4,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Outer Wilds",
    description: "A look at how knowledge rather than ability gates progression, and how that design choice shifts the emotional core from challenge to discovery.",
    link: "https://www.example.com"
  },
  {
    id: 5,
    img: "/ASSETS/IMAGES/test1.png",
    gameTitle: "Hades",
    description: "An examination of how narrative repetition is woven into the roguelike loop, using failure as a storytelling device rather than a setback.",
    link: "https://www.example.com"
  }
];

const showAnalyisButton = document.querySelector("#analysisShowAll");
// const hideButton = document.querySelector("#testimonal_forwardButton");
const analysisCont = document.querySelector("#cards_analysis");
let isCardsShowing = false;
showAnalyisButton.addEventListener("click", showAllAnalysis);

function onStartAnalysisPage() {
    analysisCont.innerHTML = "";
    for (let index = 0; index < 3; index++) {
        var newCard = renderAnalysis(gameAnalysis[index]);
        analysisCont.append(newCard);
    }
}

onStartAnalysisPage();

function showAllAnalysis() { 

    if (!isCardsShowing) {
        analysisCont.innerHTML = "";
        gameAnalysis.forEach(review => {
            var newCard = renderAnalysis(review);
            analysisCont.append(newCard);
        });
        showAnalyisButton.textContent = "Hide Reviews";
    }
    else{
        onStartAnalysisPage();
        showAnalyisButton.textContent = "Show All Reviews"
    }
    
    isCardsShowing = !isCardsShowing;
}

function renderAnalysis(review) {
    
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