class BookList {
    constructor(allBooks = []) {
        this.books = allBooks;
        this.booksMarkedAsRead = 0;
        this.booksMarkedNotRead = this.books.length;
        this.nextBook = this.books[1];
        this.currentBook = this.books[0];
        this.lastBook = null;
    }
    addRead (newBook) {
        this.books.push(newBook);
        this.booksMarkedNotRead += 1;
    }
    finishCurrentBook () {
        this.booksMarkedAsRead += 1;
        this.booksMarkedNotRead -= 1;
        this.currentBook.readDate = new Date(Date.now());
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.books[this.books.indexOf(this.currentBook)+1];
    }
}

class Book {
    constructor (title,genre,author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = new Date();
    }
}

let book1 = new Book ('Rich Dad Poor Dad','Self-help book','Robert Kiyosaki');
let book2 = new Book ('How to Win Friends and Influence People','Self-help book','Dale Carnegie');
let book3 = new Book ('javscript','programming','Ankit');

let bookList = new BookList([book1,book2,book3]);