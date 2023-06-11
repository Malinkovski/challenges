class Cube {
  constructor(side) {
    this.side = side;
  }
  calculateArea = () => 6 * Math.pow(this.side, 2);
  calculatePerimeter = () => 12 * this.side;
}

function calculateCube() {
  const side = +prompt("Enter the size of the sides of the cube in cm:");
  const cube = new Cube(side);
  const info = document.getElementById("ex2");
  info.innerText = "The result is shown in the console.";

  console.log("Cube Area:", cube.calculateArea(), "cm");
  console.log("Cube Perimeter:", cube.calculatePerimeter(), "cm");
}

const cubeBtn = document.getElementById("cube-btn");
cubeBtn.addEventListener("click", calculateCube);
