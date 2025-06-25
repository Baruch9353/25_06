// Exercise 1 =================================

// function Phone(brand, model) {
//   this.brand = brand;
//   this.model = model;
//     this.details = function () {
//     console.log("Phone: " + this.brand + " " + this.model);
//   };

// }

// const myPone = new Phone("Samsung", "S22");
// myPone.details();

// Exercise 2 =================================

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//     this.area = function () {
//     return this.width * this.height;
//   };
// }
// const myRect = new Rectangle(5, 4);
// console.log(myRect.area());

// Exercise 3 =================================

// function BankAccount(owner, balance) {
//   this.owner = owner;
//   this.balance = balance;
//     this.deposit = function(amount) {
//     this.balance += amount;
//   };
//     this.withdraw = function(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     } else {
//       console.log("Not enough money in the Bank Account!");
//     }
//   };
//     this.checkBalance = function() {
//     console.log("Balance: " + this.balance);
//   };
// }

// const myAccount = new BankAccount("Baruch", 1000);
// myAccount.checkBalance();
// myAccount.deposit(2000);
// myAccount.checkBalance();
// myAccount.withdraw(700);
// myAccount.checkBalance();


// Exercise 4 =================================

// function Animal(name) {
//   this.name = name;
//   this.speak = function() {
//     console.log(this.name + " makes a sound");
//   };
// }
// function Dog(name) {
//   Animal.call(this, name);
//   this.bark = function() {
//     console.log(this.name + " barks");
//   };
// }
// const rocky = new Dog("Rocky");
// rocky.speak(); 
// rocky.bark();  

// Exercise 7 =================================

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   info() {
//     return `${this.title} by ${this.author}`;
//   }
// }
// const myBook = new Book("The Hobbit", "Tolkien");
// console.log(myBook.info());


// Exercise 8 =================================

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello, I'm ${this.name}`;
//   }
// }
// class Student extends Person {
//   constructor(name, school) {
//     super(name);
//     this.school = school;
//   }

//   study() {
//     return `${this.name} is studying at ${this.school}`;
//   }
// }
// const s = new Student("Alice", "Oxford");
// console.log(s.greet());
// console.log(s.study());
