// IIFE

// (function(title){
//     console.log(`hello ${title}`);
// })(`f8`);

/////////////////////////////////////////////////////////////////

//hàm con
// kế thừa được biến toàn cục, biến cục bộ của hàm cha, tham số của hàm cha
var b= 20;
function display(c){
    var a= 10;
    function showInfo(){
        console.log(`Hoang An F8`);
        console.log(a);
        console.log(b);
        console.log(c);
    }

    showInfo();
}

// display("f8");

// hàm showInfo được gọi là hàm Closure
// closure là hàm có khả năng truy cập tới các biến của phạm vi chứa nó
// chỉ gọi hàm trong phạm vi mà nó được khai báo ( ví dụ hàm con khai báo trong hàm cha thì chỉ gọi nó trong hàm cha thôi)


function something(){
    console.log('something');
}

// window.something();

//window là một object lớn nhất trong js (chạy trên trình duyệt), dùng để tạo ra mọi thứ trong js

var sum= function(a){
    return function(b){
        return a+ b;
    }
}

var adder= sum(10);
var result= adder(10);

// console.log(result);

// giải thuật đệ quy
// kỹ thuật gọi lại chính hàm đang định nghĩa để thực thi các bài toán lặp đi lặp lại
// trong lập trình web thường được sử dụng để giải quyết các bài toán đa cấp: menu đa cấp, chuyên mục đa cấp...
// lưu ý: khi gọi lại hàm, để ý điều kiện để chương trình dừng lại

/*
ưu điểm: dễ, nhàn cho lập trình viên
nhược điểm: chạy chậm
*/

function showNumber(number){
    console.log(number);
    if(number > 1){
        showNumber(number-1);
    }
}

// showNumber(10);

function getTotal(n){
    if(n > 1){
        return n + getTotal(n-1);
    }
    return 1;
}

var result= getTotal(10);
// console.log(result);


function fibo(n){
    if(n===1 || n===2){
        return 1;
    };
    return fibo(n-1) + fibo(n-2);
};

function showFibo(number, count=1){
    console.log(fibo(count));
    if(count < number){
        showFibo(number, count + 1);
    }
}

showFibo(10);