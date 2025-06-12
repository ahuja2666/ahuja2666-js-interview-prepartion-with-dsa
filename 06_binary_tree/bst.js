class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new BSTNode(key);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(currentRoot, node) {
    if (currentRoot.key > node.key) {
      if (!currentRoot.left) {
        currentRoot.left = node;
      } else {
        this.insertNode(currentRoot.left, node);
      }
    } else {
      if (!currentRoot.right) {
        currentRoot.right = node;
      } else {
        this.insertNode(currentRoot.right, node);
      }
    }
  }

  delete(key) {
    this.root = deleteNode(this.root, key);
  }

  deleteNode(currentRoot, key) {
    if (!currentRoot) return null;

    if (key < currentRoot.key) {
      currentRoot.left = this.deleteNode(currentRoot.left, key);
    } else if (key > currentRoot.key) {
      currentRoot.right = this.deleteNode(currentRoot.right, key);
    } else {
      if (!currentRoot.left && !currentRoot.right) {
        // if node to be deleted is leaf
        return null;
      } else if (!node.left) {
        // if node to be deleted have 1 child only
        return node.right;
      } else if (!node.right) {
        // if node to be deleted have 1 child only
        return node.left;
      } else {
        // replace node with the smallest value in right subtree(in order successor)
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key); // deleting that smallest value node in right subtree

        // in order Predecessor
        // let tempNode = this.findMaxNode(node.left)
        // node.key = tempNode.key
        // node.left = this.deleteNode(node.left, tempNode.key)
      }
    }

    return node;
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  findMaxNode(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder(currentRoot, result) {
    if (currentRoot) {
      //  result.push(currentRoot.key) // pre order
      this.inOrder(currentRoot.left, result);
      result.push(currentRoot.key); // in order
      this.inOrder(currentRoot.right, result);
      //  result.push(currentRoot.key) // post order
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(9);
bst.insert(19);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(30);
bst.insert(10);

// console.log(bst.inOrderTraversal())
const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  // return [root.key, leftValues, rightValues]
  // [a, [b, c, d], [e, f, g]]
  console.log(
    JSON.stringify([
      { key: root.key },
      { left: [...leftValues] },
      { right: [...rightValues] },
    ])
  );
  return [root.key, ...leftValues, ...rightValues];
  // [a, b, c, d, e, f, g]
};

console.log(recursiveDepthFirstTraversal(bst.root));
