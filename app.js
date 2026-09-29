// Part 1
let student = {
    firstName: "Ali",
    lastName: "Aliyev",
    age: 20,
    city: "Baku",
};
// Task-01
console.log(student);

// Task-02
console.log(student.firstName);
console.log(student.age);
student.age = 21;
console.log(student.age);


// Task-03
student.isGraduated = false;
delete student.city;
console.log(student);


// Part 2

// Task-04
let book = {
    title: "1984",
    author: "George Orwell",
    pages: 328,
};
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);

// Task-05
const car = {
    brand: "BMW",
    "fuel-type": "Benzin",
    "user location": "Baki",
};
console.log(car["fuel-type"]);
console.log(car["user location"]);
// Deyerin daxilinde bosluq ve ya - varsa dot notation evezine bracket notation istifade edilir.

// Task-06
let laptop = {
    brand: "ASUS",
    price: 1500,
    ram: "16GB",
};
let myKey = "price";
console.log(laptop[myKey]);

// Task-07
let product = {
    title: "Telefon",
    price: 800,
};
product["price"] = 900;
console.log(product.price);
product["color"] = "Qara";
console.log(product.color);

// Task-08
let user = {
    username: "user123",
    status: "active",
};
let targetKey = "status";
user[targetKey] = "inactive";
console.log(user);

// Task-09
let movie = {
    title: "Inception",
    director: "Nolan",
    "release-year": 2010,
};
console.log(movie.title + " filmi " + movie["release-year"] + " ilinde numayis olunub.");

// Task-10
const person = {
    name: "Aysel",
    "job-title": "Dizayner",
};
let field = "name";
console.log(person["job-title"]); //bracket notation ile yazilmalidi
console.log(person.name); //deyisen yox verilen deyer dot notation ile yazilmalidi




