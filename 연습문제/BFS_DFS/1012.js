let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// console.log(visited)
const moveRow = [-1, 1, 0, 0]
const moveCol = [0, 0, -1, 1]

let count = 0;

function DFS(N, M, row, col, arr, visited) {
  // console.log(row, col)
  visited[row][col] = true;
  count++;
  let nextRow = 0;
  let nextCol = 0;
  for(let i =0; i<4; i++) {
    nextRow = row + moveRow[i];
    nextCol = col + moveCol[i];
    if(0 <= nextRow && nextRow < N && 0 <= nextCol && nextCol < M) {
      if(visited[nextRow][nextCol] == false && arr[nextRow][nextCol] == 1) {
        DFS(N, M, nextRow, nextCol, arr, visited);
      } 
    }
  }
  return count;
}

function DFSAll(N, M, arr, visited) {
  for(let i =0; i<N; i++) {
    for(let j =0; j<M; j++) {
      if(arr[i][j] ==1 && visited[i][j] == false) {
        // console.log("new start")
        count =0;
        let cnt = DFS(N, M, i,j, arr, visited)
        components_size.push(cnt);
        // console.log('size', cnt)
        cnt = 0
        // console.log("-----")
      }
    }
  }
  console.log(components_size.length)
  components_size = []
}


let T = parseInt(input[0].split(" ")[0]); // T
let components_size = []
let tmp_K = 0;
for(let t =0; t<T; t++) {
  let M = parseInt(input[1 + tmp_K].split(" ")[0]); // 가로
  let N = parseInt(input[1 + tmp_K].split(" ")[1]); // 세로
  let K = parseInt(input[1 + tmp_K].split(" ")[2]); // K

  let visited = new Array(N).fill(false).map(el => new Array(M).fill(false))
  let arr = new Array(N).fill(0).map(el => new Array(M).fill(0))
  // console.log(M,N,K,)

  for(let i = 2 + tmp_K; i < 2+ tmp_K + K; i++) {
    let row = parseInt(input[i].split(' ')[1])
    let col = parseInt(input[i].split(' ')[0])
    // console.log(row, col, arr[row][col])
    arr[row][col] = 1;
  }
  tmp_K += K + 1
  DFSAll(N, M, arr, visited)
}
