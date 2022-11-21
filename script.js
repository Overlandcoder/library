let myLibrary = [];
const bookList = document.querySelector(".book-list");
const newBookButton = document.querySelector(".new-book");
const formItems = document.querySelectorAll(".form-item");
const addBookButton = document.querySelector(".add-book");

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
  myLibrary.forEach(book => displayBook(book));
}

function displayBook(book) {
  const div = document.createElement("div");
  div.textContent = `Title: ${book.title}. Author: ${book.author}. Pages: ${book.numPages}.`;
  div.classList.add("book");
  const btn = document.createElement("button");
  btn.textContent = "Remove";
  bookList.appendChild(div);
  div.appendChild(btn);
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

addBookButton.addEventListener("click", customSubmit);

function customSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayBook(myLibrary.at(-1));
}

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 295, "read");
addBookToLibrary("The Something", "Cool Author", 255, "not read");
addBookToLibrary("The Lord", "Some Author", 495, "read");
addBookToLibrary("Some Book", "Another Author", 595, "not read");
displayAllBooks();
