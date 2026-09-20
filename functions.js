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
function calculateTaxiFare(distanceKm) {
    let price = distanceKm * 1.5;
    if (price < 3) {
        console.log("Ödəniləcək məbləğ: 3 AZN ");
    } else {
        console.log(`Ödəniləcək məbləğ: ${price} AZN`);
    }
}
calculateTaxiFare(1);
calculateTaxiFare(5);