import { DateUtils } from '../utils/dateUtils.js';
import { Logger } from '../utils/logger.js';
import { Validator } from '../utils/validator.js';

/**
 * Service: LibraryManager
 * Demonstrates Dependency Injection: Accepts 'fineStrategy' and 'eventPublisher' via constructor.
 */
export class LibraryManager {
  /**
   * @param {object} fineStrategy - Injected strategy implementation (IFineStrategy)
   * @param {object} eventPublisher - Injected observer publisher (EventPublisher)
   */
  constructor(fineStrategy, eventPublisher) {
    if (!fineStrategy || typeof fineStrategy.calculateFine !== 'function') {
      throw new Error("Dependency Injection Failure: Valid fineStrategy must be provided.");
    }
    if (!eventPublisher || typeof eventPublisher.publish !== 'function') {
      throw new Error("Dependency Injection Failure: Valid eventPublisher must be provided.");
    }

    this.fineStrategy = fineStrategy;
    this.eventPublisher = eventPublisher;

    this.books = new Map();
    this.users = new Map();
    this.activeLoans = new Map(); // Key: loanId, Value: loan record
    this.loanCounter = 1;
  }

  // Swap fine strategy dynamically (Strategy Pattern)
  setFineStrategy(newStrategy) {
    if (!newStrategy || typeof newStrategy.calculateFine !== 'function') {
      throw new Error("Invalid fine strategy instance.");
    }
    this.fineStrategy = newStrategy;
    Logger.info(`Updated Fine Strategy to: ${newStrategy.constructor.name}`);
  }

  addBook(book) {
    Validator.validateNonEmpty(book.isbn, 'ISBN');
    this.books.set(book.isbn, book);
    this.eventPublisher.publish('BOOK_ADDED', { isbn: book.isbn, title: book.title });
  }

  registerUser(user) {
    Validator.validateNonEmpty(user.id, 'User ID');
    Validator.validateEmail(user.email);
    this.users.set(user.id, user);
    this.eventPublisher.publish('USER_REGISTERED', { id: user.id, name: user.name, role: user.role });
  }

  borrowBook(userId, isbn) {
    const user = this.users.get(userId);
    if (!user) throw new Error(`User ID '${userId}' not found.`);

    const book = this.books.get(isbn);
    if (!book) throw new Error(`Book ISBN '${isbn}' not found.`);

    book.borrowBook();

    const borrowDate = new Date();
    const dueDate = DateUtils.addDays(borrowDate, user.getLoanPeriodDays());
    const loanId = `LOAN-${this.loanCounter++}`;

    const loanRecord = { loanId, user, book, borrowDate, dueDate, isReturned: false };
    this.activeLoans.set(loanId, loanRecord);

    this.eventPublisher.publish('BOOK_BORROWED', {
      loanId,
      userId: user.id,
      userName: user.name,
      bookTitle: book.title,
      dueDate: dueDate.toISOString()
    });

    return loanRecord;
  }

  returnBook(loanId, simulatedReturnDate = new Date()) {
    const loanRecord = this.activeLoans.get(loanId);
    if (!loanRecord || loanRecord.isReturned) {
      throw new Error(`Active loan ID '${loanId}' not found.`);
    }

    loanRecord.isReturned = true;
    loanRecord.book.returnBook();

    const overdueDays = DateUtils.calculateOverdueDays(loanRecord.dueDate, simulatedReturnDate);
    const fineAssessed = this.fineStrategy.calculateFine(overdueDays);

    this.eventPublisher.publish('BOOK_RETURNED', {
      loanId,
      userId: loanRecord.user.id,
      bookTitle: loanRecord.book.title,
      overdueDays,
      fineAssessed
    });

    return { loanRecord, overdueDays, fineAssessed };
  }
}
