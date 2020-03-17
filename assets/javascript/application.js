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

const book1 = new Book('Hobbit', 'JRR', 260, false);
addBookToLibrary(book1);
addBookToLibrary(book1);
addBookToLibrary(book1);

let cont = 0;

template = myLibrary.map(
    x => `<tr><td>${x.title}</td><td>${x.author}</td><td>${x.pages}</td><td></td><td><input type="button" value="delete" id="delete-${cont ++}"></td></tr>`
  );

render(template.join(''), document.querySelector('#table-content'));