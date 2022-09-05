let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

function BFS(graph, startNode) {
  let visited = []; // 방문 완료한 노드
  let needVisited = []; // 아직 방문하지 않은 노드

  needVisited.push(startNode); // 첫 노드부터 탐색 시작
  while (needVisited.length !== 0) {
    // 방문하지 않은 노드가 있다면
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      // 해당 노드가 방문한 노드가 아니라면
      visited.push(node);
      needVisited = [...needVisited, ...graph.AdjList.get(node)];
    }
  }
  return visited;
}
function DFS(graph, startNode) {
  let visited = []; // 방문 완료한 노드
  let needVisited = []; // 아직 방문하지 않은 노드

  needVisited.push(startNode); // 첫 노드부터 탐색 시작
  while (needVisited.length !== 0) {
    // 방문하지 않은 노드가 있다면
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      // 해당 노드가 방문한 노드가 아니라면
      visited.push(node);
      needVisited = [...graph.AdjList.get(node), ...needVisited];
    }
  }
  return visited;
}
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices; // 정점의 갯수
    this.AdjList = new Map(); // 정점의 인접 리스트 저장
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    // 정점 v에 대한 인접 리스트를 얻고, 리스트에 정점 v에 연결된 정점 w를 넣음. (인접 리스트에 추가)
    this.AdjList.get(v).push(w);

    // 무방향 그래프일경우 v->w, w->v 모두 해주기
    this.AdjList.get(w).push(v);
  }
  sorting() {
    for (let i = 1; i <= parseInt(N); i++) {
      g.AdjList.set(
        i,
        g.AdjList.get(i).sort((a, b) => a - b)
      );
    }
  }
}

let [N, M, V] = input[0].split(" ").map((el) => parseInt(el));
let g = new Graph(N);

for (let i = 1; i < N + 1; i++) {
  g.addVertex(i);
}
// 간선 추가
for (let m = 0; m < M; m++) {
  let [i, j] = input[m + 1].split(" ");
  g.addEdge(parseInt(i), parseInt(j));
}
g.sorting();

console.log(DFS(g, V).join(" "));
console.log(BFS(g, V).join(" "));
