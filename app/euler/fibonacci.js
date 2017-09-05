const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(number) {
    if (number === 1 || number === 2) {
        return 1;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

function fibonacci2(number) {
    if (number === 1 || number === 2) {
        return 1;
    }
    let fib1 = 1, fib2 = 1, fibonacci = 1;
    for (let i = 3; i <= number; i++) {
        fibonacci = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibonacci;
    }
    return fibonacci;
}

rl.question('What number would you like to start with? ', (answer) => {
    for (let i = 1; i <= answer; i++) {
        console.log(fibonacci(i));
    }
    rl.close();
});

