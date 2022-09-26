class Tree {
  constructor(N) {
    this.N = N; // 정점의 갯수
    this.parent = {}
    this.lc = {}
    this.rc=  {}
  }

  // 트리 생성
  setChildren(p, l, r) {
    if(l != '.') this.parent[l] = p;
    if(r != '.') this.parent[r] = p;
    this.lc[p] = l;
    this.rc[p] = r;
  }
  
  // 전위 순회 : 루왼오
  preorder(root) {
    // answer.push(root)
    console.log(root)
    if(this.lc[root] != '.') this.preorder(this.lc[root])
    if(this.rc[root] != '.') this.preorder(this.rc[root])
  }

  // 중위 순회 : 왼루오
  inorder(root) {
    if(this.lc[root] != '.') this.inorder(this.lc[root])
    // answer.push(root);
    console.log(root)
    if(this.rc[root] != '.') this.inorder(this.rc[root])
  }

  // 후위 순회 : 왼오루
  postorder(root) {
    if(this.lc[root] != '.') this.postorder(this.lc[root])
    if(this.rc[root] != '.') this.postorder(this.rc[root])
    // answer.push(root)
    console.log(root)
  }
}
