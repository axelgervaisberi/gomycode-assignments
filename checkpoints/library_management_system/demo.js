const LibrarySystem = require('./src/services/LibrarySystem');
const { Book } = require('./src/models/Book');
const { Member } = require('./src/models/Member');
const Librarian = require('./src/models/Librarian');

function runDemo() {
  console.log("=================================================");
  console.log("LIBRARY MANAGEMENT SYSTEM (LMS) DEMO RUNNER");
  console.log("=================================================\n");

  const system = new LibrarySystem();

  console.log("--- 1. REGISTERING ACCOUNTS ---");
  const member = new Member('M1001', 'Axel Beri', 'axel.beri@proton.me', 3);
  const librarian = new Librarian('L2001', 'Emily Watson', 'emily@library.org', 'EMP-102');
  system.registerMember(member);
  system.registerLibrarian(librarian);
  console.log(`Registered Member: ${member.name} (ID: ${member.id}, Max Quota: ${member.maxBorrowLimit})`);
  console.log(`Registered Librarian: ${librarian.name} (Employee ID: ${librarian.employeeId})`);

  console.log("\n--- 2. ADDING BOOKS TO CATALOG ---");
  const books = [
    new Book('978-0132350884', 'Clean Code', 'Robert C. Martin', 'Software Engineering'),
    new Book('978-0201633610', 'Design Patterns', 'Erich Gamma et al.', 'Software Architecture'),
    new Book('978-0134494166', 'Clean Architecture', 'Robert C. Martin', 'Software Architecture')
  ];

  books.forEach((b) => system.catalog.addBook(b));
  console.log(`Added ${books.length} books to the catalog.`);

  console.log("\n--- 3. CATALOG SEARCH ---");
  const searchResults = system.catalog.searchByAuthor('Robert C. Martin');
  console.log("Search Results for author 'Robert C. Martin':");
  searchResults.forEach((b) => console.log(`  - "${b.title}" (ISBN: ${b.isbn}) - Status: ${b.status}`));

  console.log("\n--- 4. ISSUING A BOOK ---");
  const txn = system.issueBook('M1001', '978-0132350884', 14);
  console.log(`Issued "${txn.book.title}" to ${txn.member.name}. Transaction ID: ${txn.transactionId}`);
  console.log(`Borrow Date: ${txn.borrowDate.toDateString()} | Due Date: ${txn.dueDate.toDateString()}`);
  console.log(`Book Status: ${txn.book.status}`);

  console.log("\n--- 5. RETURNING A BOOK (WITH OVERDUE SIMULATION) ---");
  // Simulate returning 18 days later (4 days overdue)
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 18);

  const { fineAssessed } = system.returnBook('M1001', '978-0132350884', returnDate);
  console.log(`Returned "${txn.book.title}" on ${returnDate.toDateString()}`);
  console.log(`Overdue Fine Assessed: $${fineAssessed.toFixed(2)}`);
  console.log(`Member Outstanding Fine Balance: $${member.fineBalance.toFixed(2)}`);
  console.log(`Book Status: ${txn.book.status}`);

  console.log("\n--- 6. PAYING FINES ---");
  member.payFine(fineAssessed);
  console.log(`Paid fine. Updated Outstanding Balance: $${member.fineBalance.toFixed(2)}`);

  console.log("\n=================================================");
  console.log("DEMO RUNNER COMPLETED SUCCESSFULLY");
  console.log("=================================================");
}

runDemo();
