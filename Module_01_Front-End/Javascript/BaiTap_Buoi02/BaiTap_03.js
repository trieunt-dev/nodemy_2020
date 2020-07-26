/**
 * =============== Bài tập 3 =================
 * Cho array person sau:
 *      var person = [
 *          {
 *              name: ‘Trung’,
 *              class: ‘Nodemy01’,
 *              dateJoin: ‘05-02-2020’,
 *              age: 20
 *          },
 *          {
 *              name: ‘Phong’,
 *              class: ‘Nodemy01’,
 *              dateJoin: ‘06-01-2020’,
 *              age: 19
 *          },
 *          {
 *              name: ‘Nam’,
 *              class: ‘Nodemy02’
 *              dateJoin: ‘25-01-2020’,
 *              age: 20
 *          }
 *      ]
 */

var person = [
    {
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '05-02-2020',
        age: 20
    },
    {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06-01-2020',
        age: 19
    },
    {
        name: 'Nam',
        class: 'Nodemy02',
        dateJoin: '25-01-2020',
        age: 20
    }
]

// Bài 3.1: Dùng .sort  để sắp xếp mảng object có tuổi tăng dần
var agePersonSort = person.sort((personOne, personTwo) => {
    return personOne.age > personTwo.age ? 1 : personOne.age == personTwo.age ? 0 : -1;
});
console.log(agePersonSort);

// Bài 3.2: Dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
function convertStringToDate(date) {
    var stringDateConvert = date.split('-');
    var newDate = stringDateConvert[2] + "/" + stringDateConvert[1] + "/" + stringDateConvert[0];
    return new Date(newDate);
}
var dateJoinPersonSort = person.sort((personOne, personTwo) => {
    var dateOne = convertStringToDate(personOne.dateJoin);
    var dateTwo = convertStringToDate(personTwo.dateJoin);

    return dateOne > dateTwo ? 1 : dateOne == dateTwo ? 0 : -1;
})

console.log(dateJoinPersonSort);

// Bài 3.3: Dùng .filter để tìm ra những học viện tham gia trước tháng 2
var personJoin = person.filter((person) => {
    var dateJoin = convertStringToDate(person.dateJoin);
    return dateJoin.getMonth() + 1 < 2;
})
console.log(personJoin);

// Bài 3.4: Dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện
var personName = person.map((person) => {
    return {
        name: person.name.toLocaleUpperCase(),
        class: person.class,
        dateJoin: person.dateJoin,
        age: person.age
    }
})

console.log(personName);

