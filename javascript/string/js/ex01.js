// chuỗi là tập hợp các ký tự
// var fullname= 'Thai Viet Hoan';
// console.log(fullname);

// kiểm tra 1 biến có phải chuỗi không
// if(typeof fullname === "string"){
//     console.log(`Đúng`);
// }

//Lưu ý: trong tất cả các kiểu dữ liệu (trừ null, undefined), js sẽ bọc object ở bên ngoài kiểu dữ liệu để chứa các phương thức và thuộc tính xử lý với kiểu dữ liệu tương ứng

//Mỗi kiểu dữ liệu trong js sẽ có 1 hàm tạm (constructor) tương ứng
// chuỗi ==> String()
// số ==> Number()
// logic ==> Boolean()
// mảng ==> Array()
// đối tượng ==> Object()

// console.log(String.prototype);
// console.log(fullname.length);


var str= 'Học F8 lập trình tại F8';

//1. at(index): trả về ký tự dựa vào index
console.log(str.charAt(2));

//2. charCodeAt(index): trả về mã ASCII của ký tự theo index
console.log(str.charCodeAt(2));

//3. concat(): nối chuỗi (ít dùng)
console.log(str.concat('Hello 1', 'Hello 2'));

//4. length: trả về độ dài của chuỗi
console.log(str.length);

//5. indexOf(sub-string): trả về index đầu tiên tìm được chuỗi sub-string trong chuỗi cha, nếu không tìm được trả về -1
console.log(str.indexOf("F8"));

//6. lastIndexOf(sub-string): trả về index cuoois cùng tìm được
console.log(str.lastIndexOf("F8"));

//7. includes(sub-string): tìm chuỗi sub-string trong chuỗi cha và trả về true false
console.log(str.includes('F8'));

//8. slice(start, end): cắt chuỗi từ index start đến end - 1
console.log(str.slice(0, 5)); // cắt từ index 0 - 4
console.log(str.slice(4)); //cắt từ index 4 - hết chuỗi
console.log(str.slice(-5)) // cắt 5 giá trị cuối

//9. replace(old_string, new_string): thay thấy old_string thành new_string
console.log(str.replace("F8", "F88"));

//10. replaceAll(old_string, new_string): thay thế tất cả
console.log(str.replaceAll("F8", "F88"));

//11. startsWith(sub_string): tìm chuỗi sub_string có bắt đầu trong chuỗi cha không
console.log(str.startsWith("Học"));

//12. endsWith(sub_string): tìm chuỗi sub_string có kết thúc trong chuỗi cha không
console.log(str.endsWith("F8"));

//13. toUpperCase(): chuyển thành chữ hoa
console.log(str.toUpperCase());

//14. toLowerCase(): chuyển thành chữ thường
console.log(str.toLowerCase());

var strr= "  Thai Viet Hoan   "
//15. trim(): xóa khoảng trắng đầu và cuối chuỗi
console.log(strr.trim());

//16. trimStart(), trimLeft(): xóa khoảng trắng đầu chuỗi
console.log(strr.trimStart());
console.log(strr.trimLeft());

//17. trimEnd(), trimRight(): xóa khoảng trắng đầu chuỗi
console.log(strr.trimEnd());
console.log(strr.trimRight());

//18. split(): tách chuỗi thành mảng dựa vào ký tự phân tách
console.log(str.split(' '));

//19. repeat(): lặp lại chuỗi theo số lần nhất định
console.log("*".repeat(10));

//20. match(): cắt chuỗi dựa vào biểu thức chính quy (regex)
var str= 'hello anh em F8, So dien thoai 0923523975 và so nua 0123456789'

var phones= str.match(/0\d{9}/g);
console.log(phones);