class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  // 연결 리스트 요소 출력
  show() {
    let arr = [];
    let current = this.head;
    while (current.next !== null) {
      arr.push(current.next.element);
      current = current.next;
    }
    return arr;
  }
  // 노드 찾기
  find(item) {
    let currentNode = this.head;
    while (currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  // 연결리스트 맨 뒤에 새로운 노드 삽입
  append(newElement) {
    let newNode = new Node(newElement);
    let current = this.head; // 시작 노드
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
  // 연결리스트 중간에 새로운 노드 삽입
  insert(newElement, prevNodeItem) {
    let newNode = new Node(newElement);
    let current = this.find(prevNodeItem); // 삽입할 위치의 노드 찾기
    newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로운 노드가 가리키기
    current.next = newNode; // 찾은 노드는 이제부터 새로운 노드 가리킴
  }
  // 연결리스트에서 노드 삭제
  remove(deleteItem) {
    let current = this.head;
    while (current.next !== null && current.next.element !== deleteItem) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}
