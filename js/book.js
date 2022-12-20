class Book {
  constructor(author, language, subject, title) {
    this.author = author
    this.language = language
    this.subject = subject
    this.title = title
  }

  render() {
    //book cards
    const bookCards = document.createElement('section')
    bookCards.classList.add('book-card')

    //book title
    const title = document.createElement('p')
    title.textContent = this.title

    //book image
    const image = document.createElement('img')
    image.src = 'book.png'
    image.classList.add('book-image')

    //book author
    const author = document.createElement('p')
    author.textContent = this.author

    //book genre
    const subject = document.createElement('p')
    subject.textContent = `Genre: ${this.subject}`

    //book language
    const language = document.createElement('p')
    language.textContent = `Language: ${this.language}`

    //append book cards to
    bookCards.append(title, image, author, subject, language)
    return bookCards
  }
}
