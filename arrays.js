// Task-1
// const arr = [];
// arr.push(10, 20, 30);
// console.log(arr);

// Task-2
// const arr = [5,10,15,20];
// let a = arr.pop();
// console.log(a);

// Task-3
// const arr = ["Banan", "Alma"];
// arr.unshift("Gilas");
// console.log(arr);

// Task-4
// const arr = ["Qirmizi", "Yasil", "Mavi"];
// arr.shift();
// console.log(arr);

// Task-5
// const arr1 = [1,2];
// const arr2 = [3,4];
// const fullArray = arr1.concat(arr2);
// console.log(fullArray);

// Task-6
// const arr = ["a", "b", "c", "d", "e"];
// const arr2 = arr.slice(1,3);
// console.log(arr2);

// Task-7 ***
// const arr = [10,20,50,60];
// arr.splice(2, 0, 30, 40);
// console.log(arr);

// Task-8
// const arr = ["JavaScript", "Python", "C++"];
// console.log(arr.indexOf("Python"));

// Task-9
// const arr = [5, 12, 8, 130, 44];
// console.log(arr.includes(8));

// Task-10
// const arr = ["HTML", "CSS", "JS"];
// console.log(arr.join("-"));

// Task-11
// const arr = [1,2,3,4,5];
// console.log(arr.reverse());

// Task-12
// const arr = [40, 100, 1, 5, 25];
// console.log(arr.sort());

// Task-13
// const arr = [1, 2, 3, 4];
// const arr2 = arr.map(x=>x*2);
// console.log(arr2);

// Task-14
// const arr = [10, 15, 20, 25, 30];
// console.log(arr.filter(x=>x>20));

// Task-15
// const arr = [5, 12, 8, 130, 44];
// console.log(arr.find(x=>x>10));

// Task-16
// const arr = [45, 60, 75, 90];
// console.log(arr.findIndex(x=>x>50));

// Task-17
// const arr = [5,10,15,20];
// console.log(arr.reduce((a,b)=>a+b));

// Task-18
// const arr = [1, 2, 3, 2, 1, 2];
// console.log(arr.lastIndexOf(2));

// Task-19
// const arr = ["ali", "aysel", "mammad"];
// console.log(arr.map(name=>name.toUpperCase()));

// Task-20
// const arr = [
//     {name: "A", age: 16},
//     {name: "B", age: 22},
//     {name: "C", age: 19}
// ];
// console.log(arr.filter(person=>person.age>=18));

// Task-21
// const arr = ["Alma", "Banan", "Gilas", "Qarpiz"];
// const arr2 = arr.splice(1,2);
// console.log(arr);

// Task-22
// const arr1 = [15,40];
// const arr2 = [10,30];
// const arr3 = arr1.concat(arr2);
// console.log(arr3.sort());

// Task-23
// const arr = [2,3,4];
// console.log(arr.reduce((a,b)=>a*b));

// Task-24
// const arr = ["apple", "banana", "cherry", "date"];
// console.log(arr.filter(x=>x.includes("a")));

// Task-25
// const arr = [
//     {name: "Körpük", price: 100},
//     {name: "Ayaqqabı", price: 200}
// ];
// const newArr = arr.map(x=>x.price*1.18);
// console.log(newArr);

// Task-26
// const arr = [
//     {id: 101, title: "Xəbər 1"},
//     {id: 102, title: "Xəbər 2"}
// ];
// console.log(arr.find(x=>x.id=102));

// Task-27
// const language = "javascript";
// const arr = language.split("").reverse();
// const newArr = arr.join("");
// console.log(newArr);

// Task-28
// const arr = [10, 20, 30, 40, 50, 60];
// const newArr = arr.slice(-3);
// console.log(newArr);

// Task-29
// const arr = [12, 45, 2, 89, 34];
// console.log(arr.reduce((a,b)=>Math.max(a,b)));

// Task-30
// const arr = ["kitab", "qələm", "kompüter", "ev", "proqramlaşdırma"];
// console.log(arr.filter(x=>x.length>5));

// Task-31
// const cart = [
//     { name: "Noutbuk", price: 1500, inStock: true },
//     { name: "Maus", price: 20, inStock: false },
//     { name: "Klaviatura", price: 80, inStock: true }
// ];
// console.log(cart.filter(x=>x.inStock===true).map(x=>x.price).reduce((a,b)=>a+b));

// Task-32 ???
// const arr = [1, 2, 2, 3, 4, 4, 5, 1];

// Task-33 ???
// const students = [
//     { name: "Əli", grade: "A" },
//     { name: "Leyla", grade: "B" },
//     { name: "Aysel", grade: "A" }
// ];
// console.log(students.reduce());

// Task-34 *
// const arr = [[3, 9], [1, 5], [10, 2]];
// const arr2 = arr.reduce((a,b)=>a.concat(b));
// console.log(arr2.sort((a,b)=>a-b));

// Task-35
// let users = [
//     { id: 1, name: "Əli", status: "pending" },
//     { id: 2, name: "Leyla", status: "pending" },
//     { id: 3, name: "Aysel", status: "pending" }
// ];
// const arr1 = users.findIndex(x=>x.id===2);
// users.splice(arr1, 1, {id: 2, name: "Leyla", status: "approved"});
// console.log(users);

