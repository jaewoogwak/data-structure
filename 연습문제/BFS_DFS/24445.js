let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cnt = 1;
function BFS(graph, startNode) {
  let needVisited = [];
  needVisited.push(startNode);
  visited[startNode] = cnt;
  cnt +=1;
  while(needVisited.length != 0) {
    const node = needVisited.shift();
    graph.get(node).forEach(n => {
      if(visited[n] == 0) {
        visited[n] = cnt;
        cnt +=1;
        needVisited.push(n);
      }
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

BFS(g, R)
console.log(visited.slice(1).join('\n'))

