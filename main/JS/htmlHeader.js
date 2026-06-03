pages = [

    {
        name: "home",
        link: "../index.html"
    },
    {
        name : "contact",
        link: "../HTML/contact.html"
    },
    {
        name : "games",
        link: "../HTML/games.html"
    },
    {
        name: "projects",
        link: "../HTML/projects.html"
    },
    {
        name: "reviews",
        link: "../HTML/reviews.html"
    },
]
const header = document.querySelector("header")


function renderBar(page)
{
    const newLink = document.createElement("a");

    newLink.setAttribute("href", page.link);
    newLink.textContent = page.name;
    return newLink
}

pages.forEach(page => {
    const link = renderBar(page)
    header.append(link)
});

// console.log(header)