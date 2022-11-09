# 시작 노드를 스택에 넣는다
# 스택에서 노드를 빼고 인접 노드를 다 넣는다
# 인접노드를 빼면서 인접노드의 인접노드를 방문하지 않았다면 넣는다.
# 다시 뺀다.

import collections


vertex = ['A','B','C','D','E','F', 'G', 'H']
adjMat = [
    [0,1,1,0,0,0,0,0], # A
    [1,0,0,1,0,0,0,0], # B
    [1,0,0,1,1,0,0,0], # C
    [0,1,1,0,0,1,0,0], # D
    [0,0,1,0,0,0,1,1], # E
    [0,0,0,1,0,0,0,0], # F
    [0,0,0,0,1,0,0,1], # G
    [0,0,0,0,1,0,1,0], # H
] #  A B C D E F G H

def FindNbr(adjNode, visited, vertex):
    nbr= []
    # 방문하지 않은 노드만 스택에 넣음
    for j in range(0, len(adjNode)): 
            if vertex[j] not in visited and adjNode[j] == 1:
                nbr.append(vertex[j])
    return nbr

# 11.1 DFS
def dfs(adj, vertex, startIdx, visited=[]):
    start=vertex[startIdx]
    if start not in visited:
        visited.append(start)
        print(start, end=' ')
        adjNode = adj[startIdx] # 탐색할 노드의 인접 노드
        nbr = []
        # 방문하지 않은 노드만 스택에 넣음
        for j in range(0, len(adjNode)): 
            if vertex[j] not in visited and adjNode[j] == 1:
                nbr.append(vertex[j])

        for v in nbr:
            dfs(adj, vertex, vertex.index(v))
        

# 연결 성분의 갯수
def find_connected_component(graph):
    visited = set()
    colorList = []

    for vtx in graph:
        if vtx not in visited:
            color = dfs_cc(graph, [], vtx, visited)
            colorList.append(color)
    
    print("그래프 연결성분 개수 = %d" % len(colorList))
    print(colorList)


def dfs_cc(graph, color, vertex, visited):
    if vertex not in visited:
        visited.add(vertex)
        color.append(vertex)
        nbr = graph[vertex] - visited
        for v in nbr:
            dfs_cc(graph, color, v, visited)

    return color


# 11.2 BFS
def BFS(adjMat, vertex, startIdx):
    start = vertex[startIdx]
    visited = [start]
    queue = collections.deque([[start]])
    while queue:
        vtx = queue.popleft()
        print(vtx[0], end = ' ')
        idx = vertex.index(vtx[0])
        adjNode = adjMat[idx] # 탐색할 노드의 인접 노드
        nbr = FindNbr(adjNode, visited, vertex)
        for v in nbr:
            visited.append(v)
            queue.append(v)


# 11.3 신장 트리 찾기
def dfsST(adj, vertex, startIdx, visited=[]):
    start=vertex[startIdx]
    if start not in visited:
        visited.append(start)
        # print(start, end=' ')
        adjNode = adj[startIdx] # 탐색할 노드의 인접 노드
        nbr = []
        # 방문하지 않은 노드만 스택에 넣음
        for j in range(0, len(adjNode)): 
            if vertex[j] not in visited and adjNode[j] == 1:
                nbr.append(vertex[j])

        for u in nbr:
            if u not in visited:
                print("(",start, ",",u, ")",  end=' ')
                dfsST(adj, vertex, vertex.index(u), visited)
                

print('DFS :', end=' ')
dfs(adjMat, vertex, 0)
print()

print('BFS :', end = ' ')
BFS(adjMat, vertex, 0)
print()

print("Spanning Tree(DFS): ", end=' ')
dfsST(adjMat, vertex, 0)
