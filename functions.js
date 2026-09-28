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
// const getGrade = (score) => (score >= 90) ? "Əla" : (score >= 70 ) ? "Yaxşı" : (score >= 50) ? "Kafi": "Kəsildiniz";
// console.log(getGrade(95));
// console.log(getGrade(75));
// console.log(getGrade(40));



// Callback tasks

// Task-01
// const sendEmail = () => "✉️ Xoş gəldiniz məktubu göndərildi!";
// const registerUser = (username, callback)=> {
//     console.log(`👤 ${username} sistemə əlavə olundu.`);
//     callback();
// }
// registerUser("Gulnar", sendEmail)

// Task-02
// const onSuccess = (finalPrice)=> `✅ Kupon tətbiq edildi! Yekun qiymət: ${finalPrice} AZN`;
// const onError = (msg)=> `❌ Xəta: ${msg}`;
// const applyCoupon = (code, totalPrice, onSuccess, onError)=> {
//     if (code === "KOD10") {
//         finalPrice = totalPrice - 10
//         console.log(onSuccess(finalPrice));
//     } else{
//         console.log(onError("Keçərsiz kupon kodu!"));
//     }
// }
// applyCoupon("KOD10", 100, onSuccess, onError)

// Task-03
// const onWin = (heroName, damage)=> `⚔️ ${heroName} qalib gəldi! Canavardan ${damage} xal üstün oldu!`;
// const onLose = (heroName, damage)=> `💀 ${heroName} uduzdu! Canavardan ${damage} xal geridə qaldı!`;
// const onDraw = ()=> "🛡️ Güclər bərabərdir! Döyüş bərabərə bitdi.";
// const attackMonster = (heroName, heroPower, monsterPower, onWin, onLose, onDraw)=> {
//     if (heroPower > monsterPower) {
//         console.log(onWin("Ironman", heroPower - monsterPower));
//     } else if (heroPower < monsterPower) {
//         console.log(onLose("Ironman", monsterPower - heroPower));
//     } else {
//         console.log(onDraw());
//     }
// }
// attackMonster("Ironman", 200, 100, onWin, onLose, onDraw)


// Task-1
// const calculateTaxiFare = (distanceKm, isPeakHour, promoCode) => {
//     let price = 2;
//     let finalPrice = price + distanceKm * 0.8;
//     if (isPeakHour) {
//         finalPrice = finalPrice * 1.5;
//     }
//     if (promoCode === "AVTO10") {
//         finalPrice = finalPrice - 2;
//     }
//     if (finalPrice > 3) {
//         console.log(`${finalPrice} AZN`);
//     } else {
//         console.log(`3 AZN`);  
//     }
// }
// calculateTaxiFare(2, true, "AVTO10")


// Task-2
// const calculator = (exam, quiz, attendance) => {
//     totalScore = (exam * 0.6) + (quiz * 0.4);
//     if (totalScore >= 51) {
//         if (attendance >=70) {
//             console.log(`İmtahandan keçdiniz! Yekun bal: ${totalScore}`);
//         } else {
//             console.log("Kəsildiniz: Davamiyyət yetərsizdir!");           
//         }
//     } else {
//         console.log(`Kəsildiniz: Balınız yetərsizdir ${totalScore}`);
//     }
// }
// calculator(50, 100, 80)

// Task-3
// const printReceipt = (clientName, totalPrice, serviceFee) => `MÜŞTƏRİ: ${clientName} | Xidmət haqqı: ${serviceFee} AZN | Yekun ödəniş: ${totalPrice} AZN`;

// const processBill = (clientName, foodAmount, isVIP, printReceipt) => {
//     if (isVIP) {
//         serviceFee = 0;
//     } else {
//         serviceFee = foodAmount * 0.1;
//     }
//     totalPrice = foodAmount + serviceFee;
//     console.log(printReceipt(clientName, totalPrice, serviceFee));
// }
// processBill("Gulnar", 100, true, printReceipt)

// Task-4
const onApproved = (monthlyPayment) => `Kredit təsdiqləndi! Aylıq ödənişiniz: ${monthlyPayment} AZN`;
const onNeedGuarantor = (gap) => `Zamin tələb olunur! Çatışmayan aylıq gəlir: ${gap} AZN`;
const onRejected = (reason) => `Kredit rədd edildi! Səbəb: ${reason}`;
const checkCredit = (salary, requestedAmount, months, onApproved, onNeedGuarantor, onRejected) => {
    monthlyPayment = requestedAmount / months;
    if (monthlyPayment <= salary * 0.5) {
        console.log(onApproved(monthlyPayment));
    } else if (monthlyPayment < salary * 0.7) {
        console.log(onNeedGuarantor(monthlyPayment - (salary * 0.5)));
    } else {
        console.log(onRejected("Aylıq ödəniş gəlirinizə görə çox yüksəkdir!"));
    }
}
checkCredit(100, 300, 12, onApproved, onNeedGuarantor, onRejected)