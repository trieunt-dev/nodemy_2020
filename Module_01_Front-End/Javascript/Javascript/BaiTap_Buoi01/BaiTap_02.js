/**
 * Chủ đề Object
 * - Bài 1: Khai báo object và in giá trị
 */

// Bài 1:
var person = {
    firstName: 'Nguyễn Tuấn',
    ['lastName']: 'Triều',
    showInfo: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Cách 1:
var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);
// Cách 2:
var fullNameOther = person.showInfo();
console.log(fullNameOther);

console.log("========================================");

// Bài 2:
var car = {
    name: 'BMW',
    price: 300000,
    origin: 'Đức'
}

// Bài 3:
/*
    Cách 1:
    car.color = 'Đen';
*/
car['color'] = 'Đen';
car.price = 250000;

car.showInfo = function () {
    return `Name: ${this.name} - Color: ${this.color} - Xuất xứ: ${this.origin} - Giá: $${this.price}`;
}
console.log(car.showInfo());