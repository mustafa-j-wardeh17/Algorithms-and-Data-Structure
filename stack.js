// LIFO => Last In First Out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            let prevTop = this.top;
            this.top = newNode;
            this.top.next = prevTop;
        }
        this.length++;
    }

    pop() {
        if (!this.top)
            return null
        if (this.length === 0)
            return this.bottom = null
        this.top = this.top.next;
        this.length--;
    }
    print() {
        if (this.length === 0) console.log('Oops: No Items In The Stack;');
        let current = this.top;
        let arr = [];
        while (current) {
            arr.splice(0, 0, current.value)
            current = current.next;
        }
        console.log(arr)
    }
}

let newStack = new Stack()

newStack.push(1)
newStack.push(2)
newStack.push(3)

newStack.pop()

newStack.print()