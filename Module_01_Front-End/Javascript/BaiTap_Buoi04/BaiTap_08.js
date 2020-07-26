/**
    Áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
	Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
    Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất 
 */

var promise1 = new Promise((resolve) => {
    setTimeout(resolve(3), 2000);
}).then((data) => {
    return data;
});

var promise2 = new Promise((resolve) => {
    setTimeout(resolve(7), 5000);
}).then((data) => {
    return data;
});

Promise.all([promise1, promise2]).then((datas) => {
    var result = datas.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);

    console.log(result);
});
