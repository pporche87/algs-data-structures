// class Stack {
//   constructor() {
//     this.storage = '';
//     this.size = 0;
//   }

//   push(val) {
//     if (typeof val !== 'string') {
//       return console.log('Invalid property')
//     }

//     this.storage += `${val}***`;
//     this.size++;
//   }

//   pop() {
//     for (let i = 0; i < this.storage.length; i++) {
//       if (this.storage[i] === '*') {
//         this.size--;
//         this.storage = this.storage.slice(i + 3);
//         break;
//       }
//     }
//   }

//   size() {
//     return this.size;
//   }
// }

// const myWeeklyMenu = new Stack();

// myWeeklyMenu.push('RedBeans');
// myWeeklyMenu.push('Rice');
// myWeeklyMenu.push('Jambalaya');
// myWeeklyMenu.push('Gumbo');
// myWeeklyMenu.push('Greens');
// myWeeklyMenu.push(4);

// console.log(myWeeklyMenu.storage);
// console.log(myWeeklyMenu.size);

// myWeeklyMenu.pop();
// myWeeklyMenu.pop();

// console.log(myWeeklyMenu.storage);
// console.log(myWeeklyMenu.size);


/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.

*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack

*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?

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
    const element = this.storage[--this.count];
    delete this.storage[this.count];
    return element;
   }

   myPeek() {
     return this.storage[this.count-1];
   }

   myCount() {
     return this.count;
   }

   myContains(value) {
     for (let i = 0; i < this.count; i++) {
       if (this.storage[i] === value) {
         return true;
       }
     }
     return false;
   }

   myUntil(value) {
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

//  const myStack = new Stack(10);
//  console.log(myStack.push(2))
//  console.log(myStack.push(5))
//  console.log(myStack.push(7))
//  console.log(myStack.push(3))
//  console.log(myStack.push(6))
//  console.log(myStack.push(9))
//  console.log(myStack.until(7))

 /*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */

 class StackWithMin {
   constructor(capacity) {
     this.capacity = capacity;
     this.storage = {};
     this.count = 0;
     this.min = new Stack(capacity);
   }

   push(value) {
     if (this.count < this.capacity) {
       if (this.min.myPeek() < value) {
         this.min.myPush(this.min.myPeek());
       } else {
         this.min.myPush(value);
       }
       this.storage[this.count++] = value;
       return this.count;
     }
     return 'Max capacity already reached. Remove element before adding a new one.'
   }

   pop() {
     this.min.myPop();
     const element = this.storage[--this.count];
     delete this.storage[this.count];
     if (this.count < 0) {
       this.count = 0;
     }
   }

   peek() {
    return this.storage[this.count-1]
   }

   myCount() {
    return this.count;
   }

   myMin() {
     return this.min.myPeek();
   }
 }

 const myStackWithMin = new StackWithMin(5);

 myStackWithMin.push(1);
 myStackWithMin.push(2);
 myStackWithMin.push(3);
 myStackWithMin.push(4);
 myStackWithMin.push(5);
 console.log(myStackWithMin.storage);
 myStackWithMin.pop()
 myStackWithMin.pop()
 myStackWithMin.pop()
 console.log(myStackWithMin.storage);
 console.log(myStackWithMin.peek())
 console.log(myStackWithMin.myCount())
 console.log(myStackWithMin.myMin())