class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertAtHead(data) {
    const node = new Node(data, this.head)
    this.head = node
  }

  insertAtEnd(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
      return
    }
    let last = this.head
    while (last.next) {
      last = last.next
    }
    last.next = node
  }

  insertAfter(prevNode, data) {
    if (!prevNode) {
      return 'prev node is needed'
    }
    const node = new Node(data, prevNode.next)
    prevNode.next = node
  }

  deleteFirstNode() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }

  deleteLastNode() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null
    }
    let secondLastNode = this.head
    while (secondLastNode.next.next) {
      secondLastNode = secondLastNode.next
    }
    secondLastNode.next = null
  }

  deleteByKey(key) {
    if (!this.head) {
      return 'linked list is empty'
    }
    if (this.head.data === key) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next) {
      if (current.next.data === key) {
        current.next = current.next.next
      }
      current = current.next
    }
    return `no elements found with key :${key}`

  }

  search(key) {
    let current = this.head
    while (current) {
      if (current.data === key) {
        return
      }
      current = current.next
    }
    return false
  }

  printLinkList() {
    const values = []
    let current = this.head
    while (current) {
      values.push(current.data)
      current = current.next
    }
    return values
  }

  reverse() {
    let current = this.head
    let prev = null
    let next = null
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }

}

const ll = new LinkedList()
ll.insertAtHead(5)
// ll.insertAtHead(6)
console.log(ll)