//push, pop, peek, isEmpty , size, clear, contains, reverse, printStack

class Stack {
  constructor() {
    this.stack = []
  }

  push(data) {
    this.stack.push(data)
  }

  pop() {
    this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
  isEmpty() {
    return this.stack.length === 0
  }

  size() {
    return this.stack.length
  }

  clear() {
    this.stack = []
  }

  contains(data) {
    return this.stack.includes(data)
  }

  reverse() {
    this.stack.reverse()
  }

  printStack() {
    return this.stack.join("\n")
  }

}

const myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.printStack())