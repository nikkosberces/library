const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const addBtn = document.getElementById("add-book-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addNewBook(event) {
  event.preventDefault();
  const book = new Book(title.value, author.value, pages.value);

  library.push(book);

  clearInputs();
  closeModal();
}

function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modal.style.display = "flex";
}

addBtn.addEventListener("click", addNewBook);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
