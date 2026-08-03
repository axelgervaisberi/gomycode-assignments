/**
 * Book Class
 * Encapsulates book details and availability status.
 */
class Book {
  constructor(isbn, title, author) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  markAsBorrowed() {
    if (!this.isAvailable) {
      throw new Error(`Book '${this.title}' (ISBN: ${this.isbn}) is currently unavailable.`);
    }
    this.isAvailable = false;
  }

  markAsReturned() {
    this.isAvailable = true;
  }
}

module.exports = Book;
