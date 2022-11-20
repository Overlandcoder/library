let myLibrary = [];
const bookList = document.querySelector(".book-list");
const newBookButton = document.querySelector(".new-book");
const formItems = document.querySelectorAll(".form-item");

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

function displayAllBooks() {
  myLibrary.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.textContent = `Title: ${book.title}. Author: ${book.author}. Pages: ${book.numPages}.`;
    bookList.appendChild(div);
  })
}

function toggleDisplay(item) {
  if (item.style.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}

newBookButton.addEventListener("click", () => {
  formItems.forEach(item => item.classList.toggle("hidden"));
});

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 295, "read");
addBookToLibrary("The Something", "Cool Author", 255, "not read");
addBookToLibrary("The Lord", "Some Author", 495, "read");
addBookToLibrary("Some Book", "Another Author", 595, "not read");
displayAllBooks();
