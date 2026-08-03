const LibrarySystem = require('./services/LibrarySystem');
const UserFactory = require('./models/UserFactory');
const Book = require('./models/Book');

function runTests() {
  console.log("==========================================");
  console.log("🧪 RUNNING SMART LIBRARY SYSTEM UNIT TESTS");
  console.log("==========================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, testName) {
    if (condition) {
      console.log(`✅ [PASS] ${testName}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${testName}`);
      failed++;
    }
  }

  // TEST 1: Singleton Pattern Verification
  LibrarySystem.resetInstance();
  const sys1 = LibrarySystem.getInstance();
  const sys2 = LibrarySystem.getInstance();
  assert(sys1 === sys2, "1. LibrarySystemSingleton: getInstance() returns exact same instance");

  // TEST 2: Factory Pattern Verification
  const student = UserFactory.createUser('student', 'S001', 'Alice Smith', 'alice@edu.com');
  const teacher = UserFactory.createUser('teacher', 'T001', 'Dr. Bob Jones', 'bob@edu.com');
  assert(student.getRole() === 'Student' && student.maxBorrowLimit === 3, "2. UserFactory: Instantiates Student with 3-book limit");
  assert(teacher.getRole() === 'Teacher' && teacher.maxBorrowLimit === 10, "3. UserFactory: Instantiates Teacher with 10-book limit");

  // TEST 3: User & Book Addition
  sys1.addUser(student);
  sys1.addUser(teacher);
  const book1 = new Book('ISBN-101', 'Clean Code', 'Robert C. Martin');
  const book2 = new Book('ISBN-102', 'Design Patterns', 'Gang of Four');
  sys1.addBook(book1);
  sys1.addBook(book2);
  assert(sys1.books.has('ISBN-101') && sys1.users.has('S001'), "4. LibrarySystem: Stores users and books correctly");

  // TEST 4: Borrowing Books & Availability Update
  const txn = sys1.borrowBook('S001', 'ISBN-101');
  assert(!book1.isAvailable, "5. BorrowBook: Marks book availability to false");
  assert(student.borrowedBooks.length === 1, "6. BorrowBook: Adds book to user borrowed list");
  assert(student.notifications.length >= 1, "7. Observer Pattern: User receives notification on borrow");

  // TEST 5: Borrow Limit Enforcement
  const book3 = new Book('ISBN-103', 'Refactoring', 'Martin Fowler');
  const book4 = new Book('ISBN-104', 'Domain-Driven Design', 'Eric Evans');
  const book5 = new Book('ISBN-105', 'Pragmatic Programmer', 'Andrew Hunt');
  sys1.addBook(book3);
  sys1.addBook(book4);
  sys1.addBook(book5);

  sys1.borrowBook('S001', 'ISBN-102');
  sys1.borrowBook('S001', 'ISBN-103');

  let limitThrown = false;
  try {
    sys1.borrowBook('S001', 'ISBN-104'); // Should exceed student 3-book limit
  } catch (e) {
    limitThrown = true;
  }
  assert(limitThrown, "8. BorrowLimit: Rejects borrow attempt exceeding max student limit");

  // TEST 6: Book Return Logic
  sys1.returnBook('S001', 'ISBN-101');
  assert(book1.isAvailable, "9. ReturnBook: Marks book as available again");
  assert(student.borrowedBooks.length === 2, "10. ReturnBook: Removes book from user borrowed list");

  // TEST 7: Overdue Simulation & Observer Alert Broadcast
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 40); // 40 days in future (beyond 14-day limit)
  sys1.simulateOverdueCheck(futureDate);
  const hasOverdueNotice = student.notifications.some(n => n.includes('OVERDUE ALERT'));
  assert(hasOverdueNotice, "11. Observer Pattern: Overdue check broadcasts alert to user notifications");

  console.log("\n==========================================");
  console.log(`📊 TEST RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log("==========================================");

  if (failed > 0) process.exit(1);
}

runTests();
