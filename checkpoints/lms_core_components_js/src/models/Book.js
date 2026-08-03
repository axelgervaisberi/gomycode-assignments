/**
 * Book Domain Class
 */
export class Book {
  constructor(isbn, title, author) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrowBook() {
    if (!this.isAvailable) {
      throw new Error(`Book '${this.title}' is currently unavailable.`);
    }
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }
}
