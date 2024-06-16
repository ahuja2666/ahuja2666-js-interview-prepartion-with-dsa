const breadthFirstTraversal = (root) => {
  if (root === null) {
    return 'root should be valid'
  }

  const values = []
  const queue = []

  while (queue.length > 0) {
    const node = queue.shift() // point of optimization
    values.push(node.key)

    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }

  return values

}