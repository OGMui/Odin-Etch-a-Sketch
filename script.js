const gridSizeBtn = document.getElementById("grid-size-button");
const gridContainer = document.getElementById("grid-container");
const cell = document.getElementById("cell");


createGrid(16);

gridSizeBtn.addEventListener("click", getGridSize);
cell.addEventListener("mouseenter", () => {
    console.log(MouseEvent);
});

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
    const gridCellPadding = gridCellSize / 2;
    console.log("grid size", gridSize);
    console.log("totalCells", totalCells);
    console.log("grid cell size", gridCellSize);
    console.log("grid cell padding", gridCellPadding)
    const gridCell = `<div class="cell" style="height: ${gridCellSize}px; width:${gridCellSize}px; padding: ${gridCellPadding}px;"></div>`;
    console.log(gridCell)

    
    
   
    console.log(typeof gridSize, gridSize)
    
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++) {
            gridContainer.innerHTML += gridCell;
            console.log("j", j);
        }
         
         console.log("i", i);
     }
    
}

