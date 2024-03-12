const gridSizeBtn = document.getElementById("grid-size-button");
const resetBtn = document.getElementById("reset-button");
const rainbowBtn = document.getElementById("rainbow-button")
const gridContainer = document.getElementById("grid-container");
const cells = document.getElementsByClassName("cell");
let rainbowColor = false;

createGrid(16);

gridSizeBtn.addEventListener("click", getGridSize);
resetBtn.addEventListener("click", ResetColor)
rainbowBtn.addEventListener("click", () => {
    rainbowColor = !rainbowColor
    console.log(rainbowColor)
    rainbowBtn.style.backgroundColor = rainbowColor ? "green" : "red";
} )

function ResetColor () {
    const cellsArray = Array.from(cells);
    cellsArray.forEach(cell => target.backgroundColor = "white")
}

function colorCells () {

const cellsArray = Array.from(cells);

cellsArray.forEach(cell => {
    
    cell.addEventListener("mouseenter", changeCell  = (event) => {
        console.log("change cell function was called", event);
        const cell = event.target;
        console.log(cell.backgroundColor);
        let currentColor = cell.style.backgroundColor || "rgb(0, 0, 0)";
        console.log(cell.backgroundColor);

        console.log(currentColor);
        currentColor = currentColor.replace(/\s/g, '');
        console.log(currentColor)
        const rgbValues = currentColor.match(/\d+/g);
        console.log(rgbValues);
        console.log(currentColor.slice(-2, -1));
        rainbowColor === false 
        ? color = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
        : color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`


        cell.style.backgroundColor = color; 

        let currentOpacity = parseFloat(cell.style.opacity) || 0;
        currentOpacity += 0.1;
        const newOpacity = currentOpacity;
        cell.style.opacity = newOpacity;
        
        // let cellColor = `rgba(0, 0, 0, ${cellOpacity/10})`; 

        // event.target.style.backgroundColor = cellColor;
        // let cellOpacity = event.target.style.backgroundColor.slice();
        // console.log(cellOpacity)
        // if (cellOpacity < 10){
        //     cellOpacity += 1;}

        
        // console.log(event.target.style.backgroundColor);
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

