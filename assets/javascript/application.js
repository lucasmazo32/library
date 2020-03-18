let myLibrary = [];

const table = document.querySelector('#table-content');

function Book(title, author, pages, have_read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.have_read = false
};

const readIt = "read";
const deleteIt = "delete";

Book.prototype.createdBtn = function(cont, action) {
  var x = document.createElement("input");
  x.setAttribute("type", "button");
  x.setAttribute('id', `${action}-${cont}`);
  x.setAttribute('value', `${action}`);
  x.setAttribute('class', `mark-${action} btn btn-danger btn-success`)
  cont++
  console.log(cont)
  return x;
};

function addBookToLibrary(newBook) {
  return myLibrary.push(newBook);
};

let render = function (template, node) {
	node.innerHTML = template;
};

const createdBtn = document.getElementById('create-new');

createdBtn.onclick = function() {
  let bookForm = document.getElementById('book-form');
  bookForm.classList.toggle('d-none')};

const book1 = new Book('Hobbit', 'JRR', 260, false);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);

let cont = 0;

template = myLibrary.map(
    x => `<tr><td>${x.title}</td><td>${x.author}</td><td>${x.pages}</td><td>${x.createdBtn(cont, readIt).outerHTML}</td><td>${x.createdBtn(cont, deleteIt).outerHTML}</td></tr>`
  );

render(template.join(''), table);

const markRead = document.querySelectorAll('.mark-read');
const deleteItem = document.querySelectorAll('.mark-delete')

markRead.forEach( button => {
  button.addEventListener('click', function(e) {
    this.classList.toggle('btn-danger')
  // console.log(e.currentTarget); //opttion1
  console.log(this);  //option2
  });
});

deleteItem.forEach( button => {
  button.addEventListener('click', function(e) {
    console.log(this.parentElement.parentElement);
  });
});