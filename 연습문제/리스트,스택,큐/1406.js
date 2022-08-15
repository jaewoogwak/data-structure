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
    //let current = this.find(cur);
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
    //let current = this.find(cur);
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

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let list = new LinkedList("head");
const count = parseInt(input[1]);
let str = input[0];
let cur = list.head;
str.split("").forEach((s) => {
  cur = list.insert(s, cur);
});

for (let i = 2; i < count + 2; i++) {
  let cmd = input[i][0];
  switch (cmd) {
    case "L":
      //console.log("커서를 왼쪽으로 한 칸 옮김");
      cur = list.moveLeft(cur);
      break;
    case "D":
      //console.log("커서를 오른쪽으로 한 칸 옮김");
      cur = list.moveRight(cur);
      break;
    case "B":
      //console.log("커서 왼쪽 문자 삭제");
      cur = list.remove(cur);
      break;
    case "P":
      //console.log("문자 추가", input[i][2]);
      cur = list.insert(input[i][2], cur);
      break;
  }
}
console.log(list.show().join(""));
