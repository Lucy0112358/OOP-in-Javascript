class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(stringOnly) {
    if (typeof stringOnly !== 'string') {
      throw new Error('the value must be string');
    } else {
      return this._name;
    }
  }
  get gender() {
    return this._gender;
  }
  toString() {
    if (this._gender === 'female') {
      return `Ms ${this._name}`;
    } else {
      return `Mr ${this._name}`;
    }
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this.price = price;
    this.quantity = quantity;
  }
  get title() {
    return this._title;
  }
  set title(newTitle) {
    this._title = newTitle;
    return this._title;
  }
  get author() {
    return this._author;
  }
  set author(val) {
    this._author = val;
    return this._author;
  }
  getProfit() {
    if ((typeof this.price && typeof this.quantity) !== 'number') {
      throw new Error('Only Numbers!!');
    }
    return this.price * this.quantity;
  }
}

const Twain = new Author('Twain', 'Twain@gmail.com', 'male');

console.log(Twain.gender);
const London = new Book(
  'London',
  'Twain',
  500,
  1000
);