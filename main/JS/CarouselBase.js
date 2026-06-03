function createCarousel(list, selectors) {
  let currentIndex_ = 0;

  const prevButton_ = document.querySelector(selectors.prev);
  const nextButton_ = document.querySelector(selectors.next);
  const card_ = document.querySelector(selectors.card);

  function render(index) {
    const item_ = list[index];

    card_.innerHTML = `
    <img class="gameImage" src="${item_.img}">
    <div class="classContainer infoArea  " >
        <h4> ${item_.gameTitle} </h4>
        <h5> ${item_.role}</h5>
        <p> ${item_.description}</p>
        <a href="${item_.link} target="_blank">See it here!</a>
    </div>
    `;
  }

  nextButton_.addEventListener("click", () => {
    currentIndex_ = (currentIndex_ + 1) % list.length;
    render(currentIndex_);
  });

  prevButton_.addEventListener("click", () => {
    currentIndex_ = (currentIndex_ - 1 + list.length) % list.length;
    render(currentIndex_);
  });

  render(currentIndex_);
}