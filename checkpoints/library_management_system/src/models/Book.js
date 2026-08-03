/**
 * Book Status Enum Definition
 */
const BookStatus = {
  AVAILABLE: 'AVAILABLE',
  ISSUED: 'ISSUED',
  RESERVED: 'RESERVED',
  LOST: 'LOST'
};

/**
 * Book Domain Class
 * Encapsulates book properties and state machine logic.
 */
class Book {
  constructor(isbn, title, author, category = 'General') {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.category = category;
    this.status = BookStatus.AVAILABLE;
  }

  markAsIssued() {
    if (this.status !== BookStatus.AVAILABLE && this.status !== BookStatus.RESERVED) {
      throw new Error(`Cannot issue book '${this.title}'. Current status: ${this.status}`);
    }
    this.status = BookStatus.ISSUED;
  }

  markAsReturned() {
    this.status = BookStatus.AVAILABLE;
  }

  markAsReserved() {
    if (this.status !== BookStatus.ISSUED) {
      throw new Error(`Cannot reserve book '${this.title}'. Book is not currently issued.`);
    }
    this.status = BookStatus.RESERVED;
  }

  isAvailable() {
    return this.status === BookStatus.AVAILABLE;
  }
}

module.exports = { Book, BookStatus };
