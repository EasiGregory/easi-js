let kg = 0.453592;
let cent = 2.54;

function calcBmr(weight, height, age) {
    const weightToKg = weight * kg;
    const heightToCent = height * cent;
    console.log(`Your weight in kgs: ${weight * kg}`);
    console.log(`Your height in centimeters: ${height * cent}`);

    return 66 + (13 * weightToKg) + (5 * heightToCent) - (6.8 * age);
}

function calcBmrPlusActivity(bmr) {
    return bmr * 1.375;
}

let yourBmr = calcBmr(212, 72, 32);
let yourActivity = calcBmrPlusActivity(yourBmr);

console.log(yourActivity);
console.log('Hello');
