// Functions Basic
console.log("Add 7 to 3: " + add7(3));
console.log("Multiply 5 and 6: " + multiply(5, 6));
console.log("Capitalize 'heLLo wOrld': " + capitalize("heLLo wOrld"));
console.log("Last letter of 'Booty': " + lastLetter("Booty"));

// Problem Solving
fizzBuzz();

// Functions
function add7(x) {
    return x + 7;
}

function multiply(x, y) {
    return x * y;
}

function capitalize(word) {
    return (
        String(word).charAt(0).toUpperCase() +
        String(word).slice(1).toLowerCase()
    );
}

function lastLetter(word) {
    return String(word).charAt(word.length - 1);
}

function fizzBuzz(counter = 100) {
    let self = this;

    for (let i = 1; i <= counter; i++) {
        if (self.isFizz(i) && self.isBuzz(i)) {
            console.log("FizzBuzz");
        } else if (self.isFizz(i)) {
            console.log("Fizz");
        } else if (self.isBuzz(i)) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

    return;
}

function isFizz(num) {
    return num % 3 === 0;
}

function isBuzz(num) {
    return num % 5 === 0;
}