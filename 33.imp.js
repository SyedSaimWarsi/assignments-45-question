var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbersArray_1 = numbersArray; _i < numbersArray_1.length; _i++) {
    var number = numbersArray_1[_i];
    var ordinalEnding = '';
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(number).concat(ordinalEnding));
}