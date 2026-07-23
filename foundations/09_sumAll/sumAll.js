const sumAll = function (x, y) {
    if (typeof x !=='number' || typeof y !=='number' || 
        !Number.isInteger(x) || !Number.isInteger(x) ||
        x < 0 || y < 0) {
        return 'ERROR';
    }

    let numArray = [x, y];
    numArray.sort();

    let result = 0;
    for (let i = numArray[0]; i <= numArray[1]; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
