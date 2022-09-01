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
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
}

let g = new Graph(6);
console.log(g);

let vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}
// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

console.log(g);

console.log(g.AdjList.get("A"));
