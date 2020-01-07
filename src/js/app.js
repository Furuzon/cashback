// const regularPurchases = 300000;
// const regularPurchasesPrecent = 0.01;
// let cashback = regularPurchases * regularPurchasesPrecent;
// console.log(cashback);
// if (cashback > 3000) {
//     cashback = 3000; 
// }

const increasedPurchases = 10000;
const increasedPurchasesPrecent = 0.05;

const specialPurchases = 50000;
const specialPurchasesPrecent = 0.3;

let cashback = increasedPurchases * increasedPurchasesPrecent + specialPurchases * specialPurchasesPrecent;
console.log(cashback);
