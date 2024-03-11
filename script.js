const gridSizeBtn = document.getElementById("grid-size-button");
const gridContainer = document.getElementById("grid-container");
const gridCell = `<div class="cell"></div>`
gridSizeBtn.addEventListener("click", createGrid);



function createGrid() {
    const gridSize = Number(prompt("Please enter the grid size: "));
    console.log(
        "Create grid function was called"
    )
    console.log(typeof gridSize, gridSize)
    for (let i = 0; i < gridSize; i++){
        gridContainer.innerHTML += gridCell + "test" + Number(i+1);
        console.log(i);
    }
    
}