// global variables declaration
const gridButton = document.querySelector("#change-grid-button");
const mainBody = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
let currentCellOpacity = 60;
// const cellWidth = 5;

// to create 16*16 grid of square divs

gridButton.addEventListener("click", changeGrid);



// list of functions
// make grid
function makeGrid(num) {

    gridButton.textContent = "Change Grid";

    deleteGrid();

    const gridNumber = num;

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
                // currentDivision.style.backgroundColor = getRandomColors(); working
                const newRandomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

                // let newOpacity = increaseOpacity();

                currentDivision.style.backgroundColor = `${newRandomColor}`;
                // console.log(increasedOpacity);
                console.log(newRandomColor);

                // currentDivision.style.opacity = `${currentCellOpacity + 100}%`

            })
        }
    }
}

function deleteGrid() {
    mainContainer.textContent = "";
}

function changeGrid() {

    gridNumber = Number(prompt("How many rows?"));
    if (gridNumber > 100) {
        alert("Above 100 not supported!!!");
        return 0;
    }
    makeGrid(gridNumber);
}


function getRandomColors () {
    const randomColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    // const randomColor = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
    console.log(randomColor);
    return randomColor;
}

function increaseOpacity() {
    let increasedOpacity = currentCellOpacity + 10;
    console.log(`Increased Opacity ${increasedOpacity}`);
    return increasedOpacity;
}















// auto start grid

makeGrid(16);