// Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in reverse order
// (don't actually reverse the array itself)
function printReverse(arr) {
  return arr.reverse();
}
console.log(printReverse([1, 2, 3]));

// version 2:
function printReverse2(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  console.log("*****************");
}
printReverse2([1, 2, 3]);
printReverse2(["a", "b", "c"]);

// write a function isUniform() which takes an array as an argument
// and returns true is all elements in the array are identical

function isUniform(arr) {
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      res = false;
    } else {
      res = true;
    }
  }
  return res;
}
console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([1, 1, 1, 2]));
console.log(isUniform(["a", "a", "a", "a"]));
console.log(isUniform(["a", "a", "a", "b"]));

// Write a function sumArray() that eccepts an array of numbers
// and returns the sum of all numbers in the array

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

// Write a function max() that accepts an array of numbers
// and returns th maximum numer in the array
function max(numArr) {
  return Math.max(...numArr);
}
console.log("Maximum number of an array (first version): " + max([1, 2, 3, -5, 100]));

// VERSION 2:
function max(arr) {
  let maxNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log("Maximum number of an array: " + max([1, 2, 3, -5, 100]));
console.log("Maximum number of an array: " + max([1, 2, 3, -5, 100, 2, -100, 500]));
