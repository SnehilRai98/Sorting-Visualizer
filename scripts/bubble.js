async function bubbleSort() {
  const elements = document.querySelectorAll(".sort");

  for (let i = 0; i < elements.length - 1; i++) {
    for (let j = 0; j < elements.length - i - 1; j++) {
      elements[j].style.background = "red"; // Highlight the current pair being compared
      elements[j + 1].style.background = "red";

      if (
        parseInt(elements[j].style.height) >
        parseInt(elements[j + 1].style.height)
      ) {
        await delay(time);
        swap(elements[j], elements[j + 1]); // Swap if the current element is larger
      }

      elements[j].style.background = "yellow"; // Reset the background after comparison
      elements[j + 1].style.background = "yellow";
    }

    // Mark the last element in the current pass as sorted
    elements[elements.length - i - 1].style.background = "green";
  }

  // Mark the first element as sorted
  elements[0].style.background = "green";
}

// Attach event listener to the "Bubble Sort" button
document.getElementById("bubble").addEventListener("click", async function () {
  disableSizeSlider();
  disableSortingButtons();
  await bubbleSort();
  enableSizeSlider();
  enableSortingButtons();
});
