function BinarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return 1;
    } else if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
}
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//let N = parseInt(input[0]);
let A = input[1].split(" ").map((a) => parseInt(a));

//let M = parseInt(input[2]);
let mrr = input[3].split(" ").map((a) => parseInt(a));
let arr = A.sort((a, b) => a - b);
let sol = [];
mrr.forEach((num) => {
  sol.push(BinarySearch(arr, num));
});

console.log(sol.join(" "));
