/*
    Tính phần trăm số âm, số dương, số 0 của một mảng các số tự nhiên. Trả về array như output (dùng template string)
*/

function calcPercentage(arr) {
    let arrayPercentage = [];

    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    for (let i of arr) {
        if (i > 0) {
            countPositive++;
        } else if (i === 0) {
            countZero++;
        } else {
            countNegative++;
        }
    }

    let arrLength = arr.length;
    let positive = (countPositive / arrLength) * 100;
    let negative = (countNegative / arrLength) * 100;
    let zero = (countZero / arrLength) * 100;

    arrayPercentage.push(positive, negative, zero);
    return arrayPercentage;
}

let numbers = [1, 0, -4, 2, -5, 4, 6, 0];

console.log(calcPercentage(numbers));
