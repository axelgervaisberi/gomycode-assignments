import { AbstractUser } from '../abstractions/AbstractUser.js';

class StandardUser extends AbstractUser {
  constructor(id, name, email) {
    super(id, name, email, 'Standard');
  }
  getMaxBorrowLimit() { return 3; }
  getLoanPeriodDays() { return 14; }
}

class VIPUser extends AbstractUser {
  constructor(id, name, email) {
    super(id, name, email, 'VIP');
  }
  getMaxBorrowLimit() { return 10; }
  getLoanPeriodDays() { return 30; }
}

/**
 * Factory Pattern Module: UserFactory
 */
export class UserFactory {
  static createUser(type, id, name, email) {
    const roleType = String(type).toLowerCase().trim();
    switch (roleType) {
      case 'standard':
      case 'student':
        return new StandardUser(id, name, email);
      case 'vip':
      case 'teacher':
        return new VIPUser(id, name, email);
      default:
        throw new Error(`Unsupported user type: '${type}'`);
    }
  }
}
