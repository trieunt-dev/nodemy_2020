/**
 * Bài tập 5: Cho chuỗi
 *      var greeting = ‘Welcome to Nodemy, Nodemy is stand for Nodejs Academy’;
 */

var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';

// Bài 5.1: .indexOf tìm xem nodemy nằm ở vị trí nào
console.log(greeting.indexOf('nodemy')); // -1
// ==> Trả về -1. Không tìm thấy vì phương thức indexOf sẽ phân biệt cả 
// chữ hoa và thường

// Bài 5.2: .indexOf tìm xem Nodemy nằm ở vị trí nào
console.log(greeting.indexOf('Nodemy')); // 11
/*
    ==> Trả về index 11. Mặc dù có hai từ Nodemy nhưng nó sẽ trả về từ Nodemy
    được tìm thấy đầu tiên
*/

// Bài 5.3: Dùng .startWith kiểm tra xem có bắt đầu với Welcome không
console.log(greeting.startsWith('Welcome')); // Trả về true

// Bài 5.4: Dùng .substring để lấy chữ Academy
console.log(greeting.substring(46));
console.log(greeting.slice(-7)); // Cách 2
console.log(greeting.substring(greeting.length - 7, greeting.length)); // Cách 3

// Bài 5.5: Dùng .split để tách các từ
console.log(greeting.split(' '));

// Bài 5.6:
var greetingTrim = '   Nodemy  ';
console.log('Độ dài trước khi xóa khoảng trắng:', greetingTrim.length);
var newGreeting = greetingTrim.trim();
console.log('Độ dài sau khi xóa khoảng trắng:', newGreeting.length);

// Bài 5.7: Dùng .include để kiểm tra xem Nodemy có trong câu trên không
console.log(greeting.includes('Nodemy'));

// Bài 5.8: Dùng .replace để thay thế Nodemy thành NODEMY
console.log(greeting.replace('Nodemy', 'Nodemy'.toUpperCase()));
/**
 * ==> Chỉ thay thế được Nodemy đầu tiền được tìm thấy.
 * Nếu muốn thay thế tất cả các từ Nodemy có trong chuỗi thì cần sử dụng biểu
 * thức chính quy (Regx)
 */
// Cách 2
console.log(greeting.replace(/Nodemy/g, 'Nodemy'.toUpperCase()));

// Bài 5.9: Dùng .toUppercase để in hoa chữ cái
console.log(greeting.toUpperCase());
// Bài 5.10: Dùng.charAt để lấy 1 ký tự ở vị trí số 4
console.log(greeting.charAt(4));
