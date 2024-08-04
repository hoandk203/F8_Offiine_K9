// kiểu dữ liệu nguyên thủy, dùng để xử lý số
// hàm tạo của number là Number

// console.dir(Number)

// var a= 1000 ** 1000;
// var b= 2000 ** 2000;
// console.log(a);
// console.log(b);
// console.log(a === b);

var a= 10;
// console.log(typeof a);
// console.log(a.constructor.name === "Number");

///////////////////////////////////////////////////////////////////////

// ép kiểu

// var a= "10.5";
// a= +a;
// a= Number(a)
// a= parseInt(a)
// a= parseFloat(a)
// console.log(a, typeof a);

// Trong biểu thức có các toán tử số học => JS tự động ép kiểu về kiểu số (trừ toán tử +)
// var a= "10";
// var b= 20;
// console.log(a*b);

// số NaN => ép kiểu thất bại
// var a= "10a"
// a= +a;
// console.log(a);

// var a= "10a" * 2;
// if(Number.isNaN(a)){
//     console.log(`La so NaN`);
// }else{
//     console.log(`khong phai NaN`);
// }

// Số infinity
// var a= -(1000 ** 1000);
// if(a !== Infinity && a !== -Infinity){
//     console.log(a);
// }else{
//     console.log(`vuot qua gioi han`);
// }

//kiểm tra số nguyên
// var a= 10;
// if(Number.isInteger(a)){
//     console.log("La so nguyen");
// }

// kiểm tra số thực
// var a = 10.5;
// if(a === parseFloat(a)){
//     console.log(`so thực`);
// }

var a= 12345.678;

// a= a.toFixed(2);  //lấy 2 chữ số phần thập phân và làm tròn (theo toán học)
// a= a.toPrecision(6); // lấy 6 chữ số từ đầu
// console.log(a);

//toFixed, toPrecision => trả về chuỗi


// var price= 12000000000;
// price= price.toLocaleString();
// console.log(price);

var numbers = [
    5,
    "10",
    null,
    2,
    undefined,
    [],
    NaN,
    Infinity,
    8,
    -Infinity,
    {},
    [1],
    7,
    true,
    12,
    false,
  ];

var result = numbers.reduce(function(prev,current){
    var numberCast= parseFloat(current);
    if(!isNaN(numberCast) && !Array.isArray(current) && Math.abs(numberCast) !== Infinity && numberCast % 2 !== 0){
        prev += numberCast;
    }
    return prev;
}, 0)

console.log(result);