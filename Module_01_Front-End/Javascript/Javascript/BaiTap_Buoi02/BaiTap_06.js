/**
 * ======= Bài tập 6 ==========
 * Cho var phucBirthday = ‘26-11-1992’
 * Cho var cuongBirthday= ‘27-11-1994’
 */

// Bài 6.1: Đổi định dạng ngày thành ‘1992-11-26’
var convertBirthday = (birthdayOrigin) => {
    var birthday = birthdayOrigin.split('-');
    return `${birthday[2]}-${birthday[1]}-${birthday[0]}`;
}
var phucBirthday = '26-11-1992';
phucBirthday = convertBirthday(phucBirthday);
console.log('Birthday của Phúc:', phucBirthday);
var cuongBirthday = '27-11-1994';
cuongBirthday = convertBirthday(cuongBirthday);
console.log('Birthday của Cường:', cuongBirthday);

// Bài 6.2: Quy đổi về cả 2 về object date
console.log("==============================");
phucBirthday = new Date(phucBirthday);
console.log('Birthday của Phúc: [Object]', phucBirthday);
cuongBirthday = new Date(cuongBirthday);
console.log('Birthday của Cường: [Object]', cuongBirthday);

// Bài 6.3: So sánh xem phuc hay cuong lớn tuổi hơn
var result = phucBirthday < cuongBirthday ? 'Phúc lớn hơn cường' : phucBirthday > cuongBirthday ? 'Cường lớn hơn phúc' : 'Cả hai bằng nhau';
console.log(result);

// Bài 6.4: Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?

var day100 = phucBirthday.getDate() + 100;
phucBirthday.setDate(day100);
console.log('Sau 100 ngày từ sinh nhật của phúc là:');
console.log('Thứ', phucBirthday.getDay() + 1, 'ngày', phucBirthday.getDate());


