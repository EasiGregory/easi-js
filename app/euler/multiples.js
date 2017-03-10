let total = 0;
numbersArray = [];

/**
 * Checks for numbers divisible by 3 and 5 within desired range and pushes them into an array
 * @param number
 */
function pushNumbers(number) {
    let startingPoint = 0;
    while (startingPoint < number) {
        if (startingPoint % 3 === 0 || startingPoint % 5 === 0) {
            console.log(startingPoint);
            numbersArray.push(startingPoint);
        }
        startingPoint++;
    }
}

pushNumbers(1000);

/**
 * Iterates over the array of number and totals them up
 */
numbersArray.forEach(function (number) {
    total += number;
});

console.log('Total of all the numbers that are divisible by 3 and 5 are: ' + total);