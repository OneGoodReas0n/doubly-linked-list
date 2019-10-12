const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0
        this.list = new Array()
        this._head = new Node()
        this._tail = new Node()
    }

    append(data) {
        if (this.length < 1) {
            this._head = new Node(data)
            this._tail = new Node(data)
        }
        else {
            this._tail = new Node(data)
        }
        this.list.push(new Node(data))
        this.length++
        return this
    }

    head() {
        return this._head.data
    }

    tail() {
        return this._tail.data
    }

    at(index) {
        return this.list[index].data
    }

    insertAt(index, data) {
        this.list.splice(index, 0, new Node(data))
        this.length++
        return this
    }

    isEmpty() {
        return this.length ? false : true
    }

    clear() {
        this.list = []
        this._head = new Node(null)
        this._tail = new Node(null)
        this.length = 0
        return this
    }

    deleteAt(index) {
        this.list.splice(index, 1)
        this.length--
        return this
    }

    reverse() {
        const list = Array().concat(this.list)
        let i = this.length - 1;
        list.forEach((e) => {
            this.list[i] = e
            i--
        })
        this._head = this.list[0]
        this._tail = this.list[this.length - 1]
        return this
    }

    indexOf(data) {
        for (let i = 0; i < this.length; i++) {
            if (this.list[i].data === data) {
                return i
            }
        }
        return -1
    }
}

module.exports = LinkedList;
