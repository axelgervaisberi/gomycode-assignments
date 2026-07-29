const assert = require('assert');
const {
    ArrayQueue,
    LinkedListQueue,
    MinHeapPriorityQueue,
    OrderedArrayPriorityQueue
} = require('./index');

function testQueues() {
    console.log('--- Testing Array-based Queue (Fixed Size) ---');
    const arrayQueue = new ArrayQueue(3);
    assert.strictEqual(arrayQueue.isEmpty(), true);
    assert.strictEqual(arrayQueue.peek(), null);

    arrayQueue.enqueue('Task 1');
    arrayQueue.enqueue('Task 2');
    arrayQueue.enqueue('Task 3');
    assert.strictEqual(arrayQueue.enqueue('Task 4'), false); // full queue

    assert.strictEqual(arrayQueue.peek(), 'Task 1');
    assert.strictEqual(arrayQueue.dequeue(), 'Task 1');
    assert.strictEqual(arrayQueue.dequeue(), 'Task 2');
    assert.strictEqual(arrayQueue.dequeue(), 'Task 3');
    assert.strictEqual(arrayQueue.dequeue(), null); // empty queue underflow

    console.log('\n--- Testing Linked List-based Queue (Dynamic Size) ---');
    const listQueue = new LinkedListQueue();
    assert.strictEqual(listQueue.isEmpty(), true);

    listQueue.enqueue('Node A');
    listQueue.enqueue('Node B');
    assert.strictEqual(listQueue.peek(), 'Node A');
    assert.strictEqual(listQueue.dequeue(), 'Node A');
    assert.strictEqual(listQueue.dequeue(), 'Node B');
    assert.strictEqual(listQueue.dequeue(), null);

    console.log('\n--- Testing Min-Heap Priority Queue ---');
    const minHeapPQ = new MinHeapPriorityQueue();
    assert.strictEqual(minHeapPQ.isEmpty(), true);
    assert.strictEqual(minHeapPQ.peekMin(), null);

    minHeapPQ.insert('Patient C', 3);
    minHeapPQ.insert('Patient A', 1);
    minHeapPQ.insert('Patient D', 4);
    minHeapPQ.insert('Patient B', 2);

    assert.strictEqual(minHeapPQ.peekMin().element, 'Patient A');
    assert.strictEqual(minHeapPQ.extractMin().element, 'Patient A');
    assert.strictEqual(minHeapPQ.extractMin().element, 'Patient B');
    assert.strictEqual(minHeapPQ.extractMin().element, 'Patient C');
    assert.strictEqual(minHeapPQ.extractMin().element, 'Patient D');
    assert.strictEqual(minHeapPQ.extractMin(), null);

    console.log('\n--- Testing Ordered Array Priority Queue ---');
    const arrayPQ = new OrderedArrayPriorityQueue();
    assert.strictEqual(arrayPQ.isEmpty(), true);

    arrayPQ.insert('Job C', 30);
    arrayPQ.insert('Job A', 10);
    arrayPQ.insert('Job D', 40);
    arrayPQ.insert('Job B', 20);

    assert.strictEqual(arrayPQ.peekMin().element, 'Job A');
    assert.strictEqual(arrayPQ.extractMin().element, 'Job A');
    assert.strictEqual(arrayPQ.extractMin().element, 'Job B');
    assert.strictEqual(arrayPQ.extractMin().element, 'Job C');
    assert.strictEqual(arrayPQ.extractMin().element, 'Job D');
    assert.strictEqual(arrayPQ.extractMin(), null);

    console.log('\nAll queue and priority queue tests passed successfully!');
}

testQueues();
