/**
 * creates instances of every book using book-data.js
 * @returns array of newly created book instances
 */
function createBooks() {
  let arrOfBooks = []
  for (let i = 0; i < bookData.length; i++) {
    let author = bookData[i].author
    let language = bookData[i].language
    let subject = bookData[i].subject
    let title = bookData[i].title
    let book = new Book(author, language, subject, title)
    arrOfBooks.push(book)
  }
  return arrOfBooks
}

// creates a new instance of bookshelf using books created in createBooks()
const booksArray = createBooks()
const bookshelf = new Bookshelf(booksArray)

// renders bookshelf on the page
bookshelf.render()

// adds Book to Bookshelf when add-button clicked
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
