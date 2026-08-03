import { IFineStrategy } from '../abstractions/IFineStrategy.js';

/**
 * Strategy Pattern 1: Standard Fine Strategy ($1 per day overdue)
 */
export class StandardFineStrategy extends IFineStrategy {
  constructor(dailyRate = 1.0) {
    super();
    this.dailyRate = dailyRate;
  }

  calculateFine(overdueDays) {
    if (overdueDays <= 0) return 0.0;
    return overdueDays * this.dailyRate;
  }
}

/**
 * Strategy Pattern 2: VIP Fine Strategy (50% discount on overdue fees)
 */
export class VIPFineStrategy extends IFineStrategy {
  constructor(dailyRate = 1.0, discountRatio = 0.5) {
    super();
    this.dailyRate = dailyRate;
    this.discountRatio = discountRatio;
  }

  calculateFine(overdueDays) {
    if (overdueDays <= 0) return 0.0;
    return overdueDays * this.dailyRate * this.discountRatio;
  }
}
