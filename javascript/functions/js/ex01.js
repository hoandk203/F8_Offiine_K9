//kỹ thuật tách các đoạn chương trình con thành Hàm
/*
biến để lưu trữ dữ liệu
Hàm lưu trữ đoạn chương trình (tên thể hiện dưới dạng hành động, động từ)

cú pháp:
1. dinh nghia ham
function tenHam(){
    noi dung ham
}

function tenHam(thamSo1, thamSo2,...){
    noi dung ham
}

2. goi ham
tenHam()
tenHam(doiSo1, doiSo2,...)

*/

// function getTotal(a, b){
//     var total= a+ b;
//     console.log(total);
// }

// getTotal(10, 20);

// function showMessage(msg, type= `success`){
//     console.log(msg);
//     console.log(type);
// }

// showMessage(`hoc lap trinh`, `type value`);

// Ham co gia tri tra ve (return function)
// Ham khong co gia tri tra ve (void function)
// luu y khi da goi tu khoa return, ham se bi thoat (cac doan chuong trinh phia duoi return se khong duoc thuc thi)

function getTotal(a, b){
    var total= a+ b;
    // console.log(total);
    return total;
    console.log(`hello`);
}

// console.log(getTotal(10, 20));

function division(a, b) {
    if(b === 0){
        return 0;
    }
    return a/ b;
}

// console.log(division(10, 0));

function isPrime(n, isShow= false){
    var a= true;
    if(isShow=== false){
        if(n <= 1){
            return false;
        }
        for(var i=2; i<= n/2; i++){
            if(n% i== 0){
                return false;
            }
        }
        return true;
    }else{
        if(n <= 1){
            a= false;
        }
        for(var i=2; i<= n/2; i++){
            if(n% i== 0){
                a= false;
            }
        }
        if(a){
            console.log(`so nguyen to`);
        }else{
            console.log(`khong phai so nguyen to`);
        }
        
    }
}

//biến toàn cục, biến cục bộ
var data= `hoc js khong kho`; //bien toan cuc
function getMessage(){
    return data;
}

function setMessage(value){
    data= value;
}

// setMessage(`JS`);
// console.log(getMessage());

// Hàm ẩn danh (anonymous function)
// - không có tên
// - muốn chạy được phải gán bằng biến hoặc gọi trong hàm khác thông qua tham số
// var something= function(){
//     console.log(`xin chao ae F8`);
// }
// đây gọi là expression function
// something();

// var something= function(){
//     console.log(`xin chao ae`);
// }

// if(typeof something === "function"){
    // console.log(`something la function`);
//     something();
// }

// arguments keyword

// var getMax= function(){
//     console.log(arguments);
// }

// getMax(1, 2, 3, 4, 5, 10);

//rest parameters (cac tham so con lai)
 var getMax= function(a, b, ...args){
    console.log(a, b);
    console.log(args);
 }
//  getMax(1, 2, 3, 4, 5, 6, 7);


console.log(`Bai 1:`);

function fibo(n){
    if(n===1 || n===2){
        return 1;
    };
    return fibo(n-1) + fibo(n-2);
};

function showFibo(number){
    for(var i= 1; i<= number; i++){
        console.log(fibo(i));
    }
}

// showFibo(10);

/*----------------------------------------------------------------------------- */
/*----------------------------------------------------------------------------- */

console.log(`Bai 2:`);

function reverseNumber(n){
    var result= 0;
    for(var i= n; i!== 0;i= (i/10)|0){
        result= result* 10 + i% 10;
    }
    return result;
}

// console.log(reverseNumber(456));;

/*----------------------------------------------------------------------------- */
/*----------------------------------------------------------------------------- */
/*em dùng hàm reverseNumber bài trên để đảo lại số rồi đếm từ cuối để thêm vào chuỗi*/

console.log(`Bai 3:`);

function readNumber(n){
    var result= '';
    for(var i= reverseNumber(n); i!== 0;i= (i/10)|0){
        temp= i% 10;
        switch (temp) {
            case 0:
                if(i >= 100){
                    result= result + 'không trăm '
                }else if(i>= 10){
                    result= result + 'linh '
                }else{
                    result= result + 'không '
                }
                break;
            case 1:
                if(i >= 1000){
                    result= result + 'một ngàn '
                }else if(i >= 100){
                    result= result + 'một trăm '
                }else{
                    result= result + 'mốt '
                }
                break;
            case 2:
                if(i >= 1000){
                    result= result + 'hai ngàn '
                }else if(i >= 100){
                    result= result + 'hai trăm '
                }else{
                    result= result + 'hai '
                }
                break;
            case 3:
                if(i >= 1000){
                    result= result + 'ba ngàn '
                }else if(i >= 100){
                    result= result + 'ba trăm '
                }else{
                    result= result + 'ba '
                }
                break;
            case 4:
                if(i >= 1000){
                    result= result + 'bốn ngàn '
                }else if(i >= 100){
                    result= result + 'bốn trăm '
                }else{
                    result= result + 'bốn '
                }
                break;
            case 5:
                if(i >= 1000){
                    result= result + 'năm ngàn '
                }else if(i >= 100){
                    result= result + 'năm trăm '
                }else{
                    result= result + 'năm '
                }
                break;
            case 6:
                if(i >= 1000){
                    result= result + 'sáu ngàn '
                }else if(i >= 100){
                    result= result + 'sáu trăm '
                }else{
                    result= result + 'sáu '
                }
                break;
            case 7:
                if(i >= 1000){
                    result= result + 'bảy ngàn '
                }else if(i >= 100){
                    result= result + 'bảy trăm '
                }else{
                    result= result + 'bảy '
                }
                break;
            case 8:
                if(i >= 1000){
                    result= result + 'tám ngàn '
                }else if(i >= 100){
                    result= result + 'tám trăm '
                }else{
                    result= result + 'tám '
                }
                break;
            case 9:
                if(i >= 1000){
                    result= result + 'chín ngàn '
                }else if(i >= 100){
                    result= result + 'chín trăm '
                }else{
                    result= result + 'chín '
                }
                break;
            default:
                break;
        }
    }
    return result;
}

function convertToWord(n){
    if(n >=0 && n<= 9999){
        return readNumber(n);
    }
    return `Chuyen so tu 0-9999`;
}

console.log(convertToWord(6471));
