// Introduce delay during sorting visualization
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Function to perform Radix Sort and visualize the process
async function radixSort(arr) {
  let max = Math.max(...arr);
  let exp = 1;
  const n = arr.length;
  const elements = document.querySelectorAll(".sort");

  while (Math.floor(max / exp) > 0) {
    let output = new Array(n);
    let count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
      count[Math.floor(arr[i] / exp) % 10]++;
      elements[i].style.background = "yellow"; // Highlight the current element being processed
    }

    // Update count[] to store actual positions of digits
    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array (apply sorting logic)
    for (let i = n - 1; i >= 0; i--) {
      output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
      count[Math.floor(arr[i] / exp) % 10]--;
    }

    // Copy the output array to arr[] and visualize
    for (let i = 0; i < n; i++) {
      arr[i] = output[i];
      elements[i].style.height = `${arr[i]}px`; // Update element heights based on sorted array
      elements[i].style.background = "orange"; // Highlight bar being updated
      await delay(time); // Apply dynamic delay to slow down the process
    }

    // Reset all elements to light green after each pass to show completed processing
    for (let i = 0; i < n; i++) {
      if (elements[i].style.background !== "red") {
        elements[i].style.background = "lightgreen"; // Completed elements should be light green
      }
    }

    exp *= 10; // Move to the next digit place (e.g., ones -> tens -> hundreds)
  }

  // After sorting is done, turn the whole array green
  for (let i = 0; i < n; i++) {
    elements[i].style.background = "green"; // Final sorted state (green)
  }
}
