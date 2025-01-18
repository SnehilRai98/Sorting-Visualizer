// Function to perform Shell Sort and visualize the process
async function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  const elements = document.querySelectorAll(".sort");

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;
      elements[j].style.background = "orange"; // Highlight current element being compared

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        elements[j].style.height = `${arr[j]}px`;
        elements[j].style.background = "red"; // Highlight element being swapped
        await delayWithDynamicSpeed(); // Use the dynamic delay based on the current slider value
        j -= gap;
      }
      arr[j] = temp;
      elements[j].style.height = `${arr[j]}px`;
    }

    // Slow down the visualization of each gap iteration
    await delayWithDynamicSpeed();

    // Reset color to light green after each pass
    for (let i = 0; i < n; i++) {
      if (elements[i].style.background !== "red") {
        elements[i].style.background = "lightgreen"; // Keep light green for in-progress elements
      }
    }

    gap = Math.floor(gap / 2);
  }

  // After sorting is done, turn the whole array green
  for (let i = 0; i < n; i++) {
    elements[i].style.background = "green"; // Final sorted state (green)
  }
}

// Delay function that dynamically adjusts the delay based on the current slider value
async function delayWithDynamicSpeed() {
  const speedSliderValue = parseInt(document.getElementById("speed").value);
  const delayTime = 245 - speedSliderValue; // Adjust the delay time based on slider value
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

// Event listener for Shell Sort
document.getElementById("shell").addEventListener("click", async function () {
  const elements = document.querySelectorAll(".sort");
  const bars = [...elements].map((bar) =>
    parseInt(bar.style.height.replace("px", ""))
  );

  disableSizeSlider();
  disableSortingButtons();
  await shellSort(bars); // Pass the array to shellSort, delay handled inside the sorting process
  enableSortingButtons();
  enableSizeSlider();
});
