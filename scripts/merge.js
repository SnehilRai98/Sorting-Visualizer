async function merge(elements, low, mid, high) {
  const n1 = mid - low + 1; // Size of left subarray
  const n2 = high - mid; // Size of right subarray

  // Create temporary arrays
  const left = new Array(n1);
  const right = new Array(n2);

  // Copy data to temporary arrays and highlight them
  for (let i = 0; i < n1; i++) {
    await delay(time);
    elements[low + i].style.background = "orange"; // Highlight left subarray
    left[i] = elements[low + i].style.height;
  }

  for (let j = 0; j < n2; j++) {
    await delay(time);
    elements[mid + 1 + j].style.background = "red"; // Highlight right subarray
    right[j] = elements[mid + 1 + j].style.height;
  }

  let i = 0,
    j = 0,
    k = low;

  // Merge the two subarrays
  while (i < n1 && j < n2) {
    await delay(time);
    if (parseInt(left[i]) <= parseInt(right[j])) {
      elements[k].style.height = left[i];
      elements[k].style.background =
        n1 + n2 === elements.length ? "green" : "lightgreen";
      i++;
    } else {
      elements[k].style.height = right[j];
      elements[k].style.background =
        n1 + n2 === elements.length ? "green" : "lightgreen";
      j++;
    }
    k++;
  }

  // Copy any remaining elements of left subarray
  while (i < n1) {
    await delay(time);
    elements[k].style.height = left[i];
    elements[k].style.background =
      n1 + n2 === elements.length ? "green" : "lightgreen";
    i++;
    k++;
  }

  // Copy any remaining elements of right subarray
  while (j < n2) {
    await delay(time);
    elements[k].style.height = right[j];
    elements[k].style.background =
      n1 + n2 === elements.length ? "green" : "lightgreen";
    j++;
    k++;
  }
}

async function mergeSort(elements, left, right) {
  if (left >= right) {
    return; // Base case: single element
  }

  const mid = left + Math.floor((right - left) / 2);
  await mergeSort(elements, left, mid); // Recursively sort left subarray
  await mergeSort(elements, mid + 1, right); // Recursively sort right subarray
  await merge(elements, left, mid, right); // Merge the sorted subarrays
}

document.getElementById("merge").addEventListener("click", async function () {
  const elements = document.querySelectorAll(".sort");
  const left = 0;
  const right = elements.length - 1;

  disableSizeSlider();
  disableSortingButtons();
  await mergeSort(elements, left, right);
  enableSizeSlider();
  enableSortingButtons();
});
