export class Stack {
    constructor() {
        this.data = []
    }
    add(record) {
        this.data.push(record)
    }
    pop() {
        return this.data
    }
    peak() {
        const lastIndex = this.data.length - 1
        return this.data(lastIndex)
    }
    isEmpty() {
        return this.data.length === 0
    }
}