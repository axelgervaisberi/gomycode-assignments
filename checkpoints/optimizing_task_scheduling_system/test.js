const assert = require('assert');
const {
    Task,
    sortByStartTime,
    groupByPriority,
    findOverlappingTasks,
    estimateMemoryUsage
} = require('./index');

function runTests() {
    const tasks = [
        new Task('Task A', 10, 12, 'High'),
        new Task('Task B', 9, 11, 'Medium'),
        new Task('Task C', 13, 14, 'Low'),
        new Task('Task D', 11, 13, 'High')
    ];

    // test sorting by start time
    const sorted = sortByStartTime(tasks);
    assert.deepStrictEqual(
        sorted.map(t => t.name),
        ['Task B', 'Task A', 'Task D', 'Task C']
    );
    console.log('Sort by start time passed.');

    // test grouping by priority
    const grouped = groupByPriority(tasks);
    assert.strictEqual(grouped['High'].length, 2);
    assert.strictEqual(grouped['Medium'].length, 1);
    assert.strictEqual(grouped['Low'].length, 1);
    console.log('Group by priority passed.');

    // test overlap detection
    const overlaps = findOverlappingTasks(tasks);
    // Task B (9-11) overlaps Task A (10-12)
    // Task A (10-12) overlaps Task D (11-13)
    assert.strictEqual(overlaps.length, 2);
    console.log('Overlapping tasks count:', overlaps.length);
    for (const [t1, t2] of overlaps) {
        console.log(`Overlap found: ${t1.name} (${t1.startTime}-${t1.endTime}) and ${t2.name} (${t2.startTime}-${t2.endTime})`);
    }

    // test memory estimation
    const mem = estimateMemoryUsage(tasks);
    assert.strictEqual(mem.taskCount, 4);
    console.log('Estimated memory usage:', mem);

    console.log('All tests passed successfully!');
}

runTests();
