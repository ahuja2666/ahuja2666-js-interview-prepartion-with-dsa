//breadth

const treeSumWithBreadthFirstSearch = (root) => {
  if (root === null) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

// depth

const treeSum = (root) => {
  if (root === null) {
    return 0;
  }

  return root.key + treeSum(root.left) + treeSum(root.right);
};
