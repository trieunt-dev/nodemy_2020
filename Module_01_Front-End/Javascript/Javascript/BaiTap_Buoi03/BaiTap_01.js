// Bài tập 1
/**
 * for(var i = 0; i < 10 ; i++){}
 * console.log(i) Giá trị của i là gì ?
 */

/**
 * Đáp án: i = 10.
 * - Biến i là biến có tác dụng toàn cục
 * - Khi vòng lặp chạy đến 9, nó vẫn tăng lên 1 đơn vị lúc này i = 10
 * - Sau khi kiểm tra điều kiện không thõa 10 < 10 nên vòng lặp sẽ dừng
 * - Lúc này i = 10.
 */

// Bài tập 2
/**
 * for(let i = 0; i < 10 ; i++){}
 * console.log(i)
 */

for (let i = 0; i < 10; i++) { }
console.log(i);

/**
 * Đáp án: i sẽ báo lỗi không tồn tại
 * - Vì biến i chỉ có tác dụng trong block scope {}
 */