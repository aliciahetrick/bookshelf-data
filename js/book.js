class Book {
  constructor(author, language, subject, title) {
    this.author = author
    this.language = language
    this.subject = subject
    this.title = title
  }

  render() {
    const bookCard = document.createElement('li')
    bookCard.classList = 'book'
    const title = document.createElement('p')
    title.textContent = this.title
    const author = document.createElement('p')
    author.textContent = this.author
    const subject = document.createElement('p')
    subject.textContent = this.subject
    const language = document.createElement('p')
    language.textContent = this.language
    bookCard.append(title, author, subject, language)
    return bookCard
  }
}
