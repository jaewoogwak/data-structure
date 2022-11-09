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


def FindNbr(adjNode, visited, vertex=vertex):
    nbr= []
    # 방문하지 않은 노드만 스택에 넣음
    for j in range(0, len(adjNode)): 
            if vertex[j] not in visited and adjNode[j] == 1:
                nbr.append(vertex[j])
    return nbr

# 연결 성분의 갯수
def find_connected_component(adjMat):
    visited = set()
    colorList = []

    for vtx in vertex:
        if vtx not in visited:
            color = dfs_cc(adjMat, [], vtx, visited)
            colorList.append(color)

    return len(colorList)


def dfs_cc(adjMat, color, vtx, visited):
    if vtx not in visited:
        visited.add(vtx)
        color.append(vtx)
        idx = vertex.index(vtx)
        nbr = FindNbr(adjMat[idx], visited)
        for v in nbr:
            dfs_cc(adjMat, color, v, visited)

    return color


def find_bridges(adj, vertex):
    found_bridges = []
    for i in range(0, len(adj)):
        for j in range(0, len(adj[i])):
            if i != j and adj[i][j] == 1:
                prevState = find_connected_component(adjMat)
                adj[i][j] = 0
                adj[j][i] = 0
                nextState = find_connected_component(adjMat)
                # print(vertex[i], vertex[j], prevState, nextState)

                bridge1 = (vertex[i], vertex[j])
                bridge2 = (vertex[j], vertex[i])
                if prevState != nextState and (bridge1 not in found_bridges) and (bridge2 not in found_bridges):
                    print('Bridge{}:'.format(len(found_bridges) + 1), '(',vertex[i], ',',vertex[j],')')
                    found_bridges.append((vertex[i], vertex[j]))
                adj[i][j] = 1
                adj[j][i] = 1


# 만약 연결을 끊고 연결 성분 검사를 했을 때 컴포넌트 갯수가 증가했다면? 해당 간선이 브릿지다.
find_bridges(adjMat, vertex)
