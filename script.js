// Get the container element
const grid = document.querySelector(".grid-container")

//Get the create-button element
const createButton = document.querySelector(".create-button");

// Get user input on click event create button
createButton.addEventListener("click", () => {
  getGridSize();
})

function getGridSize(){
  gridSize = prompt("Input grid size(maximum 100):");
  if (gridSize > 100){
   alert("Please input a number below 101");
   getGridSize();
  }else if (gridSize != null){
   grid.replaceChildren();
   createGrid(gridSize);
  }
}

// Create grid
function createGrid(gridSize){
  let rows =  gridSize;
  let columns= gridSize;
  
  // Loop to create grid items and append them to the container
  for (let i = 0; i < rows; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    
    for (let j = 0; j < columns; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      
      // Append the grid item to the container;
      gridRow.appendChild(gridItem);
    }
    grid.appendChild(gridRow);
  }
  const gridItems = document.querySelectorAll(".grid-item");
  
  // Set grid items to active when hovered
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover", (event) => {
    event.target.classList.add("active");
    /*random color challenge
    //const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
    */
   
    event.target.style.opacity -= "-0.1";
    if (event.target.style.opacity >= 1) {
      event.target.style.backgroundColor = "black";
    }
    })
  })
}

createGrid(16);
