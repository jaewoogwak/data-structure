let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function BFS() {
  let needVisited = []
  needVisited.push(1)
  visited[1] = true;
  let level = 0;
  // 탐색 시작
  while (needVisited.length > 0) {
    let size = needVisited.length;
    // console.log('--- level ', level, '---');
    for(let q = 0; q < size; q++) {
      let currPos = needVisited.shift();
      // console.log('currPos', currPos);
      for (let i = 0; i < 6; i++) {
        let nextPos = currPos + movePos[i];
        if(move[nextPos] !== -1) {
          // 뱀 또는 사다리와 연결되어 있으면
          nextPos = move[nextPos];
        } 
        if(!visited[nextPos]) {
          visited[nextPos] = true;
          needVisited.push(nextPos)
        }
      }
    }
    level++;
    if(visited[100] == true) return level;  
  }
}
let N = parseInt(input[0].split(" ")[0]); // 사다리의 수
let M = parseInt(input[0].split(" ")[1]); // 뱀의 수
const movePos = [1,2,3,4,5,6];
let count = 0;
let arr = [];
const move = {};

for(let i =1; i<=100; i++) {
  move[i] = -1
}
for(let i = 1; i < N + M + 1; i++) {
  move[parseInt(input[i].split(' ')[0])] = parseInt(input[i].split(' ')[1]);
}

let visited = new Array(101).fill(false)
// console.log(move, visited)
console.log(BFS())
