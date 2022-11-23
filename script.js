let myLibrary = [];
const bookList = document.querySelector(".book-list");
const newBookButton = document.querySelector(".new-book");
const formItems = document.querySelectorAll(".form-item");
const addBookButton = document.querySelector(".add-book");
const cancelButton = document.querySelector(".cancel");

class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
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
  const div = createBookDiv(book);
  const removeBookButton = createRemoveBookButton();
  const readCheckbox = createCheckbox();
  readCheckbox.checked = book.read;
  div.appendChild(readCheckbox);
  div.appendChild(removeBookButton);
  addListenerToRemoveButton(removeBookButton);
  addListenerToCheckbox(readCheckbox);
  div.setAttribute("id", myLibrary.indexOf(book) + 1);
  bookList.appendChild(div);
}

function createBookDiv(book) {
  const div = document.createElement("div");
  div.textContent = `${book.title} by ${book.author}. Pages: ${book.numPages}. Read:`;
  div.classList.add("book");
  return div;
}

function createRemoveBookButton() {
  const removeBookButton = document.createElement("button");
  removeBookButton.textContent = "Remove";
  removeBookButton.classList.add("remove-book");
  return removeBookButton;
}

function createCheckbox() {
  const readCheckbox = document.createElement("INPUT");
  readCheckbox.setAttribute("type", "checkbox");
  readCheckbox.classList.add("read-checkbox");
  return readCheckbox;
}

function addListenerToRemoveButton(btn) {
  btn.addEventListener("click", () => {
    let bookId = btn.closest(".book").id;
    const bookToRemove = document.getElementById(bookId);
    bookList.removeChild(bookToRemove);
    let bookObjectToRemove = myLibrary[bookId - 1]
    myLibrary = myLibrary.filter(book => book !== bookObjectToRemove);
  })
}

function addListenerToCheckbox(cbox) {
  cbox.addEventListener("click", () => {
    let bookId = cbox.closest(".book").id;
    const selectedBook = myLibrary[bookId - 1];
    selectedBook.read = !selectedBook.read;
  })
}

function customSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  displayBook(myLibrary.at(-1));
}

newBookButton.addEventListener("click", () => {
  formItems.forEach(item => item.classList.toggle("hidden"));
});

cancelButton.addEventListener("click", () => {
  formItems.forEach(item => item.classList.toggle("hidden"));
})

addBookButton.addEventListener("click", customSubmit);

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Something", "Cool Author", 255, false);
addBookToLibrary("The Lord", "Some Author", 495, true);
addBookToLibrary("Some Book", "Another Author", 595, false);
displayAllBooks();

const removeButtons = document.querySelectorAll(".remove-book");
removeButtons.forEach(btn => addListenerToRemoveButton(btn));
