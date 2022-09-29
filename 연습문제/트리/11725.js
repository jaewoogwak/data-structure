class Tree {
  constructor(N) {
    this.parent = new Array(N+1).fill(-1);
  }
  
  setParent(child, parent) {
    this.parent[child] = parent
  }
}

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);

let g = new Map();
let T = new Tree(N)
// 그래프 정점 만들기
for(let i =1; i<=N; i++) {
  g.set(i, [])
}

// 그래프 간선 연결
for(let i =1; i<N; i++) {
  g.get(parseInt(input[i].split(' ')[0])).push(parseInt(input[i].split(' ')[1]))
  g.get(parseInt(input[i].split(' ')[1])).push(parseInt(input[i].split(' ')[0]))
}

let visited = {}

for(let i =1; i<=N; i++) {
  visited[i] = false
}

// BFS로 탐방
function BFS(node) {
  let needVisited = []
  needVisited.push(node)

  while(needVisited.length != 0) {
    let curr = needVisited.shift();
    
    for(let i =0; i<g.get(curr).length; i++) {
      let next = g.get(curr)[i];
      if(!visited[next]) {
        visited[next] = true;
        needVisited.push(next)
        T.parent[next] = curr;
      }
    }
  }
}

BFS(1)

console.log(T.parent.slice(2).join('\n'))
