let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
let arr = input[1].split(" ").map((a) => parseInt(a));
const M = parseInt(input[2]);
const numbers = input[3].split(" ").map((a) => parseInt(a));

arr = arr.sort((a, b) => a - b);
let sol = [];

const ob = {};
arr.forEach((a) => (ob[a] = 0));
arr.forEach((a) => {
  ob[a] = ob[a] + 1;
});

numbers.forEach((num) => {
  if (ob[num] === undefined) {
    sol.push(0);
  } else sol.push(ob[num]);
});
console.log(sol.join(" "));
