// // Part 1
// let student = {
//     firstName: "Ali",
//     lastName: "Aliyev",
//     age: 20,
//     city: "Baku",
// };
// // Task-01
// console.log(student);

// // Task-02
// console.log(student.firstName);
// console.log(student.age);
// let student.age = 21;
// console.log(student.age);


// // Task-03
// student.isGraduated = false;
// delete student.city;
// console.log(student);


// // Part 2

// // Task-04
// let book = {
//     title: "1984",
//     author: "George Orwell",
//     pages: 328,
// };
// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["pages"]);

// // Task-05
// const car = {
//     brand: "BMW",
//     "fuel-type": "Benzin",
//     "user location": "Baki",
// };
// console.log(car["fuel-type"]);
// console.log(car["user location"]);
// // Deyerin daxilinde bosluq ve ya - varsa dot notation evezine bracket notation istifade edilir.

// // Task-06
// let laptop = {
//     brand: "ASUS",
//     price: 1500,
//     ram: "16GB",
// };
// let myKey = "price";
// console.log(laptop[myKey]);

// // Task-07
// let product = {
//     title: "Telefon",
//     price: 800,
// };
// product["price"] = 900;
// console.log(product.price);
// product["color"] = "Qara";
// console.log(product.color);

// // Task-08
// let user = {
//     username: "user123",
//     status: "active",
// };
// let targetKey = "status";
// user[targetKey] = "inactive";
// console.log(user);

// // Task-09
// let movie = {
//     title: "Inception",
//     director: "Nolan",
//     "release-year": 2010,
// };
// console.log(movie.title + " filmi " + movie["release-year"] + " ilinde numayis olunub.");

// // Task-10
// const person = {
//     name: "Aysel",
//     "job-title": "Dizayner",
// };
// let field = "name";
// console.log(person["job-title"]); //bracket notation ile yazilmalidi
// console.log(person.name); //deyisen yox verilen deyer dot notation ile yazilmalidi




// ---------- Hisse 1 ----------
// Task-01
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
// };
// car.year = 2020;
// car.model = "Camry";
// console.log(car);

// Task-02
// const user = {
//     name: "Kamran",
//     email: "kamran@mail.com",
//     tempToken: "abc123xyz",
// };
// delete user.tempToken;
// console.log(user);

// Task-03
// const person = {
//     firstName: "Aysel",
//     lastName: "Memmedova",
//     getfullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.getfullName());

// Task-04
// const laptop = {
//     brand: "Dell",
//     price: 1800,
//     ram: "16GB",
//     storage: "512GB SSD",
// };
// console.log(Object.keys(laptop));

// Task-05
// const product = {
//     title: "Qulaqliq",
//     price: 150,
//     inStock: true,
// };
// console.log(Object.values(product));

// Task-06
// const country = {
//     name: "Azerbaycan",
//     capital: "Baki",
//     population: "10M",
// };
// console.log(Object.entries(country));

// Task-07
// function User(username, role) {
//     this.username=username;
//     this.role=role;
// }
// const user1 = new User("Gulnar", "user");
// const user2 = new User("Sama", "user");
// console.log(user1, user2);


// Task-08
// function Rectangle(width, height) {
//     this.width=width;
//     this.height=height;
//     this.getArea = function() {
//         return this.width * this.height;
//     };
// }
// const area = new Rectangle(3,4);
// console.log(area.getArea());

// Task-09
// const student = {
//     id: 101,
//     score: 85,
//     status: "pending",
// };
// let keyToUpdate = "score";
// let keyToDelete ="status";
// student[keyToUpdate] = 95;
// delete student[keyToDelete];
// console.log(student);

// Task-10
// const bankAccount = {
//     owner: "Elvin",
//     balance: 500,
//     deposit: function(amount) {
//         return this.balance += amount;
//     },
//     withdraw: function(amount) {
//         return this.balance -= amount;
//     },
// }
// console.log(bankAccount.deposit(100));
// console.log(bankAccount.withdraw(100));

// Task-11
// const calculator = {
//     a: 10,
//     b: 5,
//     add: function() {
//         return this.a + this.b;
//     },
//     subtract: function() {
//         return  this.a - this.b;
//     },
// };
// console.log(calculator.add());
// console.log(calculator.subtract());

// Task-12
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// const countProperties = (obj) => {
//     return Object.keys(obj).length;
// }
// console.log(countProperties(obj));

// Task-13 ???
// const cart = {
//     apple: 3,
//     banana: 2,
//     milk: 5,
//     bread: 1,
// }
// let values = Object.values(cart);
// let sum = 0;
// for (let values of cart) {
//     sum = sum + cart.values;
// }
// console.log(sum);

// Task-14
// const scores = {
//     math: 90,
//     english: 85,
//     physics: 78,
// }
// for (let [fenn, bal] of Object.entries(scores)) {
//     console.log(`Fenn: ${fenn}, Bal: ${bal}`);
// }

// Task-15
// const entries = [["title", "JavaScript Dersleri"], ["duration", "2 saat"], ["level", "Orta"]];
// const course = Object.fromEntries(entries);
// course.isCompleted = true;
// console.log(course);

// Task-16
// function Product(title, price, discount = 0) {
//     this.title=title;
//     this.price=price;
//     this.discount=discount;
//     this.getFinalPrice = function() {
//         return (this.price - (this.price * this.discount / 100)); 
//     };
// }
// const product1= new Product("Computer", 2000, 20);
// const product2= new Product("TV", 4000, 30);
// console.log(product1.getFinalPrice());
// console.log(product2.getFinalPrice());

// Task-17 ???
// const timer = {
//     seconds: 10,
//     start: function() {
//         console.log(this.seconds);
//     }
// }
// let run = timer.start.bind(timer);
// run()

// Task-18 ???
// const object = {
//     a: 10,
//     b: "salam",
//     c: 25,
//     d: true,
// }

// Task-19
// function Student(name, grades = []) {
//     this.name=name;
//     this.grades=grades;
//     this.addGrade = function(grade) {
//         return this.grades.push(grade); //push?
//     }
//     this.getAverage = function() {
//         let sum=0;
//         for (let grade of this.grades) {
//             sum=sum+grade;
//         }
//         return sum/this.grades.length;
//     }
// }
// let student = new Student("Gulnar");
// student.addGrade(90);
// student.addGrade(100);
// console.log(student.getAverage());

// Task-20 ???
// const store = {
//     inventory: {
//         phone: 10,
//         laptop: 5,
//         tablet: 8,
//     },
//     sellItem: function (itemName, quantity) {
//         if ()
//     }
// }