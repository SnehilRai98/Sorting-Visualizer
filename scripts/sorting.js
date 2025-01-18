// Initial configurations
let time = 100; // Default speed of sorting
let arrSize = 60; // Default number of bars

// Update array size based on slider input
const arrSizer = document.querySelector("#sizer");
arrSizer.addEventListener("input", () =>
  generateBars(parseInt(arrSizer.value))
);

// Update sorting speed based on slider input
const sortSpeed = document.querySelector("#speed");
sortSpeed.addEventListener("input", () => {
  time = 245 - parseInt(sortSpeed.value);
});

// Generate bars dynamically
function generateBars(noBar = arrSize) {
  // Clear existing bars
  const barContainer = document.getElementById("bar");
  barContainer.innerHTML = "";

  // Create new bars
  const bars = [];
  for (let i = 0; i < noBar; i++) {
    bars.push(Math.floor(Math.random() * 400) + 1);
  }

  // Add bars to the container
  bars.forEach((height) => {
    const bar = document.createElement("div");
    bar.classList.add("sort", "baritem");
    bar.style.height = `${height}px`;
    barContainer.appendChild(bar);
  });
}

// Create a new array when the "New Array" button is clicked
document.getElementById("newarr").addEventListener("click", () => {
  generateBars(parseInt(arrSizer.value));
  enableSortingButtons();
  enableSizeSlider();
});

// Swap heights of two elements
function swap(ele1, ele2) {
  [ele1.style.height, ele2.style.height] = [
    ele2.style.height,
    ele1.style.height,
  ];
}

// Introduce delay during sorting visualization
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Disable all sorting buttons
function disableSortingButtons() {
  const buttons = document.querySelectorAll(
    "#bubble, #insertion, #merge, #quick, #selection, #radix, #shell"
  );
  buttons.forEach((btn) => (btn.disabled = true));
}

// Enable all sorting buttons
function enableSortingButtons() {
  const buttons = document.querySelectorAll(
    "#bubble, #insertion, #merge, #quick, #selection, #radix, #shell"
  );
  buttons.forEach((btn) => (btn.disabled = false));
}

// Disable the size slider
function disableSizeSlider() {
  document.getElementById("sizer").disabled = true;
}

// Enable the size slider
function enableSizeSlider() {
  document.getElementById("sizer").disabled = false;
}

// Event Listeners for new sorting algorithms
document.getElementById("radix").addEventListener("click", async () => {
  const bars = [...document.querySelectorAll(".baritem")].map((bar) =>
    parseInt(bar.style.height)
  );
  disableSortingButtons();

  // Call the radixSort function from radix.js
  await radixSort(bars); // Assuming radixSort is imported or globally available

  enableSortingButtons();
});

document.getElementById("shell").addEventListener("click", async () => {
  const bars = [...document.querySelectorAll(".baritem")].map((bar) =>
    parseInt(bar.style.height)
  );
  disableSortingButtons();

  // Call the shellSort function from shell.js
  await shellSort(bars); // Assuming shellSort is imported or globally available

  enableSortingButtons();
});

// Initial bar generation
generateBars();
