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
      needVisited = [...graph.AdjList.get(node), ...needVisited]; // 노드 방문하고 그 노드에 인접한 노드부터 리스트에 넣기
    }
  }
  return visited;
}
