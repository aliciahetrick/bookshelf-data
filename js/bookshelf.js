class Bookshelf {
  constructor(arrOfBooks) {
    this.arrOfBooks = arrOfBooks
  }

  addBook(book) {
    this.arrOfBooks.push(book)
    return this.arrOfBooks
  }
}

const book1 = new Book('author', 'english', 'horror', 'horror book')
console.log(book1)
const book2 = new Book('author2', 'english2', 'horror2', 'horror book2')
console.log(book2)

const bookshelf1 = new Bookshelf([book1, book2])
console.log('bookshelf', bookshelf1)
