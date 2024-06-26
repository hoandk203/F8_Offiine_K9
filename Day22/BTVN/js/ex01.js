console.log(`Bai 1:`);

function fibo(n){
    if(n===1 || n===2){
        return 1;
    };
    return fibo(n-1) + fibo(n-2);
};

function showFibo(number){
    result= '';
    for(var i= 1; i<= number; i++){
        result= result + fibo(i) + ' ';
    }
    return result;
}

console.log(showFibo(11));;

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

console.log(reverseNumber(67429));;

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