// Câu lệnh rẽ nhánh
//1. if else
/*
1.1 Câu lệnh if thiếu
if(condition){
    code
}

1.2 Câu lệnh if đủ
if(condition){
    code
}

1.3 Câu lệnh if nhiều nhánh
if(conditon){
    code
}else if(condition2){
    code
}else if(conditon3){
    code
}else{
    code
}
1.4 if lồng nhau
if(condition){
    if(condition2){
        code
    }else{
        code
    }
}else{
    code
}
*/

var salary= 20000000;
var income;
if(salary > 0){
    if(salary <= 5000000){
        income= salary;
    }else if((salary > 5000000) && (salary < 15000000)){
        income= salary - (salary * 3 / 100);
    }else{
        income= salary - (salary * 5 / 100);
    }
    console.log(income);
}else{
    console.log(`salary > 0`);
}



//2. switch case