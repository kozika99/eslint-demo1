print("hello world");
console.log("hello world");

// eslint-disable-next-line no-unused-vars
let a = 5;
// eslint-disable-next-line no-unused-vars
let b = 3;

// Helper function to print to the screen.
function print(line) {
  const appDiv = document.getElementById("app");
  const div = document.createElement("div");
  div.innerHTML = line;
  appDiv.appendChild(div);
}
