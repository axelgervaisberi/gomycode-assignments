const assert = require('assert');
const {
    greedyTaskScheduler,
    bruteForceTaskScheduler,
    generateRandomTasks
} = require('./index');

function runValidationAndBenchmark() {
    console.log('--- 1. Sample Input Validation ---');
    const sampleTasks = [
        { start: 1, end: 3 },
        { start: 2, end: 5 },
        { start: 4, end: 6 },
        { start: 6, end: 7 },
        { start: 5, end: 9 },
        { start: 8, end: 10 }
    ];

    const bruteResult = bruteForceTaskScheduler(sampleTasks);
    const greedyResult = greedyTaskScheduler(sampleTasks);

    console.log('Brute-force selected count:', bruteResult.length);
    console.log('Greedy selected count:', greedyResult.length);

    assert.strictEqual(bruteResult.length, greedyResult.length);
    assert.strictEqual(greedyResult.length, 4);
    console.log('Both algorithms returned the correct result (4 non-overlapping tasks).\n');

    console.log('--- 2. Performance Benchmark ---');

    // small dataset benchmark (N = 20) where brute force is feasible
    const smallTasks = generateRandomTasks(20);

    let start = performance.now();
    const bfSmall = bruteForceTaskScheduler(smallTasks);
    let end = performance.now();
    const bfTime = (end - start).toFixed(2);

    start = performance.now();
    const gSmall = greedyTaskScheduler(smallTasks);
    end = performance.now();
    const gSmallTime = (end - start).toFixed(2);

    console.log(`Small dataset (N = 20):`);
    console.log(`- Brute-force time: ${bfTime} ms (tasks selected: ${bfSmall.length})`);
    console.log(`- Greedy time: ${gSmallTime} ms (tasks selected: ${gSmall.length})`);

    // large dataset benchmark (N = 10,000) for greedy algorithm
    const largeTasks = generateRandomTasks(10000);

    start = performance.now();
    const gLarge = greedyTaskScheduler(largeTasks);
    end = performance.now();
    const gLargeTime = (end - start).toFixed(2);

    console.log(`\nLarge dataset (N = 10,000):`);
    console.log(`- Greedy time: ${gLargeTime} ms (tasks selected: ${gLarge.length})`);
    console.log(`- Brute-force: Skipped (2^10000 operations would cause stack/cpu exhaustion)`);
}

runValidationAndBenchmark();
