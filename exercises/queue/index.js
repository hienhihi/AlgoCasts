// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() { // to create the datat structure, here is array
    this.data = [];
  }
  add(val) { //add to the front
    this.data.unshift(val);
  }
  remove(val) {
    return this.data.pop(); //return from the back
  }
}

module.exports = Queue;
