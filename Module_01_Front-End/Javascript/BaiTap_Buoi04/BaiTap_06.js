/**
    Bài 6: 
        - Tạo 1 promise1 với tác vụ resovle sau 3 giây (dùng settimeout)
	    - Tạo 1 promise2 tác vụ resolve sau 2 giây
	    - Tạo 1 promise3 tác vụ reject sau 2 giây
        => Dùng .all  để thực hiện song song tác vụ tiết kiệm time.
 */

var promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve(3), 3000);
});

var promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 2000);
});

var promise3 = new Promise((resolve, reject) => {
  setTimeout(reject("Error...."), 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((datas) => {
    console.log(datas);
  })
  .catch((error) => {
    console.log(error);
  });
