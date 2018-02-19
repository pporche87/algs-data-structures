/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.

*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue

*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
 */

// class Queue {
//   constructor(capacity) {
//     this.capacity = capacity || Infinity;
//     this.storage = new Object();
//     this.head = 0;
//     this.tail = 0;
//   }

//   enqueue(value) {
//     if (this.count() < this.capacity) {
//       this.storage[this.tail++] = value;
//       return this.count();
//     }
//     return 'Max capacity of queue filled'
//   }
//   // time complexity O(1) 
  

//   dequeue() {
//     const element = this.storage[this.head];
//     delete this.storage[this.head];
//     if (this.head < this.tail) {
//       this.head++;
//     }
//     return element;
//   }
//   // time complexity O(1) 

//   peek() {
//     return this.storage[this.head];
//   }
//   // time complexity O(1)

//   count() {
//     return this.tail - this.head;
//   }
//   // time complexity O(1)
// }

// const myQueue = new Queue(3);

// console.log(myQueue.enqueue('hello'));
// console.log(myQueue.enqueue('goodbye'));
// console.log(myQueue.dequeue());
// console.log(myQueue);
// console.log(myQueue.peek());
// console.log(myQueue.count());
/*
*** Exercises:
1. Implement a queue using two stacks.
2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
 */

 class Stack {
   constructor(capacity) {
     this.capacity = capacity;
     this.storage = {};
     this.count = 0;
   }

   myPush(value) {
     if (this.count < this.capacity) {
       this.storage[++this.count] = value;
       return this.count;
     }
     return 'Max capacity already reached. Remove element before adding a new one.'
   }

   myPop() {
    const element = this.storage[this.count];
    delete this.storage[this.count--];
    return element;
   }

   peek() {
     return this.storage[this.count];
   }

   myCount() {
     return this.count;
   }

   contains(value) {
     for (let i = 0; i < this.count; i++) {
       if (this.storage[i] === value) {
         return true;
       }
     }
     return false;
   }

   until(value) {
     let numPops = 0;
     for (let i = 0; i < this.count; i++) {
        numPops++;
        if (this.storage[i] === value) {
          return numPops
        }
     }
     return numPops;
   }

 }

class QFS {
  constructor(capacity) {
    this.inStack = new Stack(capacity);
    this.outStack = new Stack(capacity);
  }

  enqueue(val) {
    this.inStack.myPush(val);
    return this.inStack.myCount();
  }

  transferStacks() {
    while(this.inStack.myCount() > 0) {
      this.outStack.myPush(this.inStack.myPop());
    }
    return;
  }

  dequeue() {
    if (this.outStack.myCount() === 0) this.transferStacks();
    return this.outStack.myPop();
  }

  myCount() {
    return this.inStack.myCount() + this.outStack.myCount();
  }

  peek() {
    if (this.outStack.myCount() === 0) this.transferStacks();
    return this.outStack.peek();
  }

}

// var myQueue_TwoStacks = new QFS(3);
// console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
// console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
// console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
// console.log(myQueue_TwoStacks.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue_TwoStacks.dequeue(), 'should be a');
// console.log(myQueue_TwoStacks.myCount(), 'should be 2');
// console.log(myQueue_TwoStacks.peek(), 'should be b');
// console.log(myQueue_TwoStacks.myCount(), 'should be 2');

class DoubleEndedQueue {
  constructor() {
    this.storage = [];
    this.count = 0;
  }

  enqueueLeft(value) {
    this.storage.unshift(value);
    return this.count++;
  }

  enqueueRight(value) {
    this.storage.push(value);
    return this.count++;
  }

  dequeueLeft() {
    const element = this.storage.shift();
    this.count--;
    return element;
  }

  dequeueRight() {
    const element = this.storage.pop();
    this.count--;
    return element;
  }

  myCount() {
    return this.count;
  }
}

class DoubleEndedQueueWithObj {
  constructor() {
    this.storage = new Object();
    this.head = 0;
    this.tail = 0;
  }

  enqueueLeft(value) {
    this.storage[this.tail++] = value;
  }

  enqueueRight(value) {
    this.storage[this.tail++] = value;
  }

  dequeueLeft() {
    const element = this.storage[--this.tail];
    delete this.storage[this.tail];
    return element;
  }

  dequeueRight() {
    const element = this.storage[this.head];
    delete this.storage[this.head];
    if (this.head < this.tail) this.head++;
    return element;
  }

  myCount() {
    return this.tail - this.head;
  }
}

const DblEndQue = new DoubleEndedQueueWithObj();

DblEndQue.enqueueLeft(1)
DblEndQue.enqueueLeft(2)
DblEndQue.enqueueLeft(3)
DblEndQue.enqueueLeft(4)
DblEndQue.enqueueLeft(5)
console.log(DblEndQue.storage);
console.log(DblEndQue.dequeueRight())
console.log(DblEndQue.storage)
DblEndQue.enqueueRight(6)
DblEndQue.enqueueRight(7)
console.log(DblEndQue.storage)
console.log(DblEndQue.dequeueLeft());
console.log(DblEndQue.storage);
console.log(DblEndQue.myCount())