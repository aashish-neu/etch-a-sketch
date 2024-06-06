// global variables declaration
const breakLine = document.createElement("br");
const changeGridButton = document.querySelector("#change-grid-button");
const mainBody = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");

// to create 16*16 grid of square divs

changeGridButton.addEventListener("click", changeGrid);



// list of functions
// make grid
function makeGrid(num) {

    changeGridButton.textContent = "Change Grid";

    deleteGrid();

    // to clear previously created grid

    let gridNumber = num;

    // to find out max width
    const maximumWidth = gridNumber * 30 + 30;
    console.log(maximumWidth);
    console.log(typeof(maximumWidth));

    // const mainContainer = document.createElement("div");
    // mainContainer.classList.add = "main-container";
    mainContainer.style.maxWidth = `${maximumWidth}px`;
    // mainContainer.style.backgroundColor = "blue";
    // mainContainer.style.display = "flex";
    // mainContainer.style.flexWrap = "wrap";
    // mainBody.appendChild(mainContainer);

    // to remove previously created grids inside main container

    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
           
            let currentDivision = document.createElement("div");
            currentDivision.classList.add = "each-division";
            currentDivision.style.border = "1px solid orange";
            //main container width

            // mainContainer.style.maxWidth = "maxWidth";



            currentDivision.style.minWidth = "30px";
            currentDivision.style.minHeight = "30px";
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