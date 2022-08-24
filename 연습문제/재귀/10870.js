let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);

const answer = Fibonacci(N);
console.log(answer);

function Fibonacci(num) {
  // 기저조건
  if (num == 0) return 0;
  else if (num == 1) return 1;
  // 재귀조건
  else return Fibonacci(num - 1) + Fibonacci(num - 2);
}
