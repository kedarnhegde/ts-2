function add(n1: number,n2: number, printResult: boolean, phrase: string) {
    const result = n1+n2;
    if(printResult) {
        console.log( phrase + result);    
    } else {
        return n1+n2 ;
    }
}

let number1: number;
number1 = 5;
const number2 = 5.6; 
const printResult = true;
const phrase = 'Result is: '

const result = add(+number1, +number2, printResult, phrase);
