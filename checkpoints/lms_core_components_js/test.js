import { UserFactory } from './src/patterns/UserFactory.js';
import { StandardFineStrategy, VIPFineStrategy } from './src/patterns/FineStrategies.js';
import { EventPublisher, ConsoleNotificationObserver } from './src/patterns/EventPublisher.js';
import { LibraryManager } from './src/services/LibraryManager.js';
import { Book } from './src/models/Book.js';

function runTests() {
  console.log("==================================================");
  console.log("RUNNING LMS CORE COMPONENTS ES MODULE UNIT TESTS");
  console.log("==================================================\n");

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

  // TEST 1: Factory Pattern Verification
  const user1 = UserFactory.createUser('standard', 'U1', 'Alice', 'alice@test.com');
  const user2 = UserFactory.createUser('vip', 'U2', 'Bob', 'bob@test.com');
  assert(user1.getMaxBorrowLimit() === 3 && user1.role === 'Standard', "1. Factory Pattern: Creates StandardUser with 3-book quota");
  assert(user2.getMaxBorrowLimit() === 10 && user2.role === 'VIP', "2. Factory Pattern: Creates VIPUser with 10-book quota");

  // TEST 2: Strategy Pattern Verification
  const stdStrategy = new StandardFineStrategy(1.0); // $1 per day
  const vipStrategy = new VIPFineStrategy(1.0, 0.5); // 50% discount ($0.50 per day)
  assert(stdStrategy.calculateFine(5) === 5.0, "3. Strategy Pattern: StandardFineStrategy calculates $5.00 for 5 overdue days");
  assert(vipStrategy.calculateFine(5) === 2.5, "4. Strategy Pattern: VIPFineStrategy calculates $2.50 for 5 overdue days");

  // TEST 3: Observer Pattern Verification
  const publisher = new EventPublisher();
  const observer = new ConsoleNotificationObserver();
  publisher.subscribe(observer);
  let eventReceived = false;

  publisher.subscribe({
    onEvent(eventName, payload) {
      if (eventName === 'TEST_EVENT') eventReceived = true;
    }
  });

  publisher.publish('TEST_EVENT', { test: true });
  assert(eventReceived, "5. Observer Pattern: Publishes and notifies subscribers correctly");

  // TEST 4: Dependency Injection Verification
  let diError = false;
  try {
    new LibraryManager(null, publisher); // Missing strategy dependency
  } catch (e) {
    diError = true;
  }
  assert(diError, "6. Dependency Injection: Throws exception when required dependency is missing");

  // TEST 5: Library Manager Operations with Injected Dependencies
  const library = new LibraryManager(stdStrategy, publisher);
  const book = new Book('ISBN-901', 'Clean Architecture', 'Robert C. Martin');
  library.addBook(book);
  library.registerUser(user1);

  const loan = library.borrowBook('U1', 'ISBN-901');
  assert(!book.isAvailable, "7. Borrow Workflow: Marks book as unavailable");

  // TEST 6: Return with Overdue Fine Calculation (Strategy Pattern)
  const overdueDate = new Date(loan.dueDate);
  overdueDate.setDate(overdueDate.getDate() + 4); // 4 days overdue

  const { fineAssessed } = library.returnBook(loan.loanId, overdueDate);
  assert(book.isAvailable, "8. Return Workflow: Marks book as available again");
  assert(fineAssessed === 4.0, "9. Strategy Execution: Assesses correct fine using injected StandardFineStrategy");

  // TEST 7: Dynamic Strategy Swapping
  library.setFineStrategy(vipStrategy);
  assert(library.fineStrategy === vipStrategy, "10. Dynamic Strategy Swapping: Updates fine strategy at runtime");

  console.log("\n==================================================");
  console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
  console.log("==================================================");

  if (failed > 0) process.exit(1);
}

runTests();
