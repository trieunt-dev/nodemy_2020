/**
    Bài tập 1: Cho các số 1,2,3,4 hãy thực hiện các các câu lệnh in theo thứ tự:
        console.log(“1”)
        console.log(“2”)
        console.log(“3”)
        console.log(“4”)

    Yêu cầu:
    In ra các số theo thứ tự: 1,3,4,2 ( setTimeOut ). Số 2 được delay 2s sau mới đươc hiện ra, số 4 được delay sau 1s mới được hiện ra.

    Kết quả in ra màn hình là gì?

 */

console.log("1");
setTimeout(() => {
    console.log("2");
}, 2000);
console.log("3");
setTimeout(() => {
    console.log("4");
}, 1000);

/**
 * Kết quả: 1, 3, 4, 2
 * Giải thích:
 *      - Bước 1: In ra 1
 *      - Bước 2: Gặp câu lệnh bất đồng bộ:
 *          => Nó sẽ đẩy ra sang Web API để thực hiện
 *      - Bước 3: Nó sẽ không chờ câu lệnh bước 2 mà sẽ chạy tiếp và In ra 3
 *      - Bước 4: Gặp tiếp câu lệnh bất đồng bộ
 *          => Lại đẩy lệnh sang web API để thực hiện
 *      - Sau khi các quá trình thực hiện xong. Câu lệnh bất đồng bộ nào xong trước nó sẽ đẩy ra hàng đợi.
 *      - Thực hiện câu lệnh trong hàng đợi lần lượt in ra => 4, 2.
 */
