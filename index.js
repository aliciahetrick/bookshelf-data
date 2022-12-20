/**
 * creates instances of every book using book-data.js
 * @returns array of newly creted book instances
 */
function createBooks() {
  let arrOfBooks = []
  for (let i = 0; i < bookData.length; i++) {
    let author = Object.values(bookData[i])[0]
    let language = Object.values(bookData[i])[1]
    let subject = Object.values(bookData[i])[2]
    let title = Object.values(bookData[i])[3]
    let book = new Book(author, language, subject, title)
    arrOfBooks.push(book)
  }
  return arrOfBooks
}

/**
creates a new instance of bookshelf using books created in createBooks()
 * @returns an array of book objects
 */

const booksArray = createBooks()
const bookshelf = new Bookshelf(booksArray)
// console.log(bookshelf)

/**
 * renders bookshelf on the page
 */
bookshelf.render()
