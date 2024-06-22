const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One euro should be 156.5 yen", function() {
    const { fromDollarToYen, fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const yen = fromDollarToYen(dollars);
    const expected = 3.745 * 156.5;
    expect(fromDollarToYen(dollars)).toBe(586.0925);
})

test("One euro should be 0.87 pound", function() {
    const { fromYenToPound, fromDollarToYen, fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const yen = fromDollarToYen(dollars);
    const pound = fromYenToPound(yen);
    const expected = 586.0925 * 0.87;
    expect(fromYenToPound(yen)).toBe(509.900475);
})


