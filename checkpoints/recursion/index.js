const { isPalindrome, checkPalindrome } = require('./palindrome');

function runDemo() {
  console.log("=========================================");
  console.log("RECURSIVE PALINDROME CHECKER DEMO");
  console.log("=========================================\n");

  const testWords = [
    "gag",
    "kayak",
    "php",
    "radar",
    "level",
    "rotor",
    "hello",
    "world",
    "a",
    ""
  ];

  console.log("Testing words:\n");
  testWords.forEach((word) => {
    const result = checkPalindrome(word);
    const label = result ? "PALINDROME" : "NOT A PALINDROME";
    const formattedWord = word === "" ? '"" (empty string)' : `"${word}"`;
    console.log(`Word: ${formattedWord.padEnd(20)} -> ${label}`);
  });

  console.log("\n=========================================");
  console.log("DEMO COMPLETED SUCCESSFULLY");
  console.log("=========================================");
}

runDemo();
