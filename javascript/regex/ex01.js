// regular expression : bieu thuc chinh quy
// Bieu thuc de xu ly chuoi nang cao
// Xuat hien o hay hat cac ngon ngu lap trinh

/*
3 tác dụng chính
- So khớp
- Cắt chuỗi
- Thay thế

Cấu trúc:
const pattern= /regex/modifier

*/

const pattern= /hoangan/g

console.log(pattern);

const str= "hoanganit19"

const check= pattern.test(str)

console.log(check);
