class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  get _title() {
    return this.title;
  }
  set _title(newTitle) {
    if (typeof newTitle === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _author() {
    return this.author;
  }
  set _author(newAuthor) {
    if (typeof newAuthor === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  toString() {
    return `${this.title} is a book written by ${this.author}`;
  }
  isTheSameBook(book) {
    let k = `${this.title} ${this.author}`;
    if (book === k) {
      return true;
    } else {
      return false;
    }
  }
}

let book1 = new Book(1, `Laden`);

console.log(book1.title);

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
  }
  toString() {
    return `${this.title} is a book written by ${this.author}`;
  }
  get _title() {
    return this.title;
  }
  set _title(newTitle) {
    if (typeof newTitle === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _author() {
    return this.author;
  }
  set _author(newAuthor) {
    if (typeof newAuthor === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _bookId() {
    return this.author;
  }
  set _bookId(id) {
    if (typeof id === `number`) {
      this.title = id;
    } else {
      throw `Please enter a number`;
    }
  }
}

class LibraryBook extends Book {
  constructor(title, author, bookId, quantity) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
    this.quantity = quantity;
  }

  get _quantity() {
    return this.quantity;
  }
  set _quantity(newquantity) {
    if (typeof newquantity === `number`) {
      this.quantity = newquantity;
    } else {
      throw `Please enter a number`;
    }
  }
  get _title() {
    return this.title;
  }
  set _title(newTitle) {
    if (typeof newTitle === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _author() {
    return this.author;
  }
  set _author(newAuthor) {
    if (typeof newAuthor === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _bookId() {
    return this.author;
  }
  set _bookId(id) {
    if (typeof id === `number`) {
      this.title = id;
    } else {
      throw `Please enter a number`;
    }
  }
  toString() {
    return `${this.title} is a book written by ${this.author}`;
  }
  increaseQuantityBy(amount) {
    if (typeof amount === `number`) {
      this.quantity += amount;
      return this.quantity;
    } else {
      throw `Please enter a number`;
    }
  }
  decreaseQuantityBy(amount) {
    if (typeof amount === `number`) {
      this.quantity = this.quantit - amount;
      return this.quantity;
    } else {
      throw `Please enter a number`;
    }
  }
}

class ReaderBook extends Book {
  constructor(title, author, bookId, expirationDate, isReturned) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
  }

  get _title() {
    return this.title;
  }
  set _title(newTitle) {
    if (typeof newTitle === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _author() {
    return this.author;
  }
  set _author(newAuthor) {
    if (typeof newAuthor === `string`) {
      this.title = newTitle;
    } else {
      throw `Please enter a string`;
    }
  }
  get _bookId() {
    return this.author;
  }
  set _bookId(id) {
    if (typeof id === `number`) {
      this.title = id;
    } else {
      throw `Please enter a number`;
    }
  }
  get _expirationDate() {
    return this.expirationDate;
  }
  set _expirationDate(id) {
    if (typeof id === `string`) {
      this.expirationDate = id;
    } else {
      throw `Please enter a string`;
    }
  }
  get _isReturned() {
    return this.isReturned;
  }
  set _isReturned(id) {
    if (typeof id === `boolean`) {
      this.isReturned = id;
    } else {
      throw `Please enter a boolean`;
    }
  }
  toString() {
    return `${this.title} is a book written by ${this.author}`;
  }
}
