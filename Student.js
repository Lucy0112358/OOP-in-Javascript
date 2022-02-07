class Person {
  constructor(name, lastname, gender, age) {
    this.firstName = name;
    this.lastName = lastname;
    this.gender = gender;
    this.age = age;
  }
  get _name() {
    return this.firstName;
  }
  set _name(value) {
    this.firstName = value;
    return this.firstName;
  }
  get _lastName() {
    return this.lastName;
  }
  set _lastName(value) {
    this.lastName = value;
    return this.lastName;
  }
  get _gender() {
    return this.gender;
  }
  set _gender(value) {
    this.gender = value;
    return this.gender;
  }
  get _age() {
    return this.age;
  }
  set _age(value) {
    this.age = value;
    return this.age;
  }
  toString() {
    return `${this.firstName} ${this.lastName} is ${this.gender} and ${this.age} y/o. `;
  }
}
class Student extends Person {
  constructor(name, lastname, gender, age, year, fee, program) {
    super(name, lastname, gender, age);
    this.year = year;
    this.fee = fee;
    this.program = program;
  }
  get _program() {
    return this.program;
  }
  set _program(value) {
    this.program = value;
    return this.program;
  }
  get _fee() {
    return this.fee;
  }
  set _fee(value) {
    this.fee = value;
    return this.fee;
  }
  get _year() {
    return this.year;
  }
  set _year(value) {
    this.year = value;
    return this.year;
  }
  toString() {
    return `${this.program} ${this.fee} is ${this.year} and ${this.age} y/o. `;
  }
  passExam(programName, grade) {
    let passedNumbers = 0;
    for (let i = 0; i < this.program.length; i++) {
      programName = this.program[i].programName;
      grade = this.program[i].grade;
      if (grade > 50) {
        passedNumbers++;
      }
    }
    passedNumbers === this.program.length ? this.year++ : null;
    return this.year;
  }
  isAllPassed(grade) {
    let res = true;
    for (let i = 0; i < this.program.length; i++) {
      grade = this.program[i].grade;
      if (typeof grade !== `number`) {
        res = false;
      }
    }
    return res;
  }
}
let programArray = [
  { programName: "math", grade: 59 },
  { programName: "english", grade: undefined },
];
let user1 = new Student(
  "Name",
  "Surname",
  "female",
  23,
  2015,
  560000,
  programArray
);
console.log(user1.passExam());
