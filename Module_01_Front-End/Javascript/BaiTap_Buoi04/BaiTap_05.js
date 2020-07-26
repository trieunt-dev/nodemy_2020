/**
 * Bài 5: Tạo progessbar trên W3school
 */

var width = 0;

var progessbar = setInterval(() => {
    console.log(width);
    width == 100 && clearInterval(progessbar);
    ++width;
}, 100);
