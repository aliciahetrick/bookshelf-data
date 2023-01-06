class Bookshelf {
  /**
   * `Bookshelf` contains an array of `Book`s
   * @param {Book[]} arrOfBooks
   */
  constructor(arrOfBooks) {
    this.arrOfBooks = arrOfBooks
  }

  /**
   * @param {object} book
   * @returns array with newly added book
   */
  addBook(book) {
    this.arrOfBooks.push(book)
    return this.arrOfBooks
  }

  render() {
    //create booklist section
    const bookList = document.createElement('section')

    //for every book, render and append to bookList
    const renderedBookshelf = this.arrOfBooks.map((book) => {
      bookList.append(book.render())
    })

    //select and append bookList to main element
    const main = document.querySelector('main')
    bookList.classList.add('book-list')
    main.append(bookList)
  }
}
