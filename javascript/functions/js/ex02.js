// var display= function(callback, text){
//     console.log(`Dissplay`);
//     if(typeof callback=== "function"){
//         callback(text);
//     }
// }

// var showInfo= function (text){
//     console.log("show info", text);
// }

// display(showInfo, "f8")

// setTimeout ==> thực thi 1 hàm khác nhau sau 1 thời gian chỉ định

// setTimeout(function(a, b){
//     console.log("Học lập trình không khó", a, b);
// }, 2000, "F8", "F9")

//setInterval => thực thi lặp lại 1 hàm sau một khoảng thời gian
// count=0;
// var id= setInterval(function(){
//     console.log(`Hello ae F8`, ++count);
//     if(count === 5){
//         clearInterval(id);
//     }
// }, 1000)

// setTimeout(function(){
//     console.log(`heelo ae f8`);
// }, 0)
// console.log(`hoc lap trinh khong kho`);

var getA= function(callback){
    setTimeout(function(){
        console.log(`getA`);
        if(typeof callback == "function"){
            callback();
        }
    }, 1000)
}
var getB= function(callback){
    setTimeout(function(){
        console.log(`getB`);
        if(typeof callback == "function"){
            callback();
        }
    }, 500)
}
var getC= function(){
    setTimeout(function(){
        console.log(`getC`);
    }, 1500)
}

getA(function(){
    getB(function(){
        getC();
    });
})

// tìm hiểu trước 
// IIFE
// Hàm con
// closure
// thunk function
// đệ quy
