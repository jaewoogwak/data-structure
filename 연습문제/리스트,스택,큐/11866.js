let input = require("fs").readFileSync("예제.txt").toString().split(" ");
const N = parseInt(input[0]);
const K = parseInt(input[1]);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}
let out = [];
let idx = K - 1;
while (arr.length > 0) {
  let man = arr.splice(idx, 1);
  out.push(man[0]);
  idx = (idx + K - 1) % arr.length;
}

console.log(`<${out.join(", ")}>`);
