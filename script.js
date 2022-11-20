let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read == "read" ? "read" : "not read";
  this.info = function () {
    return `${title} by ${author}, ${numPages} pages, has ${read}.`;
  }
}

function addBookToLibrary(title, author, numPages, read) {
  const newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
}

function listAllBooks() {
  myLibrary.forEach(book => {
    console.log(`Title: ${book.title}. Author: ${book.author}. Pages: ${book.numPages}.`);
  })
}

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 295, "read");
addBookToLibrary("The Something", "Cool Author", 255, "not read");
addBookToLibrary("The Lord", "Some Author", 495, "read");
addBookToLibrary("Some Book", "Another Author", 595, "not read");
