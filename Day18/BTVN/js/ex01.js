console.log(`Bai 1:`);

var a= 3, b= -7;
a= a + b;
b= a- b;
a= a- b;
console.log(`a= ${a}`);
console.log(`b= ${b}`);

//-----------------------------------------------------

console.log(`Bai 2:`);
var s= 10 + 20 + 5 ** 10 / 2;
console.log(`total= ${s}`);

//-----------------------------------------------------

console.log(`Bai 3:`);

var a= 3, b= 7, c= 5;

if(a> b && a> c){
    console.log(`So lon nhat la: ${a}`);
}else if(b> a && b> c){
    console.log(`So lon nhat la: ${b}`);
}else{
    console.log(`So lon nhat la: ${c}`);
}

//-----------------------------------------------------

console.log(`Bai 4:`);

var a= 3, b= 5;
if(a* b > 0){
    console.log(`${a} va ${b} cung dau`);
} else if(a* b < 0){
    console.log(`${a} va ${b} trai dau`);
}else{
    console.log(`chi so sanh 2 so khac 0`);
}

//-----------------------------------------------------

console.log(`Bai 5:`);

var a= 7, b= 9, c= 5, d;
if(a> b){
    d= a;
    a= b;
    b= d;
}
if(b> c){
    d= b;
    b= c;
    c= d;
}
if(a> b){
    d= a;
    a= b;
    b= d;
}
console.log(`sau khi sap xep: ${a}, ${b}, ${c}`);