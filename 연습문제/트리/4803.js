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


let next = 0;
let ver =0;
let ed =0;
let cnt = 1;

while(1) {
  let N = parseInt(input[next].split(' ')[0]);
  let M = parseInt(input[next].split(' ')[1]);
  if(N == 0 && M == 0) break;
  next += M + 1;

  let g = new Map();
  let T = new Tree(N)
  // 간선 만들기
  for(let i =1; i<=N; i++) {
    g.set(i, [])
  }
  // 정점 만들기
  for(let i = next - M; i< next; i++) {
    g.get(parseInt(input[i].split(' ')[0])).push(parseInt(input[i].split(' ')[1]))
    g.get(parseInt(input[i].split(' ')[1])).push(parseInt(input[i].split(' ')[0]))
  }
  // console.log(g);
  let visited = {}

  for(let i =1; i<=N; i++) {
    visited[i] = false
  }

  treeCount = dfsAll(g, T, visited)

  if(treeCount == 0) {
    console.log(`Case ${cnt}: No trees.`)
  } else if(treeCount == 1) {
    console.log(`Case ${cnt}: There is one tree.`)
  } else {
    console.log(`Case ${cnt}: A forest of ${treeCount} trees.`)
  }
  cnt++;
}

function DFS(node, g, T, visited) {
  visited[node] = true;
  // console.log('방문', node);
  ver++;
  for(let i =0; i<g.get(node).length; i++) {
    let next = g.get(node)[i]
    // console.log('edge', node, next)
    ed++;
    if(!visited[next]) {
      DFS(next, g, T, visited)
    }
  }
}

// DFS로 탐방
function dfsAll(g, T, visited) {
  let tree =0;
  for(let i =1; i<=g.size; i++) {
    ver = 0;
    ed = 0;
    if(!visited[i]) {
      // console.log("new DFS --") 
      DFS(i, g, T, visited)
      // console.log('ver', ver, 'ed', ed/ 2)
      if(ver == parseInt(ed /2) + 1) tree++;
    }
  }
  return tree;
}
