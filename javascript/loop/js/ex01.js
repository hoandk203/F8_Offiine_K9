// Cú pháp trong lập trình cho phép đoạn chương trình lặp đi lặp lại theo số lần nhất định
// 2 loại:
// 1. lặp với số lần lặp xác định trước: for
// 2. lặp số lần không xác định trước: while, do while

// Cú pháp for
/**
for (giatrikhoitao; dieukiendung; buocnhay){
    code
}
 */

// for(var i = 0; i <= 10; i++){
//     console.log(`Lặp lần ${i}`);
// }

// for(var i = 0; i <= 5; i++){
//     for(var j = 0; j<= 5; j++){
//         console.log(`Lặp lần j= ${j}`);
//     }
// }

// var n= 10, s=0;
// for(var i= 1; i<=n; i++){
//     s= s + i;
// }

// console.log(s);

// var n= 5;
// var total=1;
// for(var i = 1; i<=5; i++){
//     total *= i;
// }

// console.log(`total= ${total}`);

// var n= 5;
// var result= 0;
// var gt=1;
// for(var i= 1; i <= n; i++){
//     gt *=i;
//     result = result + gt;
    
// }

// console.log(result);

// var n= 53;
// var a=1;
// if(n%1!==0 || n< 1){
//     a= 0;
// }else{
//     for(var i =2; i< n; i++){
//         console.log(`i= ${i}`);
//         if(n%i===0){
//             a=0;
//             break;
//         }
//     }
// }

// if(a === 1){
//     console.log(`n la so nguyen to`);
// }else{
//     console.log(`n khong phai so nguyen to`);
// }

//while
/*
// while (condition){
    {code}
}
*/

// var i= 1;
// while(i<= 10){
//     console.log(i);
//     i++;
// }

// var n= 500;
// var count=0;
// while(n %2=== 0){
//     n= n/2;
//     count++;
// }

// console.log(count);
// console.log(n);

// do while
// var i= 15;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10);

//break: thoat vong lap
//continue: bo qua lan lap de chay lan lap tiep theo

for(i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}