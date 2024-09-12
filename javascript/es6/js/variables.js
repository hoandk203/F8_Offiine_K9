// ES6 phiên bản javascript ra mắt năm 2015

// Khai báo biến
/*
let, cónt =>
    - chỉ hoạt động trong phạm vi mà nó khai báo và các phạm vi con
    - không được khai báo lại trong cùng 1 phạm vi

let => được phép cập nhật lại giá trị biến
const => không được cập nhật lại và phải gán luôn khi khai báo

phạm vi:
- global scope
- function scope
- block scope
- module scope
*/

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

// let a = 10;
// if (a >= 10) {
//     let b = 20;
//     console.log(b);
//     let a = b;
//     console.log(a);
// }

// console.log(a);

a = 10;
console.log(a);
let a;

//let cũng có hoisting nhưng không dùng được, muốn biết tại sao không dùng được thì tìm hiểu Temporal Dead Zone
