let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kedar Hegde';

if (typeof userInput === 'string') {
    userName = userInput;
}


function generateError(message: string, code: number) : never {   // never is different from void. void returns undefined. never doesn't return anything.
    throw {                     // This never returns anything
        message: message,
        errorCode: code
    };

    // while (true) {}           // This never returns anything

} 

generateError('Not Found!', 404);