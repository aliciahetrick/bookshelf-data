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
    title.classList.add('book-title')

    //book image
    const image = document.createElement('img')
    image.src = 'book.png'
    image.classList.add('book-image')

    //book author
    const author = document.createElement('p')
    author.textContent = this.author
    author.classList.add('book-author')

    //book genre
    const subject = document.createElement('p')
    subject.textContent = `Genre: ${this.subject}`
    subject.classList.add('book-genre')

    //book language
    const language = document.createElement('p')
    language.textContent = this.language
    language.classList.add('book-language')

    //append book cards to bookCards section
    bookCards.append(language, title, image, author, subject)
    return bookCards
  }
}
