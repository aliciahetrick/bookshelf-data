// const book1 = new Book('author', 'english', 'horror', 'horror book')
// console.log(book1)
// const book2 = new Book('author2', 'english2', 'horror2', 'horror book2')
// console.log(book2)
// const book3 = new Book('author3', 'english3', 'horror3', 'horror book3')

// const bookshelf1 = new Bookshelf([book1, book2])
// console.log('bookshelf', bookshelf1)

// const newBookshelf = bookshelf1.addBook(book3)
// console.log(newBookshelf)

// console.log(bookData[0])

// const bookshelf = new Bookshelf(bookData)

//return instance of every book
//return an array
// function createBooksArray() {
//   let booksArray = []
//   for (let i = 0; i < bookData.length; i++) {
//     booksArray.push(bookData[i])
//   }
//   console.log(booksArray)
// }
// createBooksArray()
// // return bookshelf instance of all the books

// console.log(Object.values(bookData[0]))
// let author = Object.values(bookData[0])[0]
// console.log(author)

//return instance of every book
//return an array
function createBooks() {
  let arrOfBooks = []
  for (let i = 0; i < bookData.length; i++) {
    let author = Object.values(bookData[i])[0]
    let language = Object.values(bookData[i])[1]
    let subject = Object.values(bookData[i])[2]
    let title = Object.values(bookData[i])[3]
    let book = new Book(author, language, subject, title)
    arrOfBooks.push(book)
    // let values = Object.values(bookData[i])
    // console.log(new Book(values))
  }
  return arrOfBooks
}

const booksArray = createBooks()
const bookshelf = new Bookshelf(booksArray)
console.log(bookshelf)

// function createBookShelf() {
//   const bookshelf = []
//   for (let i = 0; i < createBooks().length; i++) {
//     createBooks()[i]
//   }
//   console.log(bookshelf)
// }

// createBookShelf()
// return bookshelf instance of all the books
