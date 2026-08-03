/**
 * Abstract Base Class: User
 * Implements Observer Pattern listener interface (`updateNotification`).
 */
class User {
  constructor(id, name, email, maxBorrowLimit, borrowPeriodDays) {
    if (new.target === User) {
      throw new Error("Cannot instantiate abstract class 'User' directly.");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.maxBorrowLimit = maxBorrowLimit;
    this.borrowPeriodDays = borrowPeriodDays;
    this.borrowedBooks = [];
    this.notifications = [];
  }

  // Check if user can borrow more books
  canBorrow() {
    return this.borrowedBooks.length < this.maxBorrowLimit;
  }

  // Observer Pattern update callback
  updateNotification(message) {
    const timestamp = new Date().toISOString();
    const notification = `[${timestamp}] ${message}`;
    this.notifications.push(notification);
    console.log(`🔔 Notification for ${this.name} (${this.email}): ${message}`);
  }

  getRole() {
    throw new Error("Method 'getRole()' must be implemented by subclass.");
  }
}

/**
 * Concrete Subclass: Student
 * Max borrow limit: 3 books, Loan period: 14 days
 */
class Student extends User {
  constructor(id, name, email) {
    super(id, name, email, 3, 14);
  }

  getRole() {
    return 'Student';
  }
}

/**
 * Concrete Subclass: Teacher
 * Max borrow limit: 10 books, Loan period: 30 days
 */
class Teacher extends User {
  constructor(id, name, email) {
    super(id, name, email, 10, 30);
  }

  getRole() {
    return 'Teacher';
  }
}

module.exports = { User, Student, Teacher };
