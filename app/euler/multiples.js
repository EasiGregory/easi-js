let total = 0;

let divisibleNumbers = function () {
    let someArray = [];
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            someArray.push(i);
        }
    }
    return someArray;
};

/**
 * Iterates over the array of number and totals them up
 */
divisibleNumbers().forEach((number) => {
    total += number;
});

console.log('Total of all the numbers that are divisible by 3 and 5 are: ' + total);