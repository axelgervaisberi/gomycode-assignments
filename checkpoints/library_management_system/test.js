const LibrarySystem = require('./src/services/LibrarySystem');
const { Book, BookStatus } = require('./src/models/Book');
const { Member } = require('./src/models/Member');
const Librarian = require('./src/models/Librarian');

function runTests() {
  console.log("==========================================");
  console.log("RUNNING LIBRARY MANAGEMENT SYSTEM TESTS");
  console.log("==========================================\n");

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

  const system = new LibrarySystem();

  // TEST 1: Register Member and Librarian
  const member = new Member('M101', 'Axel Beri', 'axel@example.com', 2); // Max limit: 2
  const librarian = new Librarian('L201', 'Sarah Jenkins', 'sarah@library.org', 'EMP-550');
  system.registerMember(member);
  system.registerLibrarian(librarian);

  assert(system.members.has('M101') && system.librarians.has('L201'), "1. Account Registration: Registers member and librarian");

  // TEST 2: Add Books and Catalog Search
  const b1 = new Book('ISBN-001', 'Clean Code', 'Robert C. Martin', 'Software');
  const b2 = new Book('ISBN-002', 'Design Patterns', 'Erich Gamma', 'Software');
  system.catalog.addBook(b1);
  system.catalog.addBook(b2);

  const searchResults = system.catalog.searchByTitle('Clean');
  assert(searchResults.length === 1 && searchResults[0].isbn === 'ISBN-001', "2. Catalog Search: Search by title returns matching books");

  // TEST 3: Issue Book Workflow & State Transition
  const txn = system.issueBook('M101', 'ISBN-001', 14);
  assert(b1.status === BookStatus.ISSUED, "3. Book State Transition: Marks book status as ISSUED");
  assert(member.activeLoans.length === 1, "4. Member Loans: Adds book to member active loans");

  // TEST 4: Borrowing Limit Enforcement
  system.issueBook('M101', 'ISBN-002'); // Max limit of 2 reached
  const b3 = new Book('ISBN-003', 'Refactoring', 'Martin Fowler', 'Software');
  system.catalog.addBook(b3);

  let limitErrorThrown = false;
  try {
    system.issueBook('M101', 'ISBN-003'); // Exceeds quota
  } catch (e) {
    limitErrorThrown = true;
  }
  assert(limitErrorThrown, "5. Borrow Quota: Blocks issue request exceeding max borrowing limit");

  // TEST 5: Return Book & Overdue Fine Assessment
  const futureReturnDate = new Date();
  futureReturnDate.setDate(futureReturnDate.getDate() + 20); // 20 days later (6 days overdue)

  const { fineAssessed } = system.returnBook('M101', 'ISBN-001', futureReturnDate);
  assert(b1.status === BookStatus.AVAILABLE, "6. Book Return: Resets book status to AVAILABLE");
  assert(fineAssessed === 6.0, "7. Overdue Fine Assessment: Correctly assesses $6.00 fine for 6 overdue days");
  assert(member.fineBalance === 6.0, "8. Member Fine Balance: Updates member fine balance");

  // TEST 6: Fine Payment Workflow
  member.payFine(6.0);
  assert(member.fineBalance === 0.0, "9. Pay Fine: Updates member fine balance to 0.0");

  console.log("\n==========================================");
  console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log("==========================================");

  if (failed > 0) process.exit(1);
}

runTests();
