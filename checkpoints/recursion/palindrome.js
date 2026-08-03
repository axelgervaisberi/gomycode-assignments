/**
 * Recursive Palindrome Function
 * 
 * Instructions & Logic:
 * 1. Compare characters located at the ends of the word (start vs end).
 * 2. If equal, test the rest of the inner word recursively (start + 1, end - 1).
 * 3. If different, stop and return false.
 * 4. Stop condition: an empty word or a word containing a single character (start >= end) is a palindrome.
 * 
 * @param {string} word - The input word to test.
 * @param {number} start - Pointer/counter for left index.
 * @param {number} end - Pointer/counter for right index.
 * @returns {boolean} True if word is a palindrome, false otherwise.
 */
function isPalindrome(word, start = 0, end = word.length - 1) {
  // Stop Condition: An empty word (length 0) or a single character (length 1) is a palindrome.
  if (start >= end) {
    return true;
  }

  // End Comparison: Compare characters located at the ends of the current word boundaries.
  if (word[start] !== word[end]) {
    // If characters differ, stop processing and return false.
    return false;
  }

  // Recursive Step: If equality, test the rest of the inner word.
  return isPalindrome(word, start + 1, end - 1);
}

/**
 * Normalizes input word (converts to lowercase, removes non-alphanumeric characters)
 * before executing the recursive palindrome check.
 * 
 * @param {string} input - Raw input string
 * @returns {boolean} True if normalized word is a palindrome.
 */
function checkPalindrome(input) {
  if (typeof input !== 'string') return false;
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(cleaned, 0, cleaned.length - 1);
}

module.exports = { isPalindrome, checkPalindrome };
