/**
    - promise1 xử lý tác vụ 3s  cho ra kết quả là 2
	- promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
	- promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
	=> in ra màn hình true hoặc false.

 */

var promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
        console.log("--Task 1--");
    }, 3000);
});

promise.then((data) => {
    return new Promise((resolve) => {
        resolve(data * 3);
        console.log("--Task 2--");
    }).then((data) => {
        return new Promise((resolve) => {
            console.log("--Task 3--");
            data > 10 ? resolve(true) : resolve(false);
        }).then((data) => {
            console.log(data);
        });
    });
});
