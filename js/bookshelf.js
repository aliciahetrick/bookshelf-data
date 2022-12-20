class Bookshelf {
  constructor(arrOfBooks) {
    this.arrOfBooks = arrOfBooks
  }

  addBook(book) {
    this.arrOfBooks.push(book)
    return this.arrOfBooks
  }

  render() {
    const bookList = document.createElement('ul')
    for (let i = 0; i < this.arrOfBooks.length; i++) {
      const bookCard = this.arrOfBooks[i].render()
      bookList.append(bookCard)
    }
    const main = document.querySelector('main')
    main.append(bookList)
  }
}
