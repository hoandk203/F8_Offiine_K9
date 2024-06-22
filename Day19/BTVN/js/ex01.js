var total=0;
var km= 7;

if(km> 0 && km < 1000){
    if(km <= 1){
        total= km * 15000;
    }else if(km <= 5){
        total= 15000 + ((km-1) * 13500);
    }else{
        total= 15000 + (13500*4) + ((km-5) * 11000);
    }
    
    if(km > 120){
        total= total - (total * 0.1);
    }
}else{
    console.log(`So km khong hop le(0-1000)`);
}

console.log(`Tong so tien taxi: ${total}`);