/**
 * Transaction Class
 * Encapsulates borrowing transactions, timestamps, and fine calculation logic.
 */
class Transaction {
  constructor(transactionId, member, book, loanPeriodDays = 14, dailyFineRate = 1.0) {
    this.transactionId = transactionId;
    this.member = member;
    this.book = book;
    this.borrowDate = new Date();

    const dueDate = new Date(this.borrowDate);
    dueDate.setDate(dueDate.getDate() + loanPeriodDays);
    this.dueDate = dueDate;

    this.returnDate = null;
    this.isReturned = false;
    this.dailyFineRate = dailyFineRate;
    this.fineAmount = 0.0;
  }

  completeReturn(currentDate = new Date()) {
    this.returnDate = currentDate;
    this.isReturned = true;
    this.book.markAsReturned();

    // Calculate overdue fine if returned past due date
    if (currentDate > this.dueDate) {
      const diffTime = currentDate.getTime() - this.dueDate.getTime();
      const overdueDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      if (overdueDays > 0) {
        this.fineAmount = overdueDays * this.dailyFineRate;
        this.member.addFine(this.fineAmount);
      }
    }

    return this.fineAmount;
  }
}

module.exports = Transaction;
