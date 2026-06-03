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
const footer = document.querySelector("footer")

function renderSitemap()
{
    const sitemapContainer = document.createElement("ol")
    sitemapContainer.textContent = "Sitemap"
    sitemapContainer.classList.add("sitemapContainer")

    pages.forEach(page => {
        const newSiteItem = renderSitemapItems(page)
        sitemapContainer.append(newSiteItem)

    });
    
    footer.append(sitemapContainer);
}

function renderSitemapItems(page)
{
    const newListItem = document.createElement("li")
    const newLink = document.createElement("a");

    newLink.setAttribute("href", page.link);
    newLink.textContent = page.name;
    
    newListItem.append(newLink)


    return newListItem
}
function renderList(item)
{
    const newItem = document.createElement("li")
    newItem.innerHTML = item;
    
    return newItem
}

renderSitemap()

