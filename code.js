// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if (!isNaN(input)) {
        return 'Hello, World!'
    } else if (typeof input === "string") {
        return "Hello, " + input + "!";
    } else {
        return 'Hello, World!';
    }
}