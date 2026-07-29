# Choosing and Defending the Best Algorithm

Comparing Brute-Force and Greedy algorithms for solving the Interval Scheduling Problem in a real-time delivery system.

## Setup & Running Instructions

Run sample validation and performance benchmark:
```bash
node test.js
```

Run edge case stress tests:
```bash
node stress_test.js
```

---

## Comparison of Approaches

- **Speed**: The Greedy algorithm ($O(N \log N)$) is vastly faster than Brute-Force ($O(2^N)$). Processing 10,000 tasks takes less than 3 milliseconds with Greedy, while Brute-Force freezes for $N > 25$.
- **Maintainability & Scalability**: Greedy is simple to maintain and scales linearly with minimal memory overhead ($O(N)$). Brute-force requires exponential time and memory, making it impossible to scale to production volumes.
- **Memory Trade-offs**: Greedy uses $O(N)$ space to store the sorted list and result array. Brute-force requires storing or enumerating $2^N$ subset combinations, leading to memory exhaustion on moderate inputs.

---

## Recommendation & Defense

**Recommended Algorithm: Greedy Algorithm**

For a real-time delivery platform handling thousands of tasks per second, the **Greedy Algorithm** (Earliest End Time First) is the optimal choice. It guarantees the maximum number of non-overlapping tasks in $O(N \log N)$ time with minimal memory footprint.

**When Brute-Force Might Be Relevant:**
Brute-force (or Dynamic Programming / Weighted Interval Scheduling) is only relevant when tasks have variable profits/weights or complex constraint dependencies where a simple greedy choice does not yield the optimal solution.

---

## Edge Case Behavior

1. **All tasks overlapping**: Both algorithms correctly return 1 task.
2. **All tasks non-overlapping**: Both algorithms correctly return all $N$ tasks.
3. **Tasks with identical start/end boundaries**: Greedy correctly sorts ties and selects the maximal non-overlapping set without breaking.
