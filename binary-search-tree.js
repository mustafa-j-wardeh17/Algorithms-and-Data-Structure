class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (newNode.value < currentNode.value) {
                    // Insert To Left Smaller Value If Empty Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Insert To Right Larger Value If Empty Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            console.log(`Oops: Tree Is Empty!`)
            return
        }
        let current = this.root;
        while (current) {
            if (current.value === value) {
                console.log(`Item With Value ${value} Founded \n${current.value} With Those Children right: ${current.right && current.right.value} left: ${current.left && current.left.value}`)
                return
            }
            else if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        console.log('Oops: Item Not Found In This Tree');

    }
}



const tree = new BinarySearchTree()

tree.insert(9) // Must Be Root
tree.insert(10) // Right Of Main Root 
tree.insert(2) // Left Of Main Root
tree.insert(6)
tree.insert(1)
tree.insert(0)
tree.insert(5)
tree.insert(7)
tree.insert(4)
tree.insert(8)
tree.insert(15)
tree.insert(20)
tree.insert(13)
tree.insert(17)

tree.lookup(9)
console.log(tree)