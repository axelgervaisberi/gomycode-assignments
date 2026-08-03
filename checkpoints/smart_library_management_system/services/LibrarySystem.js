const NotificationService = require('./NotificationService');
const BorrowTransaction = require('../models/BorrowTransaction');

let instance = null;

/**
 * Singleton Pattern Class: LibrarySystem
 * Central management facade for users, books, and borrowing transactions.
 */
class LibrarySystem {
  constructor() {
    if (instance) {
      throw new Error("LibrarySystem is a Singleton! Use LibrarySystem.getInstance().");
    }

    this.users = new Map();
    this.books = new Map();
    this.transactions = [];
    this.notificationService = new NotificationService();
    this.transactionIdCounter = 1;

    instance = this;
  }

  // Singleton Instance Accessor
  static getInstance() {
    if (!instance) {
      instance = new LibrarySystem();
    }
    return instance;
  }

  // Reset instance (for testing purposes)
  static resetInstance() {
    instance = null;
  }

  // Add User
  addUser(user) {
    if (this.users.has(user.id)) {
      throw new Error(`User with ID '${user.id}' already exists.`);
    }
    this.users.set(user.id, user);
    this.notificationService.subscribe(user);
    console.log(`👤 Registered User: [${user.getRole()}] ${user.name} (ID: ${user.id})`);
  }

  // Add Book
  addBook(book) {
    if (this.books.has(book.isbn)) {
      throw new Error(`Book with ISBN '${book.isbn}' already exists.`);
    }
    this.books.set(book.isbn, book);
    console.log(`📚 Added Book: "${book.title}" by ${book.author} (ISBN: ${book.isbn})`);
  }

  // Borrow Book
  borrowBook(userId, isbn) {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User with ID '${userId}' not found.`);
    }

    const book = this.books.get(isbn);
    if (!book) {
      throw new Error(`Book with ISBN '${isbn}' not found.`);
    }

    if (!book.isAvailable) {
      throw new Error(`Book "${book.title}" is currently unavailable.`);
    }

    if (!user.canBorrow()) {
      throw new Error(`User ${user.name} has reached maximum borrow limit (${user.maxBorrowLimit} books).`);
    }

    // Mark book as borrowed and create transaction
    book.markAsBorrowed();
    const transactionId = `TXN-${this.transactionIdCounter++}`;
    const transaction = new BorrowTransaction(transactionId, user, book, user.borrowPeriodDays);

    user.borrowedBooks.push(book);
    this.transactions.push(transaction);

    console.log(`✅ Borrow Successful: ${user.name} borrowed "${book.title}". Due date: ${transaction.dueDate.toDateString()}`);
    this.notificationService.notifyUser(user.id, `You borrowed "${book.title}". Please return it by ${transaction.dueDate.toDateString()}.`);

    return transaction;
  }

  // Return Book
  returnBook(userId, isbn) {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User with ID '${userId}' not found.`);
    }

    const transaction = this.transactions.find(
      (t) => t.user.id === userId && t.book.isbn === isbn && !t.isReturned
    );

    if (!transaction) {
      throw new Error(`Active borrow transaction not found for User '${userId}' and Book '${isbn}'.`);
    }

    transaction.completeReturn();
    user.borrowedBooks = user.borrowedBooks.filter((b) => b.isbn !== isbn);

    console.log(`🔄 Return Successful: ${user.name} returned "${transaction.book.title}".`);
    this.notificationService.notifyUser(user.id, `Thank you for returning "${transaction.book.title}".`);

    return transaction;
  }

  // View Borrowed Books for a User
  getBorrowedBooks(userId) {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User with ID '${userId}' not found.`);
    }
    return user.borrowedBooks;
  }

  // Simulate Overdue Check & Trigger Observer Notifications
  simulateOverdueCheck(simulatedCurrentDate) {
    console.log(`\n⏳ Running Simulated Overdue Check for Date: ${simulatedCurrentDate.toDateString()}...`);
    let overdueCount = 0;

    for (const transaction of this.transactions) {
      if (transaction.isOverdue(simulatedCurrentDate)) {
        overdueCount++;
        const message = `⚠️ OVERDUE ALERT: Book "${transaction.book.title}" was due on ${transaction.dueDate.toDateString()}. Please return it immediately.`;
        this.notificationService.notifyUser(transaction.user.id, message);
      }
    }

    if (overdueCount === 0) {
      console.log(`✨ No overdue books found for ${simulatedCurrentDate.toDateString()}.`);
    }
  }
}

module.exports = LibrarySystem;
