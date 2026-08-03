/**
 * BorrowTransaction Class
 * Tracks borrowing transactions, due dates, and return status.
 */
class BorrowTransaction {
  constructor(transactionId, user, book, borrowPeriodDays) {
    this.transactionId = transactionId;
    this.user = user;
    this.book = book;
    this.borrowDate = new Date();
    
    // Calculate due date based on user type borrow period
    const dueDate = new Date(this.borrowDate);
    dueDate.setDate(dueDate.getDate() + borrowPeriodDays);
    this.dueDate = dueDate;

    this.returnDate = null;
    this.isReturned = false;
  }

  completeReturn() {
    this.returnDate = new Date();
    this.isReturned = true;
    this.book.markAsReturned();
  }

  isOverdue(currentDate = new Date()) {
    return !this.isReturned && currentDate > this.dueDate;
  }
}

module.exports = BorrowTransaction;
