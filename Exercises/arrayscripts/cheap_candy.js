"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
];

// TODO: fill the array with 10 candies of various // price ranges;
// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?

function getCheapCandy() {
    let cheapCandys = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price < 4) {
            cheapCandys.push(product)
        }
    }
    // return cheapCandys
    console.log("Candy under $4");
    console.log(cheapCandys);
}
getCheapCandy();
console.log("Only M&Ms");

function getMndM() {
    let candy = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.product.indexOf("M&M") != -1) {
            //sets to new array
            candy.push(product)
        }
    }
    console.log(candy);
}

getMndM();
console.log("_____________________");

function getSwedishFish() {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.product == "Swedish Fish") {
            console.log("We sell Swedish Fish");
        }
    }
}

getSwedishFish();