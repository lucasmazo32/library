let myLibrary = [];

function Book(title, author, pages, have_read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.have_read = have_read
};

Book.prototype.createBtn = function(cont) {
  var x = document.createElement("input");
  x.setAttribute("type", "button");
  x.setAttribute('id', `read-${cont}`);
  x.setAttribute('value', '✔️');
  x.setAttribute('class', 'read-btn btn btn-danger btn-success')
  return x;
};

/*const readBook = function(event) {
  console.log(event.currentTarget)
};
*/
document.addEventListener('click', function(e) {
  console.log(e.currentTarget);
  console.log(this);
});

function addBookToLibrary(newBook) {
  return myLibrary.push(newBook);
};

let render = function (template, node) {
	node.innerHTML = template;
};

let createBtn = document.getElementById('create-new');
let debbug = document.getElementById('debbug');

createBtn.onclick = function() {
  let bookForm = document.getElementById('book-form');
  bookForm.classList.toggle('d-none')};

const book1 = new Book('Hobbit', 'JRR', 260, false);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);

let cont = 0;

template = myLibrary.map(
    x => `<tr><td>${x.title}</td><td>${x.author}</td><td>${x.pages}</td><td>${x.createBtn(cont).outerHTML}</td><td><input type="button" value="delete" class="btn btn-secondary" id="delete-${cont ++}"></td></tr>`
  );

render(template.join(''), document.querySelector('#table-content'));
console.log(myLibrary.map(x => x.readBook))