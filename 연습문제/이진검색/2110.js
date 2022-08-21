let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let C = parseInt(input[0].split(" ")[1]);
let arr = [];
for (let i = 1; i < N + 1; i++) {
  arr.push(parseInt(input[i]));
}
arr = arr.sort((a, b) => a - b);
let s = 1;
let e = arr[arr.length - 1] - s;
// 공유기 놓는 간격 정하기
while (s <= e) {
  let cnt = 1;
  let x = arr[0];
  let mid = Math.floor((s + e) / 2);
  for (const pos of arr) {
    if (pos - x >= mid) {
      cnt += 1;
      x = pos;
    }
  }
  if (cnt >= C) s = mid + 1;
  else e = mid - 1;
}
console.log(e);
