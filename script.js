const gridSizeBtn = document.getElementById("grid-size-button");
const gridContainer = document.getElementById("grid-container");
const cells = document.getElementsByClassName("cell");


createGrid(16);

gridSizeBtn.addEventListener("click", getGridSize);

function ResetColor () {
    
}

function colorCells () {

const cellsArray = Array.from(cells);

cellsArray.forEach(cell => {
    
    cell.addEventListener("mouseenter", changeCell  = (event) => {
        console.log("change cell function was called", event);
        let cellColor = `rgba(0, 0, 0, ${cellOpacity/10})`; 

        event.target.style.backgroundColor = cellColor;
        let cellOpacity = event.target.style.backgroundColor.slice();
        console.log(cellOpacity)
        if (cellOpacity < 10){
            cellOpacity += 1;}

        
        console.log(event.target.style.backgroundColor);
    }   
)})
}

function getGridSize () {
    // cells.style.backgroundColor = "white";
    console.log("get grid size function was called. ")
    let gridSize = Number(prompt("Please enter the grid size: "));
    if (gridSize > 100) {
        gridSize = Number(prompt("Please enter a number between 1 and 100"))
    }
    
    return createGrid(gridSize);
}

function createGrid(gridSize) {
    console.log(
        "Create grid function was called"
    )
    gridContainer.innerHTML = ""; 
    const totalCells = gridSize * gridSize;

    const gridCellSize =( 450/ gridSize);
    const gridCellPadding = gridCellSize / 2;
    // console.log("grid size", gridSize);
    // console.log("totalCells", totalCells);
    // console.log("grid cell size", gridCellSize);
    // console.log("grid cell padding", gridCellPadding)
    const gridCell = `<div class="cell" style="height: ${gridCellSize}px; width:${gridCellSize}px; padding: ${gridCellPadding}px;"></div>`;
    // console.log(gridCell)

    
    
   
    console.log(typeof gridSize, gridSize)
    let gridHTML = ``;
    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++) {
            gridHTML += gridCell;
            // console.log("j", j);
        }
         
        //  console.log("i", i);
     }
    
     gridContainer.innerHTML = gridHTML;
     colorCells()
}

