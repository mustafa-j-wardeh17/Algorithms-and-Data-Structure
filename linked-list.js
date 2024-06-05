class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(value, index) {

    if (index >= this.length) {
      this.append(value)
      return
    }
    if (index === 0) {
      this.prepend(value)
      return
    }
    let count = 0;
    let current = this.head;
    let newNode = new Node(value)
    while (current) {
      if (count === index - 1) {
        const next = current.next;
        current.next = newNode;
        newNode.next = next;
      } else {
        current = current.next;
      }
      count++;
    }
    this.length++;
  }
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  delete(index) {
    if (index >= this.length || index < 0) {
      console.log('Index out of bounds');
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    }
    let counter = 0;
    let current = this.head;
    let unwantedNode; // 
    let leader;
    while (current) {
      if (counter === index - 1) {
        leader = current;
      }
      else if (counter === index) {
        unwantedNode = current;
        leader.next = unwantedNode.next;
      }
      current = current.next;
      counter++;
    }
    this.length--;
  }

  sum() {
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.value;
      current = current.next;
    }
    return sum;
  }
  printInArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value)
      current = current.next;
    }
    console.log(arr)
  }
}



// Example usage
const myLinkedList = new LinkedList();

myLinkedList.append(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1720, 3);
myLinkedList.printInArray(); // Output: [1,10,5,1720,16]

myLinkedList.delete(1)
myLinkedList.printInArray(); // Output: [1,5,1720,16]

// myLinkedList.delete(4)
myLinkedList.reverse()
myLinkedList.printInArray(); // Output: [16,1720,5,1]

//--------------------------------------------
//-------------Second Linked List-------------
//--------------------------------------------

const myLinkedList2 = new LinkedList();
myLinkedList2.append(16);
myLinkedList2.append(8);
myLinkedList2.prepend(2);
myLinkedList2.insert(17, 1);
myLinkedList2.printInArray(); // Output: [2,17,16,8]

myLinkedList2.reverse()
myLinkedList2.printInArray(); // Output: [8,16,17,2]


console.log(myLinkedList) // Output: 1742

//--------------------------------------------
//------------Merge 2 Linked List-------------
//--------------------------------------------

// ls1->ls2->ls1->ls2->ls1
const mergeTwoLinkedList = (ls1, ls2) => {
  let current1 = ls1.head;
  let current2 = ls2.head;
  let MergedLinkedList = new LinkedList()
  let count = 0;
  while (current1 || current2) {
    if (!current1) {
      MergedLinkedList.append(current2.value);
      current2 = current2.next;
    }
    else if (!current2) {
      MergedLinkedList.append(current2.value);
      current2 = current2.next;
    }
    else {
      if (count % 2 === 0) {
        console.log(current1.value)
        MergedLinkedList.append(current1.value)
        current1 = current1.next;
      } else {
        MergedLinkedList.append(current2.value)
        console.log(current2.value)
        current2 = current2.next;
      }
      count++;
    }
  }
  return MergedLinkedList;
}
const myMergedLinkedList = mergeTwoLinkedList(myLinkedList, myLinkedList2)

console.log(myMergedLinkedList)


