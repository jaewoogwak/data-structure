let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let components_size = []
let N = parseInt(input[0]);
let arr = [];
let visited = new Array(N).fill(false).map(el => new Array(N).fill(false));

// console.log(visited)
const moveRow = [0, 0, 1, -1]
const moveCol = [1, -1, 0, 0]

for (let m = 0; m < N; m++) {
  arr.push(input[m+1].split('').map(el => parseInt(el)))
}
// console.log(arr)
let count = 0;

function DFS(row, col) {
  visited[row][col] = true;
  // console.log(row, col)
  count++;
  let nextRow = 0;
  let nextCol = 0;
  for(let i =0; i<4; i++) {
    nextRow = row + moveRow[i];
    nextCol = col + moveCol[i];
    if(0 <= nextRow && nextRow < N && 0 <= nextCol && nextCol < N) {
      if(visited[nextRow][nextCol] == false && arr[nextRow][nextCol] == 1) {
        DFS(nextRow, nextCol);
      } 
    }
  }
}

function DFSAll() {
  for(let i =0; i<N; i++) {
    for(let j =0; j<N; j++) {
      if(arr[i][j] ==1 && visited[i][j] == false) {
        DFS(i,j)
        components_size.push(count);
        count = 0;
        // console.log("-----")
      }
    }
  }
}
// console.log(arr, visited)
DFSAll()
let answer = [components_size.length, ...components_size.sort((a,b) => a- b)]
console.log(answer.join('\n'))
