# Regex

Website test: regex101.com

## các ký hiệu cơ bản

1. string -> khớp chuỗi string nằm trong chuỗi cần kiểm tra ( như includes)
2. ^ (đầu biểu thức) -> khớp biểu thức nằm ở đầu chuỗi
3. $ (cuối biểu thức) -> khớp biểu thức nằm ở cuối chuỗi
4. [A-Z] -> khớp chữ hoa
5. [a-z] -> khớp chữ thường
6. [0-9] -> khớp số
7. [charlist] -> danh sách các ký tự

=> các biểu thức nằm trong cùng cặp ngoặc [] sẽ kết hợp theo hình thức HOẶC
ví dụ: [A-Za-z0-9@] -> chữ hoa hoặc chữ thường hoặc số hoặc ký tự @ 
=> ngoài cặp ngoặc sẽ là VÀ, theo thứ tự
ví dụ

Khớp độ dài: các biểu thức trong regex mặc định là 1 ký tự
- {min,max} -> độ dài từ min đến max
- {min,} -> độ dài >=min
- {value} -> độ dài cố định value

## các ký hiệu viết tắt liên quan đến độ dài

+ : {1,}
* : {0,}
? : {0,1}

## các ký hiệu viết tắt khác
\d : đại diện cho số
\D : không phải là số
\w : đại diện cho chữ hoa, chữ thường, số, gạch dưới
\W : ngược lại của \w
\s : khoảng trắng
\S : không phải khoảng trắng

lưu ý: khi gặp các ký hiệu của regex mà vẫn muốn kiểm tra -> thêm ký hiệu \ phía trước
ví dụ: . [ ] / +

## phủ định và hoặc

^ : phủ định
| : hoặc