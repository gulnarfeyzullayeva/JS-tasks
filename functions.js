// Task-01
// function calculateOrderTotal(price, promoCode) {
//     if (promoCode === "SAVE20") {
//         let lastPrice = price - (price * 20 / 100);
//         console.log (lastPrice + lastPrice * 18 / 100);
//     } else if (promoCode === "FLAT10") {
//         let lastPrice = price - 10;
//         console.log (lastPrice + lastPrice * 18 / 100);
//     } else {
//         let lastPrice = price;
//         console.log (lastPrice);
//     }
// }
// calculateOrderTotal(100, "SAVE20");
// calculateOrderTotal(50, "FLAT10");


// Task-02
// function registerUser(fullName, age) {
//     if (age < 18) {
//         console.log("Qeydiyyat üçün yaşınız minimum 18 olmalıdır.");
//     } else {
//         fullName = fullName.trim(); 
//         console.log(`Xoş gəldiniz, ${fullName}! Qeydiyyat uğurla tamamlandı.`);
//     }
// } 
// registerUser(" Kamran Əliyev ", 20);
// registerUser("Aysel", 16);


// Task-03
// function calculateTaxiFare(distanceKm) {
//     let price = distanceKm * 1.5;
//     if (price < 3) {
//         console.log("Ödəniləcək məbləğ: 3 AZN ");
//     } else {
//         console.log(`Ödəniləcək məbləğ: ${price} AZN`);
//     }
// }
// calculateTaxiFare(1);
// calculateTaxiFare(5);

// Task-04
// function calculateTicketPrice(age, isStudent) {
//     let price = 10;
//     if (age < 6) {
//         return "Bilet pulsuzdur.";
//     } else if (isStudent === true) {
//         const lastPrice = price - price*30/100;
//         return `Bilet qiyməti: ${lastPrice} AZN`
//     } else if (age >= 60) {
//         const lastPrice = price - price*50/100;
//         return `Bilet qiyməti: ${lastPrice} AZN`
//     } 
//     return `Bilet qiyməti: ${price} AZN`;
// }
// console.log(calculateTicketPrice(4, false));
// console.log(calculateTicketPrice(22, true));
// console.log(calculateTicketPrice(65, false));
// console.log(calculateTicketPrice(30, false));

// Task-05
// const aznToUsd = (price) => console.log(price / 1.70);
// aznToUsd(170);

// Task-06
// const checkAccess = (age) => (age >= 18) ? "Giriş uğurludur" : "Giriş qadağandır";
// checkAccess(20);
// checkAccess(15);



// Arrow Functions (Ev Tapşırıqları):

// Task-01
// const celsiusToFahrenheit = (Celsius)=> (Celsius * 1.8) + 32;
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));

// Task-02
// const calculateFuelConsumption = (distance, liters)=> (liters / distance) * 100;
// console.log(calculateFuelConsumption(500, 40));

// Task-03
// const getTotalWithDelivery = (orderAmount)=> (orderAmount >= 50) ? orderAmount : orderAmount + 5;
// console.log(getTotalWithDelivery(60));
// console.log(getTotalWithDelivery(30));

// Task-04
const getGrade = (score) => (score >= 90) ? "Əla" : (score >= 70 ) ? "Yaxşı" : (score >= 50) ? "Kafi": "Kəsildiniz";
console.log(getGrade(95));
console.log(getGrade(75));
console.log(getGrade(40));