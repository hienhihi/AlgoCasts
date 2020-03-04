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
    // if (!this.head) {
    //   return null
    // }
    // let current = this.head;
    // let last = current.data;
    // while (current) {
    //   last = current;
    //   current = current.next;
    // }
    // return last;
    return this.getAt(this.size() -1);
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
  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let current = this.head;
    if (!this.head) {
      return null
    }
    while (current) {
      if (counter === index) {
        return current;
      }
      current = current.next;
      counter++;
    }
  }
  removeAt(index) {
    if (!this.head) {
      return
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.getAt(index-1);
    if (!current || !current.next) {
      return;
    } 
    current.next = current.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      this.head.next = null;
      return
    } 
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    } 
    let previous = this.getAt(index -1) || this.getLast();
    let node = new Node(data, previous.next);
    // newNode.next = this.getAt(index+1);
    previous.next = node;

  }
  forEach(func) {
    //apply this function in everysingle item
    let current = this.head;
    while (current) {
      func(current);
      current = current.next;
    }
    return;
  }

}

// const list = new LinkedList();
// list.head = new Node(10);
// console.log(list);

module.exports = { Node, LinkedList };
