/**
 * ========= Bài tập 7 ============
 */

// Bài 7.1: Tạo ra số random từ 1 - 10, 1-100, 50 - 10
var randomOne = Math.floor(Math.random() * 10 + 1);
console.log('Từ 1 - 10:', randomOne);

var randomTwo = Math.floor(Math.random() * 100 + 1);
console.log('Từ 1 - 100:', randomTwo);

var randomThree = Math.floor(Math.random() * (50 + 1)) + 50;
console.log('Từ 50 - 100:', randomThree);


// Bài 7.2: Làm tròn số 7.434345 (.round), làm tròn lên (.ceil) , làm tròn xuống (.floor)
var number = 7.434345;
console.log('- Làm tròn số: ', Math.round(number));
console.log('- Làm tròn lên: ', Math.ceil(number));
console.log('- Làm tròn xuống: ', Math.floor(number));

// Bài 7.3: Lấy sau số thập phân 2 đơn vị :  ví dụ 7.434345 = 7.43
console.log('- Lấy 2 chữ số thập phân: ', number.toFixed(2));

// Bài 7.4: Cho string ‘8’ và  ‘5’. Dùng parseInt để tính tổng ( kết quả = 13)
var a = '8', b = '5';
var sum = parseInt(a) + parseInt(b);
console.log('Tổng:', sum);

// Bài 7.5: Tính 2^10
// Cách 1:
console.log(Math.pow(2, 10));
// Cách 2:
console.log(2 ** 10);