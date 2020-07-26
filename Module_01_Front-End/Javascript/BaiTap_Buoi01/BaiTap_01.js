/**
 * Cho array = [1,5,7,8,9,15,8]
 * - in ra các số chẵn của mảng
 * - in ra các số lẻ của mảng
 * - in ra các số lớn hơn hoặc bằng 5 của mảng
 * - Cộng tổng các số chia hết cho 5 của mảng
 * - Tìm ra tích 3 số đầu của mảng array
 * - Tính tổng 3 phần tử cuối của mảng
 * - Tìm xem trong array có phần tử nào là số 5 không?
 * - Đếm số phần tử = 8 trong mảng;
 */

var numberArray = [1, 5, 7, 8, 9, 15, 8];
// =========== in ra các số chẵn của mảng ===========
// Các số chẵn của mảng - Cách 1 (for)
/*
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) console.log(numberArray[i]);
    }
*/

//  Các số chẵn của mảng - Cách 2 (sử dụng function)
/*
    function findEvenNumber(numberArray) {
        var result = '';
        for (var number in numberArray) {
            if (numberArray[number] % 2 === 0) result += numberArray[number] + ' ';
        }
        return result;
    }

    console.log(findEvenNumber(numberArray).trim());
*/

// =========== Các số lẻ của mảng ===========
/*
    function findOddNumber(numberArray) {
        var result = '';
        for (var number of numberArray) {
            number % 2 !== 0 ? result += number + ' ' : '';
        }
        return result;
    }

    console.log(findOddNumber(numberArray));
*/

// =========== Các số lớn hơn hoặc bằng 5 của mảng ===========
/*
    var result = '';
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] >= 5) result += numberArray[i] + ' ';
    }
    console.log(result);
*/

// =========== Tổng các số chia hết cho 5 của mảng ===========
/*
    var total = 0;
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 5 === 0) {
            total += numberArray[i];
        }
    }
    console.log(total);
*/

// =========== Tìm ra tích 3 số đầu của mảng array ===========
/*
    // Cách 1
    var sum = 1;
    for (var i = 0; i < 3; i++) {
        sum *= numberArray[i];
    }
    console.log(sum);
    // Cách 2
    sum = 1;
    for (var i = 0; i < numberArray.length; i++) {
        if (i >= 3) break;
        sum *= numberArray[i];
    }
    console.log(sum);
*/

// =========== Tính tổng 3 phần tử cuối của mảng ===========
/*
    var total = 0;
    var count = 1;
    var indexStart = numberArray.length - 1;
    for (var i = indexStart; i >= 0; i--) {
        total += numberArray[i];
        count++
        if (count > 3) break;
    }
    console.log(total);
*/

// =========== Tìm xem trong array có phần tử nào là số 5 không? ===========
/*
    var isNumber = false;

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 5) isNumber = true;
    }
    console.log(isNumber);
*/
var count = 0;

for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === 8) count++;
}
console.log(count);