const {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal  23', ()=>{

    let total = sum(14,9);

    expect(total).toBe(23);

});

//fromEuroToDollar
test('convert from Euro to dollar', ()=>{
const dollars = fromEuroToDollar(3.5);
expect(fromEuroToDollar(3.5)).toBe(4.2);
});

//fromDollarToYen
test('convert from dollar to yen', ()=>{
    const yens = fromDollarToYen(3.5);
    expect(fromDollarToYen(3.5)).toBe(505.26000000000005);
    });

//fromYenToPound
    test('convert from yen to pound', ()=>{
        const pounds = fromYenToPound(3.5);
        expect(fromYenToPound(3.5)).toBe(13.16);
        });    
