/**
 * Interface-like Abstraction: IObserver
 */
export class IObserver {
  /**
   * Abstract Contract Method: onEvent
   * @param {string} eventName
   * @param {object} payload
   */
  onEvent(eventName, payload) {
    throw new Error("Interface method 'onEvent(eventName, payload)' must be implemented by concrete observer.");
  }
}
