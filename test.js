const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test('One dollar should be 146.26 yen', () =>{
    const dollars = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(dollars).toBeCloseTo(expected, 2);
})

test('One euro should be 1.07 dollars', () =>{
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected, 2);
})

test('ten yen should be 0.05 pounds', () =>{
    const yen = fromYenToPound(10);
    const expected = (10/156.5) * 0.87;
    expect(yen).toBeCloseTo(expected, 2);
})

