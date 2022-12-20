class Bookshelf {
  constructor(arrOfBooks) {
    this.arrOfBooks = arrOfBooks
  }

  addBook(book) {
    this.arrOfBooks.push(book)
    return this.arrOfBooks
  }
}
