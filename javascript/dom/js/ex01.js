/*
DOM : Document Object Model
Mô hình hóa tài liệu HTML thành các object để dễ dàng thao tác, chỉnh sửa HTML
=> sử dụng các object để thay đổi HTML => giao diện sẽ thay đổi

các loại DOM
- DOM Document
- DOM Element
- DOM HTML
- DOM CSS
- DOM Event
- DOM Event Listener
- DOM Node, NodeList
- DOM Navigation

- Bổ sung: Web Component, Custom Element, Shadow DOM
*/

// DOM Element => thao tác dựa vào các thẻ html có sẵn để trả về object ( Element node)

//1. document.getElementById(id)
//chỉ trả về 1 phần tử đầu tiên
// var title= document.getElementById("title");
// console.log(title);

//2. document.getElementsByClassName(class)
//trả về 1 danh sách các element thỏa mãn điều kiện
// var titleList= document.getElementsByClassName("title");
// console.log(titleList);

//3. document.getElementsByTagName(tên thẻ)
// trả về 1 danh sách các element thỏa mãn điều kiện
// var titleList= document.getElementsByTagName("h1")
// console.log(titleList);

//4. document.querySelector(selector)
// dựa vào selecctor của CSS để chọn => trả về 1 phần tử đầu tiên
// var titleList= document.querySelector(".title");
// console.log(titleList);

//5. document.querySelectorAll(selector)
// dựa vào selector của CSS để chọn nhưng trả về 1 danh sách chứa selector thỏa mãn
// var titleList= document.querySelectorAll(".title");
// console.log(titleList);

//Trường hợp đặc biệt
// Các thẻ lớn
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// document.title= "F8 - Học lập trình để đi làm"

//truy cập bằng name
console.log(document.login_form.email);
document.login_form.email.value= "hoandk203"
document.login_form.email.placeholder= "Địa chỉ email..."