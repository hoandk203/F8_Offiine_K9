// comment 1 dong
/*
comment nhieu dong
comment nhieu dong
comment nhieu dong
*/

// khai bao bien'
// var tenbien1, tenbien2, tenbien3...;
// var tenbien1= value1, tenbien2= value2...; gan gia tri luon
// dung` camelCase
// Cho phep: chu thuong, chu hoa, so, _ , $ (khong duoc bat dau bang so)

// var username, userEmail, userId;
// var customer= 'Hoang An', course= 'Fullstack';

// hien thi o tab console

// console.log(customer);
// console.log(username);
// console.log(course);

// hien thi len giao dien trinh duyet

// document.write(customer);
// document.body.innerHTML = course;

var company= "F8";
// var welcome= "<h1>Chao mung ban den voi "+company+"</h1>"
var welcome= `<h1>Chao mung ban den voi ${company}</h1>
<h2>Hoang An F8</h2>`
document.write(welcome)

var a=10, b=20;
var result= `<h2>Ket qua phep tinh ${a} + ${b} = ${a + b}</h2>`
document.write(result)