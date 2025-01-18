async function insertionSort() {
  const elements = document.querySelectorAll(".sort");

  // Mark the first element as sorted
  elements[0].style.background = "green";

  for (let i = 1; i < elements.length; i++) {
    elements[i].style.background = "red"; // Highlight the current element being sorted
    let key = elements[i].style.height;
    let j = i - 1;

    // Shift elements of the sorted part of the array
    while (j >= 0 && parseInt(key) < parseInt(elements[j].style.height)) {
      elements[j].style.background = "red"; // Highlight comparison
      elements[j + 1].style.height = elements[j].style.height;
      j--;

      await delay(time);

      // Re-color all sorted elements
      for (let k = 0; k <= i; k++) {
        elements[k].style.background = "green";
      }
    }

    // Insert the key in the correct position
    elements[j + 1].style.height = key;

    // Mark the current element as sorted
    elements[i].style.background = "green";
  }
}

// Attach event listener to the "Insertion Sort" button
document
  .getElementById("insertion")
  .addEventListener("click", async function () {
    disableSizeSlider();
    disableSortingButtons();
    await insertionSort();
    enableSizeSlider();
    enableSortingButtons();
  });
