class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    const node = new Node(key)
    if (!this.root) {
      this.root = node
    } else {
      this.inserNode(this.root, node)
    }
  }

  inserNode(cuurentRootNode, node) {
    if (node.key < cuurentRootNode.key) {
      if (!cuurentRootNode.left) {
        cuurentRootNode.left = node
      } else {
        this.inserNode(cuurentRootNode.left, node)
      }
    } else {
      if (!cuurentRootNode.right) {
        cuurentRootNode.right = node
      } else {
        this.inserNode(cuurentRootNode.right, node)
      }
    }
  }

  delete(key) {
    this.root = deleteNode(this.root, key)
  }

  deleteNode(node, key) { // node --> cuurentRootNode
    if (!node) return null;

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key)
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key)
    } else {
      if (node.left === null && node.right === null) {
        return null
      } else if (node.left === null) {
        return node.right
      } else if (node.right === null) {
        return node.left
      } else {
        let tempNode = this.findMinNode(node.right)
        node.key = tempNode.key
        node.right = this.deleteNode(node, tempNode.key)
      }
    }
    return node
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left
    }
    return node
  }


}