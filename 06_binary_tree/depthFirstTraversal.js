const depthFirstTraversal = (root) => {
  if (!root) {
    return "root should be valid";
  }
  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};

const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  // return [root.key, leftValues, rightValues]
  // [a, [b, c, d], [e, f, g]]
  console.log(JSON.stringify([root.key, ...leftValues, ...rightValues]));
  return [root.key, ...leftValues, ...rightValues];
  // [a, b, c, d, e, f, g]
};
