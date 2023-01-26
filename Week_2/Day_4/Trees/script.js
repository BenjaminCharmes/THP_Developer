const treeify = require("treeify");

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      let newNode = new Node(value);
      if(this.root === null) {
          this.root = newNode;
          return this;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(node, newNode) {
      if(newNode.value < node.value) {
          if(node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if(node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }


  find(value) {
    if(this.root === null) return false;
    return this.findNode(this.root, value);
  }

  findNode(node, value) {
      if(node === null) return false;
      if(value === node.value) return node;
      if(value < node.value) return this.findNode(node.left, value);
      else return this.findNode(node.right, value);
  }

  toString() {
    let tree = {};
    this.display(this.root, tree);
    return treeify.asTree(tree, true);
  }

  display(node, tree) {
    if(node === null) return;
    tree[node.value] = {};
    if(node.left) this.display(node.left, tree[node.value]);
    if(node.right) this.display(node.right, tree[node.value]);
  }

}

let bst = new BinarySearchTree();
let array = [4,2,9,5,1,8,3];
array.forEach(element => {
    bst.insert(element);
});

console.log(bst.toString());
