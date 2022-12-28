class Book {
  /**
   * `Book` represents a book and contains information to describe a book.
   * @param {string[]} author
   * @param {string} language
   * @param {string[]} subject
   * @param {string} title
   */
  constructor(author, language, subject, title) {
    this.author = author
    this.language = language
    this.subject = subject
    this.title = title
  }

  /**
   *
   * @returns HTML Element
   */
  render() {
    //create book cards
    const bookCards = document.createElement('section')
    bookCards.classList.add('book-card')

    //create and set book title
    const title = document.createElement('p')
    title.textContent = this.title
    title.classList.add('book-title')

    //create and set book image
    const image = document.createElement('img')
    image.src = 'book.png'
    image.classList.add('book-image')

    //create and set book author
    const author = document.createElement('p')
    author.textContent = this.author
    author.classList.add('book-author')

    //create and set book genre
    const subject = document.createElement('p')
    subject.textContent = `Genre: ${this.subject}`
    subject.classList.add('book-genre')

    //create and set book language
    const language = document.createElement('p')
    language.textContent = this.language
    language.classList.add('book-language')

    //append book cards to bookCards section
    bookCards.append(language, title, image, author, subject)
    return bookCards
  }
}
