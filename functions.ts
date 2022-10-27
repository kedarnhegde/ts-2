function add (n1: number, n2: number) : number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Print Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) : void{    // Will Ignore anything returned from cb() 
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,14));

let Addition: (a: number, b: number) => number;

Addition = add;
 
console.log('Function Assignment : ' + Addition(11,8));

addAndHandle(10,9, (a) => {
    console.log('Callback: ' + a);
})
