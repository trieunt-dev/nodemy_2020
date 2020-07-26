// Bài tập 6: In toàn bộ thông tin của object
var person = {
    name: 'Nam',
    job: 'Dev',
    phone: 0866633805,
    company: 'Nodemy',
    group: ['Nodejs.vn', 'Nodejs Viet Nam'],
    website: 'http://nodemy.vn'
}

for (let item in person) {
    console.log(person[item]);
}