var sum = -1;

for (var i = 0; i < 100; i++) {
    var sum = i * 100;
}

console.log(i); // 100

console.log(sum); // 9900

/**
 * Giải thích:
 * - Từ khóa var có phạm vi truy cập global, trong block scope và bên trong function
 * - Đầu tiên biến sum sẽ có giá trị -1.
 * - Biến sum sẽ được khai báo lại và cập nhật giá trị với i * 100 => sum = 0 trong lần chạy đầu tiên.
 * - Khi chạy đến i < 100 => 99 * 100 = 9900
 * - Tiếp tục câu lệnh i được tăng lên 1 lần nữa i = 100. Quay lại kiểm tra. Lúc này không thỏa điều kiện
 * nên vòng lặp sẽ dừng.
 * Vì vậy i lúc này đã có giá trị 100.
 *
 * - Một biến được khai báo bởi từ khóa var có thể được khai báo lại. Vì vậy biến trong for hoàn toàn hợp
 * lệ. Nhưng với từ khóa let thì không thể.
 */
