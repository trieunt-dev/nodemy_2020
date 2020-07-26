/**
 * In thông tin của mảng object
 */

var persons = [{
    name: 'Nam',
    job: 'Dev'
}, {
    name: 'Duong',
    job: 'Tester'
}]

// Cách 1
for (let person in persons) {
    console.log(persons[person].name + ' có công việc là: ' + persons[person].job);
}

// Cách 2
for (let person of persons) {
    console.log(person.name + ' có công việc là: ' + person.job);
}