class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }

  depthFirstTraversal(cb, order) {
    if (order === 'pre-order') cb(this.value);
    if (this.left) this.left.depthFirstTraversal(cb, order);
    if (order ==='in-order') cb(this.value);
    if (this.right) this.right.depthFirstTraversal(cb, order);
    if (order === 'post-order') cb(this.value);
  }

  breadthFirstTraversal(cb) {
    const queue = [this];
    while (queue.length) {
      let treeNode = queue.shift();
      cb(treeNode);
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }

  getMinVal() {
    if (this.left) return this.left.getMinVal();
    else return this.value;
  }

  getMaxVal() {
    if (this.right) return this.right.getMaxVal();
    else return this.value;
  }
}

const bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

const log = val => console.log(val.value);

// bst.depthFirstTraversal(log, 'post-order');
// bst.breadthFirstTraversal(log)

console.log('MIN:', bst.getMinVal());
console.log('Max:', bst.getMaxVal());