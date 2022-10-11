"use strict"


function parsePartCode(partCode) {
    //finding end of colon to find supply code
    let colonPosition = partCode.indexOf(":");
    let supplierCode = partCode.substring(0, colonPosition);

    //finding end of dash to find product number
    let dashPosition = partCode.indexOf("-");
    let productNumber = partCode.substring(colonPosition + 1, dashPosition);

    //finding start size
    let size = partCode.substring(dashPosition + 1);

    //object 
    let partInfo = {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size,
    };
    return partInfo;
}


let partCode1 = "XYZ:1234-L";
let partInfo = parsePartCode(partCode1);
console.log(partInfo);