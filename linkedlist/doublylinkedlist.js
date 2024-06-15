class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertAtBegining(data) {
    const node = new Node(data, this.head)
    if (this.head) {
      this.head.prev = node
    }
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
  }

  insertAtEnd(data) {
    const node = new Node(data, null, this.tail)
    if (this.tail) {
      this.tail.next = node
    }
    this.tail = node
    if (!this.head) {
      this.head = node
    }
  }

  insertAfter(prevNode, data) {
    if (!prevNode) return 'invalid prevNode'

    const node = new Node(data, prevNode.next, prevNode)

    if (prevNode.next) {
      prevNode.next.prev = node
    }
    prevNode.next = node

    if (!node.next) {
      this.tail = node
    }

  }

  deletedFirstNode() {
    if (!this.head) return 'no elemets avaliable'

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }


  }

  deleteLastNode() {
    if (!this.tail) return 'no elemets avaliable'
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
  }

  reverse() {
    if (!this.head) return 'list is empty'
    let current = this.head
    let temp = null

    while (current) {
      temp = current.prev
      current.prev = current.next
      current.next = temp

      current = current.prev
    }

    if (temp) {
      // console.log(temp, "ttd temp")
      // console.log(temp.prev, "ttd")
      this.tail = this.head
      this.head = temp.prev
    }
    // i found this approch better // is it fine?
    // let tempHead = this.head;
    //         this.head = this.tail;
    //         this.tail = tempHead;
  }

}

const dll = new DoublyLinkedList()
dll.insertAtBegining(4)
dll.insertAtBegining(3)
dll.insertAtBegining(2)
// console.log(dll)
dll.reverse()
// console.log(dll)
console.log(dll)