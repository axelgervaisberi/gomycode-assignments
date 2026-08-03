# Checkpoint Recursion - Is Palindrome

A JavaScript implementation of a recursive algorithm to test if a word or phrase is a palindrome.

## Description

A word is a palindrome if and only if it reads the same from left to right as from right to left (for example: `gag`, `kayak`, `php`, `radar`).

### Processing Breakdown & Recursion Logic:
1. **End Character Comparison**: Compare characters at the outer boundaries of the string (`start` index vs `end` index).
2. **Recursive Step**: If end characters match, recursively test the inner substring (`start + 1`, `end - 1`).
3. **Difference Stop**: If end characters differ at any point, stop processing immediately and return `false`.
4. **Base Case / Stop Condition**: An empty word (length 0) or a single character word (length 1) is a palindrome, returning `true` (`start >= end`).

## Project Files

- `palindrome.js`: Primary recursive algorithm module.
- `index.js`: Demonstration runner showing output for sample words.
- `test.js`: Automated unit test suite verifying base cases and test words.
- `package.json`: Project settings.

## How to Run

Run the demonstration script:
```bash
node index.js
```

Run unit tests:
```bash
npm test
```
