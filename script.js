const highlight = document.createElement("span");
const triggers = document.querySelectorAll("a");


highlight.classList.add("highlight");
document.body.append(highlight);


function highlightLink() {
    // console.log(this);
    const linkCoords = this.getBoundingClientRect();  //this will give me the height,width,top,bottom for the element selected
    console.log(linkCoords);

    const coordinates = {
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,   //this will add top/bottom to links when scrolled 
        left : linkCoords.left + window.scrollX  // this will add right/left if there is a slider 
    
    } 



    highlight.style.width = `${coordinates.width}px `;   //giving reference of height and width 
    highlight.style.height = `${coordinates.height}px `; //to heighlight to work accordingly 

    highlight.style.transform = `translate(${coordinates.left}px,${coordinates.top}px  `
}

triggers.forEach(a => a.addEventListener("mouseenter",highlightLink  ) )

// console.log(triggers);

