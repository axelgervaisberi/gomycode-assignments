/**
 * Abstract Base Class / Interface Abstraction: AbstractUser
 */
export class AbstractUser {
  constructor(id, name, email, role) {
    if (new.target === AbstractUser) {
      throw new Error("Cannot instantiate interface abstraction 'AbstractUser' directly.");
    }
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }

  /**
   * Abstract Contract Method: getMaxBorrowLimit
   */
  getMaxBorrowLimit() {
    throw new Error("Abstract method 'getMaxBorrowLimit()' must be implemented by subclass.");
  }

  /**
   * Abstract Contract Method: getLoanPeriodDays
   */
  getLoanPeriodDays() {
    throw new Error("Abstract method 'getLoanPeriodDays()' must be implemented by subclass.");
  }
}
