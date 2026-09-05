// Task-01
// console.log("My name is Gulnar");

// Task-02
// const name = "Gulnar";
// console.log(name);

// Task-03
// Deyisenin adinda yalniz herf, reqem (adin evveli istisna) ve $ _ simvollarindan istifade etmek olar. CAVAB: person, $add (console de olmaz cunki jsde mueyyen funksiyasi var)

// Task-04
// let bookPrice = 20;
// let bookAmount = 100;
// console.log(bookPrice*bookAmount);

// Task-05
// let kmhSpeed = 36;
// let msSpeed = kmhSpeed*1000/3600;
// console.log(msSpeed);

// Task-06
// let age = prompt("Nece yasiniz var?");
// let days = age*365;
// console.log(days);

// Task-07
// let num = 37;
// console.log(num**5);
// console.log(num%3);

// Task-08
// let firstName = "Gulnar";
// let lastName = "Feyzullayeva";
// console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);

// Task-09
// let firstName = "Gulnar";
// let lastName = "Feyzullayeva";
// console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}`);

// Task-10
// let fullName = "Gulnar Feyzullayeva";
// console.log(fullName.length);

// Task-11 ?
// let fullName = "Gulnar Feyzullayeva";
// let [name, surname] = fullName.split(" ");
// console.log(`${name[0]} ${surname[0]}`);

// Task-12 ?
// let fullName = prompt("Tam adinizi daxil edin (Ad Soyad formatinda)");
// let [name, surname] = fullName.split(" ");
// console.log(`${surname} ${name}`);

// Task-13
// let name = prompt("Adinizi daxil edin");
// console.log(`Salam ${name}`);

// Task-14
// let a = Number(prompt("Eded daxil edin"));
// let b = Number(prompt("Eded daxil edin"));
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// Task-15
// let a = 12345;
// let b = 98765;
// let c = String(a*b);
// console.log(c[5]);

// Task-16
// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1
// "true" - false = NaN
// 6 / "3" = 2
// 4 + 5 + "px" = 9px
// "$" + 4 + 5 = $45
// "4" - 2 = 2
// NaN + "px" = NaN
// 7 / 0 = Infinity
// "-9" + 5 = "-95"
// "-9" - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN

// Task-17
// let number = prompt("Dord reqemli eded daxil edin");
// let a = Number(number[0]);
// let b = Number(number[1]);
// let c = Number(number[2]);
// let d = Number(number[3]);
// console.log(a + b + c + d);

// Task-18
// let fullName = prompt("Tam adinizi daxil edin");
// console.log(`Salam, ${fullName}!`);

// Task-19
// let price = prompt("Qiymeti daxil edin");
// let [manat, qepik] = price.split(".");
// console.log(`${manat} manat ${qepik} qepik`);

// Task-20
// let salary = prompt("Emek haqqi meblegini daxil edin");
// console.log(salary*0.87);

// Task-21 ?
// let fullName = prompt("Soyad, ad ve ata adinizi daxil edin");
// let words = fullName.split(" ");
// console.log(`${words[0]} ${words[1][0]}. ${words[2][0]}.`);

// Task-22
// let price = prompt("Meblegi daxil edin");
// let time = prompt("Muddeti daxil edin");
// let percent = prompt("Faiz derecesini daxil edin");
// console.log((price*percent/100)*time);

// Task-23
// let value = 10 || 20;
// console.log(value < 19);
// console.log(value <= 10);
// console.log(value == 10);
// console.log(value === 10);
// console.log(value !==20);

// Task-24
// let age = prompt("Yasinizi daxil edin");
// if (age < 18) {
//     console.log("Access denied");   
// } else {
//     console.log("Access granted"); 
// }

// Task-25
// let numbers = prompt("3 ikireqemli eded daxil edin");
// let [a, b, c] = numbers.split(" ");
// a = +a;
// b = +b;
// c = +c;
// if (a===b || b===c || c===a) {
//   console.log("Error");
// } else if ((a > b && b > c) || (c > b && b > a)) {
//   console.log(b);
// } else if ((b > a && a > c) || (c > a && a > b)) {
//   console.log(a);
// } else {
//   console.log(c);
// }

// Task-26
// let year = Number(prompt("Il daxil edin"));
// if (year % 4 === 0) {
//     console.log("İl uzun ildir");
// } else {
//     console.log("İl uzun il deyil");
// }

// Task-27
// let id = prompt("enter product id:");
// switch (id) {
//     case "1":
//         alert("Available 10 pcs.");
//         break;
//     case "2":
//         alert("Available 256 pcs.");
//         break;
//     case "3":
//         alert("Available 53 pcs.");
//         break;
//     case "4":
//         alert("There are 3 available.");
//         break;
//     default:
//         alert("Out of stock");
// }

// Task-28
// let gender = prompt("Cinsinizi daxil edin (M ve ya F)");
// if (gender === "M") {
//     console.log("Male");
// } else if (gender === "F") {
//     console.log("Female");
// } else {
//     console.log("Error");
// }

// Task-29
// let number = prompt("Ayin nomresini daxil edin");
// switch (number) {
//   case "1":
//     console.log("Yanvar");
//     break;
//   case "2":
//     console.log("Fevral");
//     break;
//   case "3":
//     console.log("Mart");
//     break;
//   case "4":
//     console.log("Aprel");
//     break;
//   case "5":
//     console.log("May");
//     break;
//   case "6":
//     console.log("İyun");
//     break;
//   case "7":
//     console.log("İyul");
//     break;
//   case "8":
//     console.log("Avqust");
//     break;
//   case "9":
//     console.log("Sentyabr");
//     break;
//   case "10":
//     console.log("Oktyabr");
//     break;
//   case "11":
//     console.log("Noyabr");
//     break;
//   case "12":
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("Error");
// }

// Task-30 ?
// let birthday = prompt("Dogum tarixinizi daxil edin (mes:2009.12.19)");

// Task-31
// p = 8
// q = 8-6+6+8=16
// (8;16)

// Task-32
// a = 6;7;8;7;6
// b = 4;3;2;3
// c = 2;3;2
// x=7-4+2-2+7=10;11
// y=8+2-3+10-6=11
// (6;3;2;11;11)

// Task-33
// a = 7;6;5;6;7;8;7;6
// b = 3;4;5;4;3;4;5;4
// c = 5;6;5;6;5;4;3;4
// x=7-4+5-5+4-5+5-5+5=7;6;7;6;7;8
// y=6+6-3+6-6+8-3+4-7=11;10;11
// z=8+5-3+6-10+5-8+3-6+10=10
// (6;4;4;8;11;10)

// Task-34
// let number = Number(prompt("Eded daxil edin"));
// if (number > 0) {
//     console.log("Musbet");
// } else if (number < 0) {
//     console.log("Menfi");
// } else if (number === 0) {
//     console.log("Sifir");
// } else {
//     console.log("Errot");
// }

// Task-35 ?Math
// let a = 5, b = 8, c = 3;
// let max = Math.max(a, b, c);
// console.log(max);

// Task-36
// let number = 5;
// let answer =(number %2 === 0) ? "Cut" : "Tek";
// console.log(answer);

// Task-37
// let a = 5;
// let s = a ** 2;
// let p = a * 4;
// console.log(s, p);

// Task-38
// let score = 70;
// switch (true) {
//   case (score >= 90 && score <= 100):
//     console.log("ELA");
//     break;
//   case (score >= 75 && score < 90):
//     console.log("YAXSI");
//     break;
//   case (score >= 60 && score < 75):
//     console.log("ORTA");
//     break;
//   case (score >= 0 && score < 60):
//     console.log("ZEIF");
//     break;
//   default:
//     console.log("ERROR");
// }

// Task-39 ?ai
// let num = Math.floor(Math.random() * 101);
// console.log(num);
// if (num <= 50) {
//   console.log("0-50 arasındadır");
// } else {
//   console.log("50-dən böyükdür");
// }

// Task-40 
let a = 5, b = 3, op = "*";
switch (op) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    if (b !== 0) {
      console.log(a / b);
    } else {
      console.log("Sifira bolmek olmaz");
    }
    break;
  default:
    console.log("Yanlis operator daxil edilib");
}

