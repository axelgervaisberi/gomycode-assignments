// Find Maximum and Minimum
function findMaximum(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMinimum(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Sum of Array
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Filter Array
function filterArray(arr, condition) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // If the element passes the condition function, push it to result
    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Quick Tests
console.log("--- Array Functions ---");
let numbers = [5, 12, 8, 130, 44];
console.log("Array:", numbers);
console.log("Max:", findMaximum(numbers));
console.log("Min:", findMinimum(numbers));
console.log("Sum:", sumOfArray(numbers));
console.log("Filter (numbers > 10):", filterArray(numbers, num => num > 10));
