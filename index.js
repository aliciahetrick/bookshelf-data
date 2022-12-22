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

//renders bookshelf on the page
bookshelf.render()

//adds Book to Bookshelf when add-button clicked
const button = document.querySelector('.add-book-button')
button.addEventListener('click', function () {
  let title = document.querySelector('.title')
  let author = document.querySelector('.author')
  let language = document.querySelector('.language')
  let subject = document.querySelector('.subject')
  let newBook = {
    title: title.value,
    author: author.value,
    language: language.value,
    subject: subject.value,
  }
  console.log(newBook)
})
