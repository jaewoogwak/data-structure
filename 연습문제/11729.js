let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let sol = [];
let count = 0;
// hanoi(원판 번호, 시작, 보조, 목표)
function hanoi(n, start, tmp, end) {
  if (n == 1) {
    sol.push([start, end]);
    count += 1;
    return;
  }
  hanoi(n - 1, start, end, tmp);
  sol.push([start, end]);
  count += 1;
  hanoi(n - 1, tmp, start, end);
}

hanoi(N, 1, 2, 3);
console.log(count);
let answer = sol.map((ele) => ele.join(" ")).join("\n");
console.log(answer);
