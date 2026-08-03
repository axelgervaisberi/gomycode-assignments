/**
 * Catalog Class
 * Business logic service managing book collections and search queries.
 */
class Catalog {
  constructor() {
    this.books = new Map(); // Key: ISBN, Value: Book
  }

  addBook(book) {
    if (this.books.has(book.isbn)) {
      throw new Error(`Book with ISBN '${book.isbn}' already exists in catalog.`);
    }
    this.books.set(book.isbn, book);
  }

  removeBook(isbn) {
    if (!this.books.has(isbn)) {
      throw new Error(`Book with ISBN '${isbn}' not found in catalog.`);
    }
    this.books.delete(isbn);
  }

  getBookByIsbn(isbn) {
    return this.books.get(isbn) || null;
  }

  searchByTitle(query) {
    const term = query.toLowerCase();
    return Array.from(this.books.values()).filter((b) =>
      b.title.toLowerCase().includes(term)
    );
  }

  searchByAuthor(query) {
    const term = query.toLowerCase();
    return Array.from(this.books.values()).filter((b) =>
      b.author.toLowerCase().includes(term)
    );
  }

  searchByCategory(query) {
    const term = query.toLowerCase();
    return Array.from(this.books.values()).filter((b) =>
      b.category.toLowerCase().includes(term)
    );
  }
}

module.exports = Catalog;
