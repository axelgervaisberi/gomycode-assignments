// greedy task scheduler (earliest end time first)
function greedyTaskScheduler(tasks) {
    if (!tasks || tasks.length === 0) return [];

    const sorted = [...tasks].sort((a, b) => a.end - b.end);
    const selected = [];
    let lastEnd = -Infinity;

    for (const task of sorted) {
        if (task.start >= lastEnd) {
            selected.push(task);
            lastEnd = task.end;
        }
    }

    return selected;
}

// helper function to check if a task subset has no overlaps
function isValidSubset(subset) {
    const sorted = [...subset].sort((a, b) => a.start - b.start);
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i].end > sorted[i + 1].start) {
            return false;
        }
    }
    return true;
}

// brute force task scheduler (explores all 2^N subsets)
function bruteForceTaskScheduler(tasks) {
    if (!tasks || tasks.length === 0) return [];

    const n = tasks.length;
    let maxSubset = [];
    const total = 1 << n; // 2^n combinations

    for (let i = 0; i < total; i++) {
        const current = [];
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                current.push(tasks[j]);
            }
        }

        if (isValidSubset(current) && current.length > maxSubset.length) {
            maxSubset = current;
        }
    }

    return maxSubset;
}

// generator for benchmark tasks
function generateRandomTasks(count) {
    const tasks = [];
    for (let i = 0; i < count; i++) {
        const start = Math.floor(Math.random() * 5000);
        const duration = Math.floor(Math.random() * 50) + 1;
        tasks.push({ start, end: start + duration });
    }
    return tasks;
}

module.exports = {
    greedyTaskScheduler,
    bruteForceTaskScheduler,
    isValidSubset,
    generateRandomTasks
};
