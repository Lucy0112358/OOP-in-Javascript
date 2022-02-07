class Account {
  constructor(name, balance) {
    this.name = name;
    // this.id = id;
    this.balance = balance;
  }
  get name1() {
    return this.name;
  }
  set name1(x) {
    this.name = x;
  }
  get balance1() {
    return this.balance;
  }
  set balance1(y) {
    this.balance = y;
  }
  credit(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  debit(amount) {
    if (amount < this.balance) {
      this.balance = this.balance - amount;
      return this.balance;
    } else {
      return `Amount exceeded balance.`;
    }
  }
  toString() {
    return `${this.name}s account balance is ${this.balance}`;
  }
  transferTo(anotherAccount, amount) {
    if (amount < this.balance) {
      this.balance = this.balance - amount;
      anotherAccount.balance += amount;
      return this.balance;
    } else {
      return `Amount exceeded balance.`;
    }
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (
      accountFirst.name === accountSecond.name &&
      accountFirst.balance === accountSecond.balance
    ) {
      return true;
    } else {
      return false;
    }
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
let anotherAcc = savingAcc;
savingAcc.transferTo(cardAcc, 1000);
savingAcc.credit(400);
savingAcc.debit(9000);
console.log(savingAcc.toString());
console.log(cardAcc.balance);
