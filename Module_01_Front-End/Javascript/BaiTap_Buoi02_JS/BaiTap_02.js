/**
 * Tính tổng giá trị của array các số, không biết phần tử số lượng của array đó.
 * - C1: dùng for, for...of.
 * - C2: rest & reduce.
 * input: [1,2,3,4] -> output: 10
 */

// Cách 1: Sử dụng for
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Cách 2: Sử dụng for of
function sumArray2(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

// Cách 3: Sử dụng rest và reduce
function sumArray3(arr) {
    return arr.reduce((accumenlator, currentValue) => {
        return accumenlator + currentValue;
    });
}

let numbers = [1, 4, 5, 9, 10];

let sum = sumArray3(numbers);
console.log(sum);
