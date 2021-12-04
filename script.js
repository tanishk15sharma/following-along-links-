const highlight = document.createElement("span");
const triggers = document.querySelectorAll("a");


highlight.classList.add("highlight");
document.body.append(highlight);


function highlightLink() {
    // console.log(this);
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    highlight.style.width = `${linkCoords.width}px `;
    highlight.style.height = `${linkCoords.height}px `;
}

triggers.forEach(a => a.addEventListener("mouseenter",highlightLink  ) )

// console.log(triggers);

