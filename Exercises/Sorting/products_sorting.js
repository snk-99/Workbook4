"use strict"
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
];

products.sort(function (a, b) {
    if (a.product < b.product) {
        return -1;
    } else if (a == b) {
        return 0;
    } else return 1;
})

let productName = products.length
for (let i = 0; i < productName; i++) {
    console.log(products[i].product);
}

console.log("-----------------------");
products.sort(function (a, b) {
    if (a.price > b.price) {
        return -1;
    } else if (a == b) {
        return 0;
    } else return 1;
})

let productPrice = products.length
for (let i = 0; i < productName; i++) {
    console.log(products[i].product);
}
