var kwh= 67;
var total=0;

if(kwh <0){
    console.log(`So dien khong duoc am`);
}else{
    if(kwh <= 50){
        total= kwh * 1678;
    }else if(kwh <= 100){
        total= (50*1678) + (kwh-50) * 1734;
    }else if(kwh <= 200){
        total = (50*1678) + (50 * 1734) + (kwh-100)* 2014;
    }else if(kwh <= 300){
        total = (50*1678) + (50 * 1734) + (100* 2014) + (kwh-200)*2536;
    }else if(kwh <= 400){
        total = (50*1678) + (50 * 1734) + (100* 2014) + (100*2536) + (kwh-300)*2834;
    }else{
        total = (50*1678) + (50 * 1734) + (100* 2014) + (100*2536) + (100*2834) + (kwh-400)*2927;
    }
}

console.log(`Tong so tien dien: ${total}`);