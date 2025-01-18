async function lomutoPartition(elements, low, high) {
  let i = low - 1; // Partition index

  // Highlight the pivot element
  elements[high].style.background = "red";

  for (let j = low; j <= high - 1; j++) {
    elements[j].style.background = "brown"; // Highlight the current element being compared
    await delay(time);

    if (
      parseInt(elements[j].style.height) < parseInt(elements[high].style.height)
    ) {
      if (i >= low) {
        elements[i].style.background = "yellow"; // Reset the background of the previous "i"
      }
      i++;
      swap(elements[i], elements[j]);
      elements[i].style.background = "orange"; // Highlight the swapped element
      await delay(time);
    }

    elements[j].style.background = "yellow"; // Reset the current element's background
  }

  if (i >= low) {
    elements[i].style.background = "yellow"; // Reset the last "i" element's background
  }

  await delay(time);
  swap(elements[i + 1], elements[high]); // Place the pivot in its correct position

  elements[high].style.background = "yellow"; // Reset the pivot's background
  await delay(time);

  return i + 1; // Return the partition index
}

async function quickSort(elements, low, high) {
  if (low < high) {
    const pivotIndex = await lomutoPartition(elements, low, high); // Partition the array
    await quickSort(elements, low, pivotIndex - 1); // Recursively sort the left subarray
    await quickSort(elements, pivotIndex + 1, high); // Recursively sort the right subarray
  } else {
    return; // Base case: no more recursion when low >= high
  }
}

// Event listener for Quick Sort
document.getElementById("quick").addEventListener("click", async function () {
  const elements = document.querySelectorAll(".sort");
  const low = 0;
  const high = elements.length - 1;

  disableSizeSlider();
  disableSortingButtons();

  await quickSort(elements, low, high);

  // Mark all elements as sorted (green)
  for (let i = 0; i <= high; i++) {
    await delay(time);
    elements[i].style.background = "green";
  }

  enableSizeSlider();
  enableSortingButtons();
});
