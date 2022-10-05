import copy
import queue

MAZE_SIZE = 8

maze = [
    ['1','1','1','1','1','1','1','1'],
    ['e','0','1','0','0','0','1','1'],
    ['1','0','1','0','1','0','0','1'],
    ['1','0','1','0','1','1','1','1'],
    ['1','0','0','0','0','1','1','1'],
    ['1','0','1','1','0','0','0','1'],
    ['1','0','1','1','1','1','0','x'],
    ['1','1','1','1','1','1','1','1'],
]

def isValidPos(x,y, maze):
    if x< 0 or y<0 or x>=MAZE_SIZE or y >= MAZE_SIZE:
        return False
    else: return maze[y][x] == '0' or maze[y][x] == 'x'

dx = [0,0,-1,1]
dy = [-1,1, 0,0]


def DFS(maze):
    maze = copy.deepcopy(maze)
    stk = queue.LifoQueue()
    stk.put((0,1))
    print("DFS: ")

    while not stk.empty():
        here = stk.get()
        print(here, end="->")
        x,y = here
        if(maze[y][x] == 'x'): return True
        else:
            maze[y][x] = '.'
            for i in range(0,4):
                if isValidPos(x + dx[i], y + dy[i], maze): stk.put((x + dx[i], y + dy[i]))
            print(' 현재 스택 : ', stk.queue)

    return False


def BFS(maze):
    maze = copy.deepcopy(maze)
    q = queue.Queue()
    q.put((0,1))
    print("BFS: ")

    while not q.empty():
        here = q.get()
        print(here, end="->")
        x,y = here
        if(maze[y][x] == 'x'): return True
        else:
            maze[y][x] = '.'
            for i in range(0,4):
                if isValidPos(x + dx[i], y + dy[i], maze): q.put((x + dx[i], y + dy[i]))
    
    return False


result_BFS = BFS(maze)
if result_BFS: print(" --> 미로탐색 성공")
else: print(" --> 미로탐색 실패")

result_DFS = DFS(maze)
if result_DFS: print(" --> 미로탐색 성공")
else: print(" --> 미로탐색 실패")
