class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    this.head = newNode;
  }

  insertAtend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
  }

  insertAfterGivenNode(prevNode, data) {
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }

  deleteFirstNode() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  deleteLastNode() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
    }
    let secondLastNode = this.head;
    while (secondLastNode.next.next) {
      secondLastNode = secondLastNode.next;
    }
    secondLastNode.next = null;
  }

  deleteByKey(key) {
    if (!this.head) {
      return "list is empty";
    }
    if (this.head.data === key) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === key) {
        current.next = current.next.next;
        return "key deleted";
      }
      current = current.next;
    }
    return "key not found";
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const ll = new LinkedList();
ll.insertAtBeginning(2);
console.log(ll);
