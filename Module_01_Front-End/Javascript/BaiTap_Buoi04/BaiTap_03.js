/**
 * 
	function capitalName(){
		this.name = this.name.toUpperCase();
	}

    var person1 = {
    name: 'nam', birthDay: '1996-11-26'
    }
    var person2 = {
    name: 'hiep', birthDay: '1999-01-26'
    }
    capitalName.call(person1);

    Đọc hiểu được lợi ích của call, 
    Tương tự viết 1 hàm formatBirthDay theo định dạng DD - MM - YYYY áp dụng cho 2 person

    // Hàm call() trong JS dùng để thực thi một hàm nào đó với các tham số được truyền vào,
    có sẵn trong các đối tượng là function

 */

function capitalName() {
  this.name = this.name.toUpperCase();
}

function formatBirthDay() {
  var beginBirthday = this.birthDay.split("-");
  this.birthDay =
    beginBirthday[2] + "/" + beginBirthday[1] + "/" + beginBirthday[0];
}

var person1 = {
  name: "Nam",
  birthDay: "1996-11-26",
};

var person2 = {
  name: "Hiep",
  birthDay: "1999-01-26",
};

capitalName.call(person1);
formatBirthDay.call(person1);
console.log(person1);

capitalName.call(person2);
formatBirthDay.call(person2);
console.log(person2);
