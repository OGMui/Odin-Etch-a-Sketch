const gridSizeBtn = document.getElementById("grid-size-button");
const gridContainer = document.getElementById("grid-container");

gridSizeBtn.addEventListener("click", createGrid);

function createGrid() {
    const gridSize = prompt("Please enter the grid size: ");
    console.log(
        "Create grid function was called"
    )
}