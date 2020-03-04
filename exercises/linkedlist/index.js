// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }
  size() {
    let current = this.head;
    let size = 0;
    while (current) {
      current = current.next;
      size++
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null
    }
    let current = this.head;
    let last = current.data;
    while (current) {
      last = current;
      current = current.next;
    }
    return last;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    let newHead = this.head.next;
    this.head = newHead;
  }
  removeLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null;
      return
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next
    }
    previous.next = null;
  }
}

// const list = new LinkedList();
// list.head = new Node(10);
// console.log(list);

module.exports = { Node, LinkedList };
