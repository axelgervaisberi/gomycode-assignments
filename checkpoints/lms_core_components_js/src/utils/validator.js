/**
 * Reusable Validation Utility Module
 */
export const Validator = {
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  },

  validateNonEmpty(value, fieldName) {
    if (!value || String(value).trim() === '') {
      throw new Error(`Validation Error: '${fieldName}' cannot be empty.`);
    }
  }
};
