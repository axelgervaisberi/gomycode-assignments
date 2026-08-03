/**
 * Observer Pattern Subject: NotificationService
 * Manages subscribed observers (Users) and broadcasts notifications.
 */
class NotificationService {
  constructor() {
    this.observers = new Map(); // Key: userId, Value: User instance
  }

  // Subscribe an observer
  subscribe(user) {
    if (!this.observers.has(user.id)) {
      this.observers.set(user.id, user);
    }
  }

  // Unsubscribe an observer
  unsubscribe(userId) {
    this.observers.delete(userId);
  }

  // Broadcast notification to a specific user
  notifyUser(userId, message) {
    const user = this.observers.get(userId);
    if (user) {
      user.updateNotification(message);
    }
  }

  // Broadcast notification to all subscribed users
  notifyAll(message) {
    for (const observer of this.observers.values()) {
      observer.updateNotification(message);
    }
  }
}

module.exports = NotificationService;
