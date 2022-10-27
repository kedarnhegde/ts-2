"use strict";
function adder(n1, n2, resultType) {
    let result;
    if (resultType === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + ' ' + n2.toString();
    }
    return result;
}
const combined = adder(20, 90, 'as-number');
console.log(combined);
const stringNumber = adder('11', '000008', 'as-number');
console.log(stringNumber);
const fullName = adder('Kedar', 'Hegde', 'as-text');
console.log(fullName);
