// global variables declaration
const breakLine = document.createElement("br");

// to create 16*16 grid of square divs
const mainContainer = document.querySelector(".main-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        
        let currentDivision = document.createElement("div");
        currentDivision.classList.add = "each-division";
        currentDivision.style.border = "1px solid black";
        // currentDivision.style.backgroundColor = "red";
        // currentDivision.textContent = `${i}`;
        currentDivision.style.minWidth = "30px";
        currentDivision.style.minHeight = "30px";
        mainContainer.appendChild(currentDivision);
        // to create hover effect
        currentDivision.addEventListener("mouseover", () => {
            currentDivision.style.backgroundColor = "black";
        });
        currentDivision.addEventListener("mouseout", () => {
            currentDivision.style.backgroundColor = "blue";
        })
    }
}

function changeColor () {
    currentDivision.style.backgroundColor = "black";
}

