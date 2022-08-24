let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);

const answer = Factorial(N);
console.log(answer);

function Factorial(num) {
  // 재귀조건
  if (num == 0) return 1;
  if (num > 1) return num * Factorial(num - 1);
  // 기저조건
  else return num;
}
