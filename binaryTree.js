class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let firstNode = new Node(2, 4, 6);

console.log(firstNode.val)
