const LibrarySystem = require('./services/LibrarySystem');
const UserFactory = require('./models/UserFactory');
const Book = require('./models/Book');

function runDemo() {
  console.log("=================================================");
  console.log("📖 SMART LIBRARY MANAGEMENT SYSTEM DEMO");
  console.log("=================================================\n");

  // Get Singleton Instance
  const library = LibrarySystem.getInstance();

  console.log("--- 1. REGISTERING USERS (FACTORY PATTERN) ---");
  const student = UserFactory.createUser('student', 'STU-101', 'Axel Beri', 'axel.beri@gomycode.edu');
  const teacher = UserFactory.createUser('teacher', 'TCH-201', 'Prof. Alan Turing', 'turing@university.edu');

  library.addUser(student);
  library.addUser(teacher);

  console.log("\n--- 2. ADDING BOOKS TO CATALOG ---");
  const b1 = new Book('978-0132350884', 'Clean Code', 'Robert C. Martin');
  const b2 = new Book('978-0201633610', 'Design Patterns (GoF)', 'Erich Gamma et al.');
  const b3 = new Book('978-0134494166', 'Clean Architecture', 'Robert C. Martin');

  library.addBook(b1);
  library.addBook(b2);
  library.addBook(b3);

  console.log("\n--- 3. BORROWING TRANSACTIONS ---");
  library.borrowBook('STU-101', '978-0132350884');
  library.borrowBook('TCH-201', '978-0201633610');

  console.log("\n--- 4. VIEW BORROWED BOOKS ---");
  const studentBooks = library.getBorrowedBooks('STU-101');
  console.log(`Books currently borrowed by ${student.name}:`, studentBooks.map(b => b.title));

  console.log("\n--- 5. RETURNING A BOOK ---");
  library.returnBook('STU-101', '978-0132350884');

  console.log("\n--- 6. SIMULATING OVERDUE NOTIFICATIONS (OBSERVER PATTERN) ---");
  // Teacher borrowed Design Patterns (due in 30 days). Let's simulate date 35 days in the future:
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 35);
  library.simulateOverdueCheck(futureDate);

  console.log("\n--- 7. USER NOTIFICATION LOGS ---");
  console.log(`\nNotifications for ${teacher.name}:`);
  teacher.notifications.forEach(n => console.log(`  ${n}`));

  console.log("\n=================================================");
  console.log("✨ DEMO COMPLETED SUCCESSFULLY!");
  console.log("=================================================");
}

runDemo();
