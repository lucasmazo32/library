let myLibrary = [];

function Book(title, author, pages, have_read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.have_read = have_read
};

function addBookToLibrary(newBook) {
  return myLibrary.push(newBook);
};

let render = function (template, node) {
	node.innerHTML = template;
};


/*const newBook = document.querySelector('.new-book')
const newForm = document.querySelector('.new-form')
newBook.addEventListener("click", 
newForm.classList.toggle('d-none')
*/
let createBtn = document.getElementById('create-new'); 
let debbug = document.getElementById('debbug'); 
let formSubmit = document.getElementById('form-submit'); 
createBtn.onclick = function() { 
  let bookForm = document.getElementById('book-form'); 
  if (bookForm.style.display == 'none'){ bookForm.style.display = 'flex' } 
  else { bookForm.style.display = 'none' } }; 

const book1 = new Book('Hobbit', 'JRR', 260, false);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);

let cont = 0;

template = myLibrary.map(
    x => `<tr><td>${x.title}</td><td>${x.author}</td><td>${x.pages}</td><td></td><td><input type="button" value="delete" id="delete-${cont ++}"></td></tr>`
  );

render(template.join(''), document.querySelector('#table-content'));