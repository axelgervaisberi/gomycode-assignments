import { UserFactory } from './src/patterns/UserFactory.js';
import { StandardFineStrategy, VIPFineStrategy } from './src/patterns/FineStrategies.js';
import { EventPublisher, ConsoleNotificationObserver } from './src/patterns/EventPublisher.js';
import { LibraryManager } from './src/services/LibraryManager.js';
import { Book } from './src/models/Book.js';
import { Logger } from './src/utils/logger.js';

function runDemo() {
  console.log("==================================================");
  console.log("LMS CORE COMPONENTS (ES MODULES & DESIGN PATTERNS)");
  console.log("==================================================\n");

  Logger.info("1. Instantiating Dependencies for Injection...");
  const eventPublisher = new EventPublisher();
  const consoleObserver = new ConsoleNotificationObserver();
  eventPublisher.subscribe(consoleObserver);

  const standardFineStrategy = new StandardFineStrategy(1.50); // $1.50 per day
  const vipFineStrategy = new VIPFineStrategy(1.50, 0.5);       // 50% discount

  Logger.info("2. Injecting Dependencies into LibraryManager (Dependency Injection)...");
  const libraryManager = new LibraryManager(standardFineStrategy, eventPublisher);

  Logger.info("3. Registering Users via UserFactory (Factory Pattern)...");
  const user1 = UserFactory.createUser('standard', 'U101', 'Axel Beri', 'axel@gomycode.com');
  const user2 = UserFactory.createUser('vip', 'U202', 'Dr. Alan Turing', 'turing@university.edu');

  libraryManager.registerUser(user1);
  libraryManager.registerUser(user2);

  Logger.info("4. Cataloging Books...");
  const b1 = new Book('978-0132350884', 'Clean Code', 'Robert C. Martin');
  const b2 = new Book('978-0201633610', 'Design Patterns', 'Erich Gamma et al.');
  libraryManager.addBook(b1);
  libraryManager.addBook(b2);

  Logger.info("5. Executing Borrow Workflows...");
  const loan1 = libraryManager.borrowBook('U101', '978-0132350884');

  Logger.info("6. Simulating Overdue Return with Standard Strategy...");
  const overdueDate = new Date(loan1.dueDate);
  overdueDate.setDate(overdueDate.getDate() + 3); // 3 days overdue

  const { fineAssessed: stdFine } = libraryManager.returnBook(loan1.loanId, overdueDate);
  console.log(`Standard Fine Assessed (3 days @ $1.50/day): $${stdFine.toFixed(2)}`);

  Logger.info("7. Swapping Strategy to VIP Strategy dynamically (Strategy Pattern)...");
  libraryManager.setFineStrategy(vipFineStrategy);

  const loan2 = libraryManager.borrowBook('U202', '978-0201633610');
  const { fineAssessed: vipFine } = libraryManager.returnBook(loan2.loanId, overdueDate);
  console.log(`VIP Discounted Fine Assessed (3 days @ $0.75/day): $${vipFine.toFixed(2)}`);

  console.log("\n==================================================");
  console.log("DEMO RUNNER COMPLETED SUCCESSFULLY");
  console.log("==================================================");
}

runDemo();
