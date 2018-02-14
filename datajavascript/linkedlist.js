class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) {
      return null;
    } else {
      const val = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return val;
    }
  }

  removeTail() {
    if (!this.tail) {
      return null;
    } else {
      const val = this.tail.value;
      this.tail = this.tail.prev;

      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

      return val;
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return value;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  indexOf(value) {
    let index = 0;
    let currentNode = this.head;
    const result = [];

    while(currentNode) {
      if (currentNode.value === value) {
        result.push(index);
      }

      currentNode = currentNode.next;
      index++;
    }

    if (result.length > 0) {
      return result;
    }

    return null;
  }
}

const LL = new LinkedList();

LL.addToHead(8);
LL.addToHead(3);
LL.addToHead(5);
LL.addToHead(3);

console.log(LL.indexOf(10));