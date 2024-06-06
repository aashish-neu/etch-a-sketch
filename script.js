// global variables declaration
const gridButton = document.querySelector("#change-grid-button");
const mainBody = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const cellWidth = 5;

// to create 16*16 grid of square divs

gridButton.addEventListener("click", changeGrid);



// list of functions
// make grid
function makeGrid(num) {

    gridButton.textContent = "Change Grid";

    deleteGrid();

    let gridNumber = num;

    // figure out cell sizing

    let cellHeight = 500 / num;
    let cellWidth = 500 / num;

    mainContainer.style.minWidth = "500px";
    mainContainer.style.minHeight = "500px";

    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
           
            let currentDivision = document.createElement("div");
            currentDivision.classList.add = "each-cell";
            currentDivision.style.border = "1px solid darkblue";
            currentDivision.style.width = `${cellWidth}px`;
            currentDivision.style.height = `${cellHeight}px`;
            mainContainer.appendChild(currentDivision);

            // to create hover effect
            
            currentDivision.addEventListener("mouseover", () => {
                currentDivision.style.backgroundColor = "green";
            });
            currentDivision.addEventListener("mouseout", () => {
                currentDivision.style.backgroundColor = "red";
            })
        }
    }
}

function deleteGrid() {
    mainContainer.textContent = "";
}

function changeGrid() {

    gridNumber = Number(prompt("How many rows?"));
    makeGrid(gridNumber);
}