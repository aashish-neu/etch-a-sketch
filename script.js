// to create 16*16 grid of square divs
const mainContainer = document.querySelector(".main-container");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let currentDivision = document.createElement("div");
        currentDivision.classList.add = "each-division";
        currentDivision.style.backgroundColor = "red";
        currentDivision.style.borderColor = "blue";
        currentDivision.textContent = `${i} * ${j}`;
        currentDivision.style.minWidth = "50px";
        currentDivision.style.minHeight = "50px";
        mainContainer.appendChild(currentDivision);
    }
}