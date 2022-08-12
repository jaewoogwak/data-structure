class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}
class LinkedList {
  constructor(element) {
    this.head = new Node("head");
  }
  show() {
    let arr = [];
    let current = this.head;
    while (current.next !== null) {
      arr.push(current.next.element);
      current = current.next;
    }
    return arr;
  }
  find(cur) {
    let currNode = this.head;
    while (currNode.element !== cur.element) {
      currNode = currNode.next;
    }
    return cur;
  }
  insert(element, cur) {
    // cur 왼쪽에 요소 추가
    let newNode = new Node(element);
    let current = cur;
    if (current.next == null) {
      newNode.next = null;
      newNode.prev = current;
      current.next = newNode;
    } else {
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
    return newNode;
  }
  remove(cur) {
    let current = cur;
    let out;
    if (current.element == "head") return cur;
    else {
      if (current.next !== null) {
        out = current.prev;
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
      } else {
        out = current.prev;
        current.prev.next = null;
        current.prev = null;
      }
      return out;
    }
  }

  moveLeft(cur) {
    if (cur.prev == null) {
      return cur;
    } else {
      return cur.prev;
    }
  }
  moveRight(cur) {
    if (!cur.next) return cur;
    else return cur.next;
  }
}
