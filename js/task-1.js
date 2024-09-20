function makeTransaction(quantity, pricePerPeriod) {
    const totalPrice = quantity * pricePerPeriod;
    return "You ordered " + quantity + " droids worth " + totalPrice + " credits!";
}

const message = makeTransaction(5, 3000);
console.log(message); // You ordered 5 droids worth 15000 credits!