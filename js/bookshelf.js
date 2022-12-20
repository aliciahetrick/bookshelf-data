class Bookshelf {
  constructor(arrOfBooks) {
    this.arrOfBooks = arrOfBooks
  }

  /**
   * @returns array with newly added book
   */
  addBook(book) {
    this.arrOfBooks.push(book)
    return this.arrOfBooks
  }

  render() {
    //create booklist section
    const bookList = document.createElement('section')

    //loop through all books passed
    //render and append every book to the booklist
    for (let i = 0; i < this.arrOfBooks.length; i++) {
      const bookCard = this.arrOfBooks[i].render()
      bookList.append(bookCard)
    }

    //select and append bookList to main element
    const main = document.querySelector('main')
    bookList.classList.add('book-list')
    main.append(bookList)
  }
}
