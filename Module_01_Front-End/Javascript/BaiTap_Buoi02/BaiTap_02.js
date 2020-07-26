/**
 * Bài tập 2: cho arr [1,8,5,2,7,6,9,2,6] dùng .sort để sắp xếp 
 * mảng tăng dần và giảm dần
 */

var numbers = [1, 8, 5, 2, 7, 6, 9, 2, 6];

console.log("Tăng dần: ");
numbers.sort((numberOne, numberTwo) => {
    return numberOne > numberTwo ? 1 : numberOne == numberTwo ? 0 : -1;
})
console.log(numbers);

numbers = [1, 8, 5, 2, 7, 6, 9, 2, 6]
console.log("Giảm dần: ");
numbers.sort((numberOne, numberTwo) => {
    return numberOne < numberTwo ? 1 : numberOne == numberTwo ? 0 : -1;
})
console.log(numbers);