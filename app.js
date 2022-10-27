var userInput;
var userName;
userInput = 5;
userInput = 'Kedar Hegde';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code,
        correct: 'Write it'
    };
}
generateError('Not Found!', 404);
