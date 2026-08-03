import { IObserver } from '../abstractions/IObserver.js';
import { Logger } from '../utils/logger.js';

/**
 * Observer Pattern Subject: EventPublisher
 */
export class EventPublisher {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    if (!(observer instanceof IObserver) && typeof observer.onEvent !== 'function') {
      throw new Error("Subscriber must implement IObserver contract with onEvent method.");
    }
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  publish(eventName, payload) {
    for (const observer of this.observers) {
      observer.onEvent(eventName, payload);
    }
  }
}

/**
 * Concrete Observer: ConsoleNotificationObserver
 */
export class ConsoleNotificationObserver extends IObserver {
  onEvent(eventName, payload) {
    Logger.info(`Event Broadcast [${eventName}]: ${JSON.stringify(payload)}`);
  }
}
