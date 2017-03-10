function divisibleNumbers() {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    return total;
}

console.log('Total of all the numbers that are divisible by 3 or 5 are: ' + divisibleNumbers());