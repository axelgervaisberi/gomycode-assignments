const assert = require('assert');
const Queue = require('./Queue');
const PrinterQueue = require('./PrinterQueue');

console.log('Running test suite for Printer Queue...\n');

let passedTests = 0;
let totalTests = 0;

function runTest(testName, fn) {
    totalTests++;
    try {
        fn();
        console.log(`[PASS] ${testName}`);
        passedTests++;
    } catch (err) {
        console.error(`[FAIL] ${testName}`);
        console.error(`       Error: ${err.message}`);
    }
}

// --- Queue Class Tests ---
runTest('Queue - enqueue and size', () => {
    const q = new Queue();
    assert.strictEqual(q.isEmpty(), true);
    q.enqueue(10);
    q.enqueue(20);
    assert.strictEqual(q.size(), 2);
    assert.strictEqual(q.isEmpty(), false);
});

runTest('Queue - FIFO dequeue order', () => {
    const q = new Queue();
    q.enqueue('first');
    q.enqueue('second');
    q.enqueue('third');

    assert.strictEqual(q.dequeue(), 'first');
    assert.strictEqual(q.peek(), 'second');
    assert.strictEqual(q.dequeue(), 'second');
    assert.strictEqual(q.dequeue(), 'third');
    assert.strictEqual(q.dequeue(), null);
    assert.strictEqual(q.isEmpty(), true);
});

// --- PrinterQueue Tests ---
runTest('PrinterQueue - addJob and getPendingCount', () => {
    const printer = new PrinterQueue();
    printer.addJob('Doc1.pdf', 5);
    printer.addJob('Doc2.pdf', 12);
    assert.strictEqual(printer.getPendingCount(), 2);
});

runTest('PrinterQueue - processJob in FIFO order', () => {
    const printer = new PrinterQueue();
    printer.addJob('JobA.pdf', 2);
    printer.addJob('JobB.pdf', 10);

    const processedFirst = printer.processJob();
    assert.strictEqual(processedFirst.name, 'JobA.pdf');
    assert.strictEqual(printer.getPendingCount(), 1);
});

runTest('PrinterQueue - processAllJobs', () => {
    const printer = new PrinterQueue();
    printer.addJob('Task1.pdf', 1);
    printer.addJob('Task2.pdf', 4);
    printer.addJob('Task3.pdf', 7);

    const processed = printer.processAllJobs();
    assert.strictEqual(processed.length, 3);
    assert.strictEqual(printer.getPendingCount(), 0);
});

runTest('PrinterQueue - input validation throws errors', () => {
    const printer = new PrinterQueue();
    assert.throws(() => printer.addJob('', 5), /Job name must be a non-empty string/);
    assert.throws(() => printer.addJob('Doc.pdf', 0), /Number of pages must be a positive integer/);
    assert.throws(() => printer.addJob('Doc.pdf', -3), /Number of pages must be a positive integer/);
});

console.log(`\nPassed ${passedTests}/${totalTests} tests.`);
