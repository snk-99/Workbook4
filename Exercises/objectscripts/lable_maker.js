let contact = {
    name: "samuel",
    address: "1234 Way Road",
    city: "Cartersvile",
    state: "GA",
    zip: 30120
}

function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zip}`);
}
printContact(contact);