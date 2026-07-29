// 1. Array-based Queue (Fixed size)
class ArrayQueue {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(element) {
        if (this.size === this.capacity) {
            console.log('Queue overflow: Queue is full.');
            return false;
        }
        this.items[this.rear] = element;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue underflow: Queue is empty.');
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return item;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.front];
    }
}

// 2. Linked List-based Queue (Dynamic size)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue underflow: Queue is empty.');
            return null;
        }
        const removedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return removedValue;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.head.value;
    }
}

// Node for priority queues
class PQNode {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// 3. Min-Heap-based Priority Queue
class MinHeapPriorityQueue {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(element, priority) {
        const node = new PQNode(element, priority);
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority >= this.heap[parentIndex].priority) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.isEmpty()) {
            console.log('Priority Queue underflow: Priority Queue is empty.');
            return null;
        }
        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }

        return min;
    }

    sinkDown(index) {
        const length = this.heap.length;
        while (true) {
            let smallest = index;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;

            if (leftChildIndex < length && this.heap[leftChildIndex].priority < this.heap[smallest].priority) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex].priority < this.heap[smallest].priority) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    peekMin() {
        if (this.isEmpty()) return null;
        return this.heap[0];
    }
}

// 4. Ordered Array-based Priority Queue
class OrderedArrayPriorityQueue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    insert(element, priority) {
        const node = new PQNode(element, priority);
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (priority < this.items[i].priority) {
                this.items.splice(i, 0, node);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(node);
        }
    }

    extractMin() {
        if (this.isEmpty()) {
            console.log('Priority Queue underflow: Priority Queue is empty.');
            return null;
        }
        return this.items.shift();
    }

    peekMin() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }
}

module.exports = {
    ArrayQueue,
    LinkedListQueue,
    MinHeapPriorityQueue,
    OrderedArrayPriorityQueue
};
