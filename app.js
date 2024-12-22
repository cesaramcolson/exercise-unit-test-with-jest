const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

//---Convertion functions---//

// currency value conversion; One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollarValue) {
    let eurValue = dollarValue / oneEuroIs.USD;
    let yenValue = eurValue * oneEuroIs.JPY;
    return yenValue
}

function fromEuroToDollar (eurValue) {
    let dollarValue = eurValue * oneEuroIs.USD;
    return dollarValue
}

function fromYenToPound (yenValue) {
    let eurValue =  yenValue / oneEuroIs.JPY;
    let poundValue = eurValue * oneEuroIs.GBP;
    return poundValue
}

console.log(fromDollarToYen(10));
console.log(fromEuroToDollar(10));
console.log(fromYenToPound(1000));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };