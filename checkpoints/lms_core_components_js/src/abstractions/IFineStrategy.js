/**
 * Interface-like Abstraction: IFineStrategy
 */
export class IFineStrategy {
  /**
   * Abstract Contract Method: calculateFine
   * @param {number} overdueDays
   * @returns {number} Calculated fine amount
   */
  calculateFine(overdueDays) {
    throw new Error("Interface method 'calculateFine(overdueDays)' must be implemented by concrete strategy.");
  }
}
