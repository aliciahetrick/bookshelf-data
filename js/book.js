class Book {
  constructor(author, language, subject, title) {
    this.author = author
    this.language = language
    this.subject = subject
    this.title = title
  }
}

const book1 = new Book('author', 'english', 'horror', 'horror book')
console.log(book1)
