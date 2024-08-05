// Get the container element
const grid = document.querySelector(".grid-container")

// Create a grid 16 x 16
let rows =  16;
let columns= 16;

// Loop to create grid items and append them to the container
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = j + 1;

    // Append the grid item to the container;
    grid.appendChild(gridItem);
  }
}
