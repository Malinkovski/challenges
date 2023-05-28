const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: 200,
    onPage: 60,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    maxPages: 250,
    onPage: 150,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    maxPages: 400,
    onPage: 400,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    maxPages: 200,
    onPage: 30,
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoyevsky",
    maxPages: 300,
    onPage: 300,
  },
];

const bookList = document.getElementById("book-list");
const StatusList = document.createElement("ul");
const tableBody = document.querySelector("#book-table");

const clearList = (item) => (item.innerHTML = "");

const listBooks = () => {
  clearList(bookList);
  clearList(StatusList);

  const ul = document.createElement("ul");

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}`;
    ul.appendChild(li);

    const readStatusItem = document.createElement("li");

    if (book.onPage === book.maxPages) {
      readStatusItem.textContent = `You have read "${book.title}" by ${book.author}`;
      readStatusItem.classList.add("read");
    } else {
      readStatusItem.textContent = `You still need to read "${book.title}" by ${book.author}`;
      readStatusItem.classList.add("not-read");
    }

    StatusList.appendChild(readStatusItem);
  });

  bookList.appendChild(ul);
  bookList.appendChild(StatusList);
};

const refreshBookTable = () => {
  clearList(tableBody);

  books.forEach((book) => {
    const row = document.createElement("tr");

    const getTitleCell = document.createElement("td");
    getTitleCell.textContent = book.title;

    const getAuthor = document.createElement("td");
    getAuthor.textContent = book.author;

    const getMaxPages = document.createElement("td");
    getMaxPages.textContent = book.maxPages;

    const getOnPage = document.createElement("td");
    getOnPage.textContent = book.onPage;

    const progressCell = document.createElement("td");
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    const progress = (book.onPage / book.maxPages) * 100;
    if (progress <= 100) {
      progressBar.innerHTML = `<div class="progress-bar-fill" style="width: ${progress}%"><span>${progress.toFixed(
        0
      )}%</span></div>`;
    } else {
      progressBar.innerHTML = `<div class="progress-bar-fill" style="width:100%; background-color: red;"><span>Invalid input</span></div>`;
    }
    progressCell.appendChild(progressBar);

    row.appendChild(getTitleCell);
    row.appendChild(getAuthor);
    row.appendChild(getMaxPages);
    row.appendChild(getOnPage);
    row.appendChild(progressCell);
    tableBody.appendChild(row);
  });

  listBooks();
};

const form = document.querySelector("#book-form");

form.addEventListener(
  "submit",
  (submit = (event) => {
    event.preventDefault();

    const bookTitleInput = document.querySelector("#book-title-input");
    const bookAuthorInput = document.querySelector("#book-author-input");
    const maxPagesInput = document.querySelector("#max-pages-input");
    const onPageInput = document.querySelector("#on-page-input");

    const newBook = {
      title: bookTitleInput.value,
      author: bookAuthorInput.value,
      maxPages: +maxPagesInput.value,
      onPage: +onPageInput.value,
    };
    books.push(newBook);
    form.reset();
    refreshBookTable();
  })
);

refreshBookTable();
