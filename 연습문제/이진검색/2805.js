let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let arr = input[1]
  .split(" ")
  .map((a) => parseInt(a))
  .sort((a, b) => b - a);

let start = 0;
let end = arr[0];
let mid;
let sum = 0;
let sol = [];
while (start <= end) {
  mid = Math.floor((start + end) / 2);
  sum = 0;
  for (let i = 0; i < N; i++) {
    sum += arr[i] - mid > 0 ? arr[i] - mid : 0;
  }
  if (sum === M) {
    console.log(mid);
    return mid;
  } else if (sum < M) {
    end = mid - 1;
  } else {
    sol.push(mid);
    start = mid + 1;
  }
}
sol = sol.sort((a, b) => b - a);
console.log(sol[0]);
