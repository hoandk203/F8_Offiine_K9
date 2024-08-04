// Bieu thuc = toan hang + toan tu
// VD: s= a + b + c

// 1. toan tu so hoc: +, -, *, /, %, **( luy thua)
// luu y voi phep + -> chu y kieu du lieu va thuc hien ep kieu

// var a="10", b=20;
// var c= +a + +b;
// console.log(c);

// 2. toan tu: ++, --
/*
phan biet count++ va ++count
- giong nhau: deu tang 1 don vi
- khac nhau:
count++: tra ve gia tri truoc khi tang
++count: tra ve gia tri sau khi tang
*/

// var count= 1, total= count++;
// console.log(`count= ${count}, total= ${total}`);

// toan tu so sanh: luon tra ve kieu du lieu boolean (true,false)
// >, <, >=, <=, ==, ===, !=, !==

// var a=10;
// var b= "10";
// var c= a===b;
// console.log(c);

// 3. toan tu gan: "="

// var a= 10;
// a= a+ 10;
// a+= 10; 
//viet kieu nay ap dung het cho cac toan tu khac -, *, /, %, **
// console.log(a);

// 4. toan tu logic: &&, ||, !
// &&: ket hop cac bieu thuc con, neu tat ca deu dung thi moi tra ve true
// ||: ket hop cac bieu thuc con, neu chi can 1 bieu thuc dung thi se tra ve true, tat ca deu sai thi moi false
// !: nguoc lai (phu dinh)
// trong tinh huong can ket hop ma muon uu tien thi dung ()
// do uu tien: not -> and -> or
// var a= 10;
// var b= a>= 5 && a<= 15;
// console.log(b);

// 5. toan tu 3 ngoi (dieukien ? gia tri dung : giatrisai)
// var a= 10;
// var b= a === 10 ? 20 :5;
// console.log(b);
// var total= 1+ 2+ 3+ a >= 10 ? 20 : 5+ 4+ 3;
// console.log(total);

// 6. toan tu nullish (??)
// kiem tra null hoac undefined
// var a= 10;
// var b= a ?? "f8";
// var b= a=== undefined || a=== null ? "f8" : a;
// console.log(b);


// 7. truthy va falsy
// - trong dieu kien can phai su dung kieu du lieu logic (boolean) maf cac gia tri tu dong chuyen ve true -> truthy, nguoc lai goi la falsy
// falsy: 0, "", null, undefined, NaN, false
// truthy: cac truong hop con lai
// var a= 10;
// var b= a ? "Dung" : "Sai";
// console.log(b);

// 8. && (ap dung cho viec gan' vao bieu thuc)
// tìm giá trị của biểu thức sai, && đến chạy đến bao giờ gặp giá trị falsy thì dừng trả về kết quả biểu thức đấy, hết biểu thức thì trả về kết quả của biểu thức cuối (kể cả biểu thức cuối có là falsy)
// var a= 10;
// var b= 0;
// var c= -5;
// var result= a && b && c;
// console.log(result);

// 9. || tìm giá trị của biểu thức đúng
// nguoc lai voi &&
// var a= 0;
// var b= null;
// var c= "f8";
// var result= a|| b|| c|| "Hoc JS";
// console.log(result);


/*
Các kiểu dữ liệu trong js
.1. kiểu dữ liệu nguyên thủy
- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol
2. kiểu dữ liệu tham chiếu
- Object
    + Array
    + Function
    + Literal Object
*/