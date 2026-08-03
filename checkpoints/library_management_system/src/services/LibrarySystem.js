const Catalog = require('./Catalog');
const Transaction = require('../models/Transaction');

/**
 * LibrarySystem Class
 * Main controller facade coordinating UI interaction, catalog, accounts, and transactions.
 */
class LibrarySystem {
  constructor() {
    this.catalog = new Catalog();
    this.members = new Map();
    this.librarians = new Map();
    this.transactions = [];
    this.transactionCounter = 1;
  }

  registerMember(member) {
    if (this.members.has(member.id)) {
      throw new Error(`Member with ID '${member.id}' already exists.`);
    }
    this.members.set(member.id, member);
  }

  registerLibrarian(librarian) {
    if (this.librarians.has(librarian.id)) {
      throw new Error(`Librarian with ID '${librarian.id}' already exists.`);
    }
    this.librarians.set(librarian.id, librarian);
  }

  issueBook(memberId, isbn, loanPeriodDays = 14) {
    const member = this.members.get(memberId);
    if (!member) {
      throw new Error(`Member with ID '${memberId}' not found.`);
    }

    const book = this.catalog.getBookByIsbn(isbn);
    if (!book) {
      throw new Error(`Book with ISBN '${isbn}' not found.`);
    }

    if (!member.canBorrow()) {
      throw new Error(`Member '${member.name}' cannot borrow. Check borrowing limit or unpaid fines ($${member.fineBalance.toFixed(2)}).`);
    }

    book.markAsIssued();
    member.addLoan(book);

    const txnId = `TXN-${String(this.transactionCounter++).padStart(4, '0')}`;
    const transaction = new Transaction(txnId, member, book, loanPeriodDays);
    this.transactions.push(transaction);

    return transaction;
  }

  returnBook(memberId, isbn, simulatedCurrentDate = new Date()) {
    const member = this.members.get(memberId);
    if (!member) {
      throw new Error(`Member with ID '${memberId}' not found.`);
    }

    const transaction = this.transactions.find(
      (t) => t.member.id === memberId && t.book.isbn === isbn && !t.isReturned
    );

    if (!transaction) {
      throw new Error(`No active borrow transaction found for Member '${memberId}' and Book '${isbn}'.`);
    }

    const fineAssessed = transaction.completeReturn(simulatedCurrentDate);
    member.removeLoan(isbn);

    return { transaction, fineAssessed };
  }

  reserveBook(memberId, isbn) {
    const member = this.members.get(memberId);
    if (!member) {
      throw new Error(`Member with ID '${memberId}' not found.`);
    }

    const book = this.catalog.getBookByIsbn(isbn);
    if (!book) {
      throw new Error(`Book with ISBN '${isbn}' not found.`);
    }

    book.markAsReserved();
    return book;
  }
}

module.exports = LibrarySystem;
