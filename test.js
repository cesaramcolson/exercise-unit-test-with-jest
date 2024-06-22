const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(3.745);
})

test("One euro should be 156.5 yen", function() {
    const yen = fromDollarToYen(3.5);
    const valueInEuro = 3.5 / 1.07;
    const expected = valueInEuro * 156.5;
    expect(yen).toBeCloseTo(511.9158);
})


test("One euro should be 0.87 pound", function() {
    const yen = fromDollarToYen(3.5);
    const pound = fromYenToPound(yen);
    const valueInEuro = 3.5 / 1.07;
    const valueInYen = valueInEuro * 156.5;
    const expected = (valueInYen / 156.5) * 0.87;
    expect(pound).toBeCloseTo(2.8457);
});