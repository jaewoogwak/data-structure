let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cnt = 1;
function DFS(graph, node) {
  if(visited[node] == 0) {
    visited[node] = cnt;
    cnt += 1;
    graph.get(node).forEach(n => {
      DFS(g, n)
    })
  }
  
}
let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let R = parseInt(input[0].split(" ")[2]);
let g = new Map();
let visited = new Array(N + 1).fill(0);

// 정점 추가
for (let i = 1; i <= N; i++) {
  g.set(i, [])
  
}

// 간선 추가
for (let m = 0; m < M; m++) {
  let [i, j] = input[m + 1].split(" ").map((el) => parseInt(el));
  g.get(i).push(parseInt(j));
  g.get(j).push(parseInt(i))
}

// 내림차순 정렬
new Array(N).fill().map((el, idx) => idx + 1).forEach((node,idx) => {
  g.set(idx+1, g.get(idx+1).sort((a,b) => b-a))
})

DFS(g, R)
console.log(visited.slice(1).join('\n'))

