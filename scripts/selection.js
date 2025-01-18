async function selectionSort() {
  const elements = document.querySelectorAll(".sort");

  for (let i = 0; i < elements.length; i++) {
    let minIndex = i;
    elements[i].style.background = "red"; // Highlight the current minimum

    for (let j = i + 1; j < elements.length; j++) {
      elements[j].style.background = "red"; // Highlight the current comparison

      if (
        parseInt(elements[j].style.height) <
        parseInt(elements[minIndex].style.height)
      ) {
        // Reset the previous minimum's background
        if (minIndex !== i) {
          elements[minIndex].style.background = "yellow";
        }
        minIndex = j; // Update the new minimum index
      } else {
        elements[j].style.background = "yellow"; // Reset background for non-minimum elements
      }
    }

    await delay(time); // Introduce a delay for visualization
    swap(elements[i], elements[minIndex]); // Swap the current element with the minimum

    // Reset the background colors after swapping
    elements[minIndex].style.background = "yellow";
    elements[i].style.background = "green"; // Mark the sorted element
  }
}

// Attach event listener to the "Selection Sort" button
document
  .getElementById("selection")
  .addEventListener("click", async function () {
    disableSizeSlider();
    disableSortingButtons();
    await selectionSort(); // Call the sorting function
    enableSizeSlider();
    enableSortingButtons();
  });
