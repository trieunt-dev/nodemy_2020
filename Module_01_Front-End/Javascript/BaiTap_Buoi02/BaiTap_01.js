/**
 * Cho array = [1,5,7,8,9,15] sử dụng map hoặc filter
 */

var numbers = [1, 5, 7, 8, 9, 15];
// ======== Bài 1.1: In ra các số chẵn trong mảng ========

// Cách 1: Sử dụng vòng lặp thuần
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) console.log(numbers[i]);
    // Hoặc numbers[i] % 2 == 0 && console.log(numbers[i]);
}
console.log("-----");
for (var i in numbers) {
    numbers[i] % 2 == 0 && console.log(numbers[i]);
}
console.log("-----");
for (var i of numbers) {
    numbers[i] % 2 == 0 && console.log(numbers[i]);
}
console.log("====================");

// Cách 2: Sử dụng filter
var listEven = numbers.filter(function (number) {
    return number % 2 == 0;
})
console.log(listEven);
console.log("====================");

// Cách 3: Sử dụng forEach()
var listEven2 = numbers.filter(function (number) {
    return number % 2 == 0;
})

console.log(listEven2);
console.log("====================");
// ======== Bài 1.2: In ra các số lẻ trong mảng ========
var listOdd = numbers.filter(function (number) {
    return number % 2 !== 0;
})
console.log(listOdd);
console.log("====================");

// ======== Bài 1.3: In ra các số lớn hơn hoặc bằng 5 trong mảng ======
var number3 = numbers.filter((number) => {
    return number >= 5;
})
console.log(number3);
console.log("====================");

// ======== Bài 1.4: In ra các số chia hết cho 5 trong mảng ======
var number4 = numbers.filter((number) => {
    return number % 5 === 0;
})
console.log(number4);
console.log("====================");

// == Bài 1.5: Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị ==
var listNumber5 = numbers.map((number) => {
    return number > 5 ? ++number : number;
})
console.log(listNumber5);
console.log("====================");

// ==== Bài 1.6: Copy mảng từ phần tử số 3 đến phần tử cuối cùng ====
var newArrayNumber = numbers.slice(3);
console.log(newArrayNumber);
console.log("====================");

// ==== Bài 1.7: Xóa 1 phần tử trong mảng ======
console.log('Mảng ban đầu', numbers);
numbers.splice(3, 1);
console.log('Mảng sau khi xóa', numbers);
console.log("====================");

// ==== Bài 1.8: Thêm 1 phần tử trong mảng ======
console.log('Mảng ban đầu', numbers);
numbers.push(22);
// hoặc numbers.splice(3, 0, 10);
console.log('Mảng sau khi thêm', numbers);
console.log("====================");

// ===== Bài 1.9: Tăng kết quả của các phần tử array lên 2 lần =====
console.log('Mảng ban đầu', numbers);
for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}
console.log('Mảng sau khi tăng', numbers);