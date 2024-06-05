// FIFI => First In First Out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return;
        }
        let prevLast = this.last;
        prevLast.next = newNode;
        this.last = newNode;
        this.length++;

    }
    dequeue() {
        if (this.length === 0) return
        else {
            if (this.length === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }
            this.length--;
        }

    }
    print() {
        let current = this.first;
        let arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr)
    }
}

let newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)

newQueue.dequeue()
newQueue.dequeue()

newQueue.enqueue(17)
newQueue.enqueue(16)


newQueue.print()


