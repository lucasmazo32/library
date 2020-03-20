const myLibrary = [];

const table = document.querySelector('#table-content');

const newEntry = document.querySelector('#new-entry');
const field1 = document.querySelector('.title');
const field2 = document.querySelector('.author');
const field3 = document.querySelector('.pages');
const field4 = document.querySelector('.read');

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.have_read = false;
}

const readIt = 'read';
const deleteIt = 'delete';

Book.prototype.createdBtn = (cont, action) => {
  const x = document.createElement('input');
  x.setAttribute('type', 'button');
  x.setAttribute('id', `${action}-${cont}`);
  x.setAttribute('value', `${action}`);
  x.setAttribute('class', `mark-${action} btn btn-danger btn-success`);
  return x;
};

function addBookToLibrary(newBook) {
  return myLibrary.push(newBook);
}

const render = (template, node) => { node.innerHTML = template; };

const createdBtn = document.getElementById('create-new');
const actualForm = document.querySelector('.new-book-form');
createdBtn.onclick = () => {
  const bookForm = document.getElementById('book-form');
  bookForm.classList.toggle('d-none');
};

let book1 = new Book('Hobbit', 'JRR', 260, false);
addBookToLibrary(book1);
book1 = new Book('Hobbit 2', 'JRR', 265, false);
addBookToLibrary(book1);
book1 = new Book('Hobbit 3', 'JRR', 265, false);
addBookToLibrary(book1);

let cont = 0;

const template = [];

for (let i = 0; i < myLibrary.length; i += 1) {
  cont += 1;
  template.push(`<tr><td>${myLibrary[i].title}</td><td>${myLibrary[i].author}</td><td>${myLibrary[i].pages}</td><td>${myLibrary[i].createdBtn(i, readIt).outerHTML
  }</td><td>${myLibrary[i].createdBtn(i, deleteIt).outerHTML}</td></tr>`);
}

render(template.join(''), table);

const markRead = document.querySelectorAll('.mark-read');
const deleteItem = document.querySelectorAll('.mark-delete');

newEntry.addEventListener('click', () => {
  if (field1.value.length !== 0 && field2.value.length !== 0 && field3.value !== '') {
    const x = new Book(field1.value, field2.value, field3.value, field4.checked);
    const newRow = document.createElement('TR');
    newRow.innerHTML = `<td>${x.title}</td><td>${x.author}</td><td>${
      x.pages
    }</td><td>${x.createdBtn(cont, readIt).outerHTML}</td><td>${
      x.createdBtn(cont, deleteIt).outerHTML
    }</td>`;
    table.appendChild(newRow);
    cont += 1;
    actualForm.reset();

    const readbtn = document.querySelector(`#read-${cont - 1}`);
    const deletebtn = document.querySelector(`#delete-${cont - 1}`);
    if (field4.checked) {
      readbtn.classList.toggle('btn-danger');
    }
    readbtn.addEventListener('click', function foo() {
      this.classList.toggle('btn-danger');
    });

    deletebtn.addEventListener('click', function foo() {
      const upEle = this.parentElement.parentElement;
      upEle.remove();
    });
  } else {
    const warn = document.createElement('P');
    warn.setAttribute('class', 'bg-warning p-3 mt-3 border-rounded');
    warn.innerHTML = 'Great job, however, there are some changes that need to be implemented before moving on: make sure you fill out all fields before resubmitting';
    actualForm.appendChild(warn);
  }
});

markRead.forEach(button => {
  button.addEventListener('click', function foo() {
    this.classList.toggle('btn-danger');
  });
});

deleteItem.forEach(button => {
  button.addEventListener('click', function foo() {
    const upEle = this.parentElement.parentElement;
    upEle.remove();
  });
});
