const { isPalindrome, checkPalindrome } = require('./palindrome');

function runTests() {
  console.log("=========================================");
  console.log("RUNNING RECURSION PALINDROME UNIT TESTS");
  console.log("=========================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}`);
      failed++;
    }
  }

  // Base Cases
  assert(checkPalindrome("") === true, "1. Stop Condition: Empty string is a palindrome");
  assert(checkPalindrome("a") === true, "2. Stop Condition: Single character is a palindrome");

  // Palindromes from instructions
  assert(checkPalindrome("gag") === true, '3. Palindrome Test: "gag" is a palindrome');
  assert(checkPalindrome("kayak") === true, '4. Palindrome Test: "kayak" is a palindrome');
  assert(checkPalindrome("php") === true, '5. Palindrome Test: "php" is a palindrome');
  assert(checkPalindrome("radar") === true, '6. Palindrome Test: "radar" is a palindrome');

  // Additional Palindromes
  assert(checkPalindrome("Racecar") === true, '7. Case Insensitive Test: "Racecar" is a palindrome');
  assert(checkPalindrome("A man a plan a canal Panama") === true, '8. Phrase Test: "A man a plan a canal Panama" is a palindrome');

  // Non-Palindromes
  assert(checkPalindrome("hello") === false, '9. Non-Palindrome Test: "hello" is not a palindrome');
  assert(checkPalindrome("world") === false, '10. Non-Palindrome Test: "world" is not a palindrome');

  console.log("\n=========================================");
  console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log("=========================================");

  if (failed > 0) process.exit(1);
}

runTests();
