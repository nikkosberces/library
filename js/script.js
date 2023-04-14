const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const addBookBtn = document.getElementById("add-book-btn");
const modal = document.getElementById("modal");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const main = document.getElementById("main");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  return str.join(" ");
}

function addNewBook(event) {
  event.preventDefault();

  if (title.value === "" || author.value === "" || pages.value === "") return;

  const titleInput = titleCase(title.value);
  const authorInput = titleCase(author.value);

  const book = new Book(titleInput, authorInput, pages.value);

  clearInputs();
  closeModal();
  appendNewBook(book);
}

function appendNewBook(book) {
  const article = document.createElement("article");
  article.classList.add("book");

  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = book.title;

  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = book.author;

  div.appendChild(h2);
  div.appendChild(author);

  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = book.pages;

  article.appendChild(div);
  article.appendChild(pages);

  main.appendChild(article);
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

addBookBtn.addEventListener("click", addNewBook);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
