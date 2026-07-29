class Task {
    constructor(name, startTime, endTime, priority) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.priority = priority; // High, Medium, Low
    }
}

// Sort tasks by start time (Time: O(N log N), Space: O(N))
function sortByStartTime(tasks) {
    return [...tasks].sort((a, b) => a.startTime - b.startTime);
}

// Group tasks by priority (Time: O(N), Space: O(N))
function groupByPriority(tasks) {
    const grouped = {};
    for (const task of tasks) {
        if (!grouped[task.priority]) {
            grouped[task.priority] = [];
        }
        grouped[task.priority].push(task);
    }
    return grouped;
}

// Detect overlapping tasks (Time: O(N log N + K), Space: O(N))
function findOverlappingTasks(tasks) {
    const sorted = sortByStartTime(tasks);
    const overlaps = [];

    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            // stop inner loop if start time is past current task end time
            if (sorted[j].startTime >= sorted[i].endTime) {
                break;
            }
            overlaps.push([sorted[i], sorted[j]]);
        }
    }

    return overlaps;
}

// Estimate memory usage in bytes for a task list
function estimateMemoryUsage(tasks) {
    let bytes = 0;

    for (const task of tasks) {
        bytes += 48; // object overhead
        bytes += (task.name ? task.name.length * 2 : 0);
        bytes += (task.priority ? task.priority.length * 2 : 0);
        bytes += 16; // start and end time numbers
    }

    return {
        taskCount: tasks.length,
        estimatedBytes: bytes,
        estimatedKB: (bytes / 1024).toFixed(2)
    };
}

module.exports = {
    Task,
    sortByStartTime,
    groupByPriority,
    findOverlappingTasks,
    estimateMemoryUsage
};
