const { Account } = require('./Member');

/**
 * Librarian Class extending Account
 * Encapsulates administrative roles and employee identity.
 */
class Librarian extends Account {
  constructor(id, name, email, employeeId) {
    super(id, name, email);
    this.employeeId = employeeId;
  }

  getRole() {
    return 'Librarian';
  }
}

module.exports = Librarian;
