const { Student, Teacher } = require('./User');

/**
 * Factory Pattern Class: UserFactory
 * Encapsulates the instantiation logic for different user roles (Student, Teacher).
 */
class UserFactory {
  static createUser(type, id, name, email) {
    const normalizedType = type.toLowerCase().trim();

    switch (normalizedType) {
      case 'student':
        return new Student(id, name, email);
      case 'teacher':
        return new Teacher(id, name, email);
      default:
        throw new Error(`Invalid user type: '${type}'. Supported types: 'student', 'teacher'.`);
    }
  }
}

module.exports = UserFactory;
