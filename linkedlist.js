class Node {

    constructor(data) {
        this.data = data;
        this.nextnode = null;
    }
}

export class linkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        if (this.head === null) {
            this.head = new Node(data)
        } else {
            let current = this.head
            while (current.nextnode != null) {
                current = current.nextnode
            }
            current.nextnode = new Node(data)
        }
    }
    displayAll() {
      
        let current = this.head;

        while(current !== null) {

            console.log(current.data);
            current = current.nextnode
        }
    }
    get(index){
        currentNode = this.head
        let counter = 0
        while (counter < index) {
            currentNode = currentNode.nextnode
            counter++
        }
    }
}

