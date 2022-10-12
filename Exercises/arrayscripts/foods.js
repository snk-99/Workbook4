"use strict"

function getMealCost(order) {
    let numOrders = order.length;
    let sum = 0;

    for (let i = 0; i < numOrders; i++) {
        sum += order[i].price;
    }
    return sum
}


let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

let subtotal = getMealCost(lunch);
console.log(`Subtotal: $${subtotal}`);

// total with a tax of 
let total = subtotal + (subtotal * 0.08);
console.log(`Total: $${total.toFixed(2)}`);


