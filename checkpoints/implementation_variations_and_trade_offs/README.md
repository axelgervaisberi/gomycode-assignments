# Implementation Variations and Trade-offs

This project implements Queue and Priority Queue data structures using different underlying representations in JavaScript, highlighting their performance and implementation trade-offs.

## 1. Queue Implementations

### Array-based Queue (Fixed Size Circular Queue)
- **Enqueue**: O(1) time
- **Dequeue**: O(1) time
- **Trade-offs**: Fast operations with low memory overhead, but has a fixed capacity and can trigger overflow errors when full.

### Linked List-based Queue (Dynamic Size)
- **Enqueue**: O(1) time
- **Dequeue**: O(1) time
- **Trade-offs**: Dynamically resizes without capacity limits, but requires extra memory per node for pointer references (`next`).

---

## 2. Priority Queue Implementations

### Min-Heap-based Priority Queue
- **Insert**: O(log N) time
- **ExtractMin**: O(log N) time
- **PeekMin**: O(1) time
- **Trade-offs**: Efficient for large datasets, maintaining logarithmic bounds for both insertion and deletion.

### Ordered Array-based Priority Queue
- **Insert**: O(N) time (shifting elements to maintain order)
- **ExtractMin**: O(1) time (shifting or popping from end depending on order)
- **PeekMin**: O(1) time
- **Trade-offs**: Extremely fast retrieval/deletion, but insertion slows down as the array grows larger.

---

## Edge Case Handling

- **Overflow**: Attempting to enqueue into a full `ArrayQueue` returns `false` and logs a warning.
- **Underflow**: Attempting to dequeue or extractMin from an empty structure logs an underflow message and returns `null`.
- **Empty Peek**: Peeking from an empty structure safely returns `null`.

## Running Tests

```bash
node test.js
```
