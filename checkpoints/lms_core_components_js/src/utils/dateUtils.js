/**
 * Reusable Date Calculation Utility Module
 */
export const DateUtils = {
  addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  calculateOverdueDays(dueDate, returnDate = new Date()) {
    if (returnDate <= dueDate) return 0;
    const diffTime = Math.abs(returnDate - dueDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
};
