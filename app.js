"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Kedar Hegde';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
    // while (true) {}           // This never returns anything
}
generateError('Not Found!', 404);
