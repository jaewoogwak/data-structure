let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let K = parseInt(input[0].split(" ")[0]);
let N = parseInt(input[0].split(" ")[1]);
let arr = [];
for (let i = 1; i < K + 1; i++) {
  arr.push(parseInt(input[i]));
}
arr = arr.sort((a, b) => b - a);
let start = 1;
let end = arr[0];
let count = 0;
let maxLen = 0;
while (start <= end) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= Math.floor((start + end) / 2)) {
      for (
        let j = 0;
        j < Math.floor(arr[i] / Math.floor((start + end) / 2));
        j++
      ) {
        count += 1;
      }
    }
  }
  if (count >= N) {
    maxLen = Math.max(maxLen, Math.floor((start + end) / 2));
    start = Math.floor((start + end) / 2) + 1;
  } else end = Math.floor((start + end) / 2) - 1;
}
console.log(maxLen);

// 1~최대값-1로 범위 지정
// 이진검색 시작
// 중간값부터 찾기 시작해서 잘라낸 값을 배열에 넣음
// 배열 길이가 N인 경우 스탑.
