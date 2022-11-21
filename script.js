let myLibrary = [];
const bookList = document.querySelector(".book-list");
const newBookButton = document.querySelector(".new-book");
const formItems = document.querySelectorAll(".form-item");
const addBookButton = document.querySelector(".add-book");

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read == "read" ? "Yes" : "No";
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
  const removeBookButton = document.createElement("button");
  removeBookButton.textContent = "Remove";
  removeBookButton.classList.add("remove-book");
  div.appendChild(removeBookButton);
  removeBookButton.setAttribute("data-book-id", myLibrary.indexOf(book) + 1);
  div.setAttribute("id", myLibrary.indexOf(book) + 1);
  bookList.appendChild(div);
}

function toggleDisplay(item) {
  if (item.style.display === "none") {
    item.style.display = "block";
  } else {
    item.style.display = "none";
  }
}

function addListenerToRemoveButtons(){
  const removeBookButtons = document.querySelectorAll(".remove-book");
  removeBookButtons.forEach(btn => btn.addEventListener("click", () => {
    let bookId = btn.getAttribute("data-book-id")
    const bookToRemove = document.getElementById(bookId);
    bookList.removeChild(bookToRemove);
    let bookObjectToRemove = myLibrary[bookId - 1]
    myLibrary = myLibrary.filter(book => book !== bookObjectToRemove);
  }))
}

function customSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayBook(myLibrary.at(-1));
  addListenerToRemoveButtons();
}

newBookButton.addEventListener("click", () => {
  formItems.forEach(item => item.classList.toggle("hidden"));
});

addBookButton.addEventListener("click", customSubmit);

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 295, "read");
addBookToLibrary("The Something", "Cool Author", 255, "not read");
addBookToLibrary("The Lord", "Some Author", 495, "read");
addBookToLibrary("Some Book", "Another Author", 595, "not read");
displayAllBooks();
addListenerToRemoveButtons();
