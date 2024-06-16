class Queue {
  constructor() {
    this.queue = []
  }
  // pushing the items in queue
  enqueue(data) {
    this.queue.push(data)
  }

  // removinbg items from queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"
    }
    return this.queue.shift()
  }

  isEmpty() {
    return this.queue.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty"
    }
    return this.queue[0]
  }

  size() {
    return this.queue.length
  }
  clear() {
    this.queue = []
  }

  printQueue() {
    return this.queue.join("\n")
  }

}

let myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(1)
myQueue.enqueue(3)
myQueue.dequeue()

console.log(myQueue.printQueue())