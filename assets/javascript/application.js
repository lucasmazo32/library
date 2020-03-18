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

let book1 = new Book('Hobbit', 'JRR', 260, false);
addBookToLibrary(book1);
book1 = new Book('Hobbit 2', 'JRR', 265, false);
addBookToLibrary(book1);
book1 = new Book('Hobbit 3', 'JRR', 265, false);
addBookToLibrary(book1);

let cont = 0;

template = myLibrary.map(
    x => `<tr><td>${x.title}</td><td>${x.author}</td><td>${x.pages}</td><td>${x.createdBtn(cont, readIt).outerHTML}</td><td>${x.createdBtn(cont++, deleteIt).outerHTML}</td></tr>`
  );

render(template.join(''), table);

const markRead = document.querySelectorAll('.mark-read');
const deleteItem = document.querySelectorAll('.mark-delete')

markRead.forEach( button => {
  button.addEventListener('click', function(e) {
    this.classList.toggle('btn-danger')
  });
});

deleteItem.forEach( button => {
  button.addEventListener('click', function(e) {
    var elid = this.attributes.id.value;
    var upEle = this.parentElement.parentElement;
    var idloc = parseInt(elid.slice(7, elid.length));
    // myLibrary.splice(idloc,1);
    upEle.remove();
  });
});
