const regularPurchases = 300000;
const regularPurchasesPrecent = 0.01;
let cashback = regularPurchases * regularPurchasesPrecent;
console.log(cashback);
if (cashback > 3000) {
    cashback = 3000; 
}
