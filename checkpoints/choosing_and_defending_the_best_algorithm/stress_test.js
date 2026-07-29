const assert = require('assert');
const { greedyTaskScheduler, bruteForceTaskScheduler } = require('./index');

function runStressTest() {
    console.log('--- 3. Stress Testing Edge Cases ---\n');

    // Case 1: All tasks overlapping
    console.log('Case 1: All tasks overlapping');
    const allOverlapping = [
        { start: 1, end: 10 },
        { start: 2, end: 10 },
        { start: 3, end: 10 },
        { start: 4, end: 10 }
    ];
    const greedyCase1 = greedyTaskScheduler(allOverlapping);
    const bruteCase1 = bruteForceTaskScheduler(allOverlapping);
    assert.strictEqual(greedyCase1.length, 1);
    assert.strictEqual(bruteCase1.length, 1);
    console.log('✔ Passed: Picked 1 task out of 4 overlapping tasks.\n');

    // Case 2: All tasks non-overlapping
    console.log('Case 2: All tasks non-overlapping');
    const nonOverlapping = [
        { start: 1, end: 2 },
        { start: 2, end: 3 },
        { start: 3, end: 4 },
        { start: 4, end: 5 }
    ];
    const greedyCase2 = greedyTaskScheduler(nonOverlapping);
    const bruteCase2 = bruteForceTaskScheduler(nonOverlapping);
    assert.strictEqual(greedyCase2.length, 4);
    assert.strictEqual(bruteCase2.length, 4);
    console.log('✔ Passed: Picked all 4 non-overlapping tasks.\n');

    // Case 3: Same start or end times
    console.log('Case 3: Same start or end times');
    const sameStartOrEnd = [
        { start: 1, end: 5 },
        { start: 1, end: 3 },
        { start: 3, end: 5 },
        { start: 3, end: 7 }
    ];
    const greedyCase3 = greedyTaskScheduler(sameStartOrEnd);
    const bruteCase3 = bruteForceTaskScheduler(sameStartOrEnd);
    assert.strictEqual(greedyCase3.length, bruteCase3.length);
    assert.strictEqual(greedyCase3.length, 2);
    console.log('✔ Passed: Picked optimal 2 tasks with shared start/end boundaries.\n');

    console.log('All stress tests completed successfully!');
}

runStressTest();
