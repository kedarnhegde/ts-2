"use strict";
function add(n1, n2, n3) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Print Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 14));
let Addition;
Addition = add;
console.log('Function Assignment : ' + Addition(11, 8));
addAndHandle(10, 9, (a) => {
    console.log('Callback : ' + a);
});
