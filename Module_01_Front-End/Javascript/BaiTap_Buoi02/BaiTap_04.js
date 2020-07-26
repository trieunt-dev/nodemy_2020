/**
 * Bài tập 4: 
 * - Trung clone mọi thuộc tính từ object Đoàn
 * - Để phân biệt thì Trung sẽ thêm 1 property: clone = true
 */

var doan = {
    name: 'Doan',
    age: 22,
    salary: 1000
}

// Cách 1: Sử dụng spread
var trung = {
    ...doan,
}
trung.name = 'Trung';
trung.clone = true;

console.log(trung);

// Cách 2: Sử dụng Object.assign()
var trungOther = Object.assign(doan, { name: 'Trung' });
trungOther.clone = true;
console.log(trungOther);