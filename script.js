const gridSizeBtn = document.getElementById("grid-size-button");
const gridContainer = document.getElementById("grid-container");



createGrid(16);

gridSizeBtn.addEventListener("click", getGridSize);

function getGridSize () {
    console.log("get grid size function was called. ")
    gridSize = Number(prompt("Please enter the grid size: "));
    return createGrid(gridSize);
}

function createGrid(gridSize) {
    console.log(
        "Create grid function was called"
    )
    gridContainer.innerHTML = ""; 
    const totalCells = gridSize * gridSize;

    const gridCellSize = Math.floor( 450/ gridSize);
    console.log("grid size", gridSize);
    console.log("totalCells", totalCells);
    console.log("grid cell size", gridCellSize);
    const gridCell = `<div class="cell" height="${gridCellSize}" width="${gridCellSize}">g</div>`;
    console.log(gridCell)

    
    
   
    console.log(typeof gridSize, gridSize)
    for (let i = 0; i < totalCells; i++){
         gridContainer.innerHTML += gridCell;
         console.log(i);
     }
    
}