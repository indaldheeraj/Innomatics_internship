function applyCoupon(orderAmount, couponCode) {
    const discount = 500;
    const shipping = 200;
    let finalAmount = orderAmount;
    
    if (couponCode === "DISSPLC12" && orderAmount > discount) {
        finalAmount *= 0.90; 
    } else if (couponCode === "FREESHIP" && orderAmount > shipping) {
        return `Final price: RS${finalAmount.toFixed(2)} with free shipping`;
    }
    
    return `Final price: RS${finalAmount.toFixed(2)}`;
}
//console.log(applyCoupon(500, "DISSPLC12")); 
console.log(applyCoupon(230, "FREESHIPPING")); 
//console.log(applyCoupon(150, "DISSPLC12")); 
//console.log(applyCoupon(700, "FREESHIPPING")); 