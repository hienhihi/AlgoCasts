// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = []
  };
  add(data) {
    this.children.push(new Node(data))
  }
  remove(data) {
    this.children = this.children.filter(node => { //on this filter function, we removed all item that doesn't sastify the condition
      return node.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(cb) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children) //take all the elements out of here and push them in 1 by 1
      cb(node)
    }
  }
  traverseDF(cb) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      cb(node)
    }
  }

}
//needs to add children by node somehow. so instead of new tree I can do new node
module.exports = { Tree, Node };
