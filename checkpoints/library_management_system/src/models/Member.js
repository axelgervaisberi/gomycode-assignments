/**
 * Base Account Class
 */
class Account {
  constructor(id, name, email) {
    if (new.target === Account) {
      throw new Error("Cannot instantiate abstract class 'Account' directly.");
    }
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getRole() {
    throw new Error("Method 'getRole()' must be implemented by subclass.");
  }
}

/**
 * Member Class extending Account
 * Encapsulates member limits, active loans, and fine balances.
 */
class Member extends Account {
  constructor(id, name, email, maxBorrowLimit = 5) {
    super(id, name, email);
    this.maxBorrowLimit = maxBorrowLimit;
    this.activeLoans = [];
    this.fineBalance = 0.0;
  }

  getRole() {
    return 'Member';
  }

  canBorrow() {
    return this.activeLoans.length < this.maxBorrowLimit && this.fineBalance === 0;
  }

  addLoan(book) {
    this.activeLoans.push(book);
  }

  removeLoan(isbn) {
    this.activeLoans = this.activeLoans.filter((b) => b.isbn !== isbn);
  }

  addFine(amount) {
    this.fineBalance += amount;
  }

  payFine(amount) {
    if (amount <= 0) {
      throw new Error("Payment amount must be greater than zero.");
    }
    this.fineBalance = Math.max(0, this.fineBalance - amount);
    return this.fineBalance;
  }
}

module.exports = { Account, Member };
