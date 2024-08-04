//vong lap mang
var users= ['user1', 'user2', 'user3', 'user4'];
// console.log(users);

//forEach(callback): duyet qua tung phan tu cua mang va tra ket qua vao callback
//callback co 2 tham so, value, index

// users.forEach(function(value, index){
//     console.log(value, index);
// })


//2. map(callback): duyet qua tung phan tu cua mang tra ve value, index o callback
// tra ve 1 mang moi co so luong phan tu bang mang ban dau
//gia tri cac phan tu cua mang moi la gia tri cua callback (callback return ve gia tri nao thi luu vao mang moi)

var newArr= users.map(function(value, index){
    // console.log(value, index);
    return `${index + 1}: ${value}`;
})

// console.log(newArr);

//3. filter(calllback): duyet qua tung phan tu cua mang ban dau
//tra ve 1 mang moi, gia tri phan tu cua mang moi se la cac phan tu cua mang ban dau neu callback tra ve truthy

var numbers= [1, 3, 4, 5, 7, 8];
// console.log(numbers);
var newArr= numbers.filter(function(value, index){
    return value % 2 !== 0
})

// console.log(newArr);

var fullname= 'Ta   Hoang  An  ';
var fullname= fullname.split(' ').filter(function(item){
    return item;
}).join(' ');
// console.log(fullname);


// bai tap: xoa khach hang co email la: customer2@gmail.com

var customers= [
    ['Customer 1', 'customer1@gmail.com', 32],
    ['Customer 2', 'customer2@gmail.com', 25],
    ['Customer 3', 'customer3@gmail.com', 27],
    ['Customer 4', 'customer4@gmail.com', 12]
]

var newCustomer= customers.filter(function(item){
    return !item.includes('customer2@gmail.com');
})
// console.log(newCustomer);


//tang tuoi cua customer: customer2@gmail.com them 2 tuoi
var newCustomer= customers.map(function(item){
    if(item.includes('customer2@gmail.com')){
        item[2]= item[2] + 2;
    }
    return item;
})

// console.log(newCustomer);

var users= ['user1', 'user2', 'user3', 'user4', 'user2'];
var newArr= [];

users.forEach(function(user, index){
    if(!newArr.includes(user)){
        newArr.push(user);
    }
})

// console.log(newArr);

// buoi sau:
// some(), every(), find(), findIndex(), findLast(), findLastIndex(), reduce()


// some(callback): 
//duyet qua tung phan tu cua mang ban dau
// tra ve boolean
// tra ve true neu co it nhat 1 lan trong callback return ve truthy
// dung khi tim thay dieu kien dung
var numbers= [1, 3, 2, 6, 9];
//kiem tra trong mang numbers co so chan hay khong?
var status= numbers.some(function(number){
    return number % 2=== 0;
})
// console.log(status);

//every(callback)
//duyet qua tung phan tu cua mang ban dau
// tra ve boolean
// tra ve true neu tat ca cac lan lap deu phai return ve truthy

var numbers= [1, 3, 5, 7, 9];
// kiem tra trong numbers xem tat ca co phai so le khong
//dung khi tim thay dieu kien sai
// console.log(numbers.every(function(number){
//     return number % 2 !== 0;
// }));

//find(callback)
//cach hoat dong giong filter
// khac filter : find tra ve phan tu mang dau tien tim duoc
var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result= numbers.find(function(number){
    return number > 2;
})
console.log(result); // tra ve 3, neu laf filter se tra ve het phan tu lon hon 2

//finLast(callback)
//cach hoat dong giong filter
// khac filter : find tra ve phan tu mang cuoi cung tim duoc

var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result= numbers.findLast(function(number){
    return number > 2;
})
console.log(result); // tra ve 9, neu laf filter se tra ve het phan tu lon hon 2

//findIndex(callback)
// cach hoat dong giong find
// khac: tra ve index dau tien tim duoc
var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result= numbers.findIndex(function(number){
    return number > 2;
})
console.log(result); //tra ve 2 (index cua so 3)

//findLastIndex(callback)
// cach hoat dong giong find
// khac: tra ve index cuoi cung tim duoc

var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result= numbers.findLastIndex(function(number){
    return number > 2;
})
console.log(result); //tra ve 8 (index cua so 9)

var arrA= [1, 4, 3, 2];
var arrB= [5, 2, 6, 7, 1];

//tim phan tu giao giua 2 mang
var newArr= [];
var newArr1= [];
var result= arrA.filter(function(element){
    return arrB.includes(element);
})

// console.log(result);

var data= [];
var addData= function(value, status){
    if(!data.includes(value)){
        if(status=== true){
            data.push(value);
        }
    }else{
        if(status=== false){
            // data.forEach(function(element, index){
            //     if(element === value){
            //         data.splice(index, 1);
            //     }
            // })
            data= data.filter(function(element){
                return element !== value;
            })
        }
    }
    
    
}

addData('An', true);
addData('An', true);
addData('Quan', true)
addData('Duc', true)
addData('Quan', false)
// console.log(data);


//reduce(callback, initialValue)
//Callback co 4 tham so ( chu yeu lam viec 3 tham so)
/*
prevValue
currentValue
index

initialValue: gia tri khoi tao

cach hoat dong:
1. khong co initialValue (khong co tham so thu 2):
- Vong lap reduce se chay tu phan tu thu 2 den het
- prevValue cua lan lap dau tien chinh la phan tu dau cua mang
---------------
- currentValue la gia tri cua tung phan tu mang khi lap
- prevValue cua lan lap sau se la return cua lan lap truoc
- gia tri cua ham reduce la return cuoi cung cua callback

2.co innitialValue:
- vong lap reduce se chay tu phan tu thu nhat
- prevValue cua lan lap dau tien chinh la innitialValue
--------------
- currentValue la gia tri cua tung phan tu mang khi lap
- prevValue cua lan lap sau se la return cua lan lap truoc
- gia tri cua ham reduce la return cuoi cung cua callback
*/

var numbers= [5, 10, 15, 20, 25, 30];
var result= numbers.reduce(function(prev, current, index){
    // console.log(`prev= ${prev}, current= ${current}, index= ${index}`);
    return current;
}, 55)

// console.log(result);

var numbers= [2, 9, 5, 1, -5];

var max= numbers.reduce(function(prev, number){
    if(prev < number){
        return number;
    }
    return prev;
})

// console.log(max);

var users= ['An', 'Tung', 'Dat', 'Quan', 'Tung', 'Nam'];
// var newArr= [];
var result= users.reduce(function(prev, user, index){
    if(!prev.includes(user)){
        prev.push(user);
        
    }
    return prev;
}, [])

// console.log(result);

var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];

var newArr= [];
function flatten(numbers){
    return numbers.reduce(function(prev, number){
        if(Array.isArray(number)){
            return prev.concat(flatten(number));
            
        }else{
            return prev.concat(number);
        }
    }, [])
    
}

// console.log(flatten(numbers));

//chunk array

var numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var size= 3;

var a= numbers.reduce(function(pre, number, index){
    if(pre[pre.length - 1].length < size){
        pre[pre.length - 1].push(number);
    }else{
        pre.push([number]);
    }
    return pre;
    
}, [[]])

console.log(a);


// Array.from() : ep kieu du llieu khac ve mang
var fullname= "Viet Hoan";
// console.log(Array.from(fullname));

var users= {
    0: 'user 1',
    1: 'user 2',
    2: 'user 3',
    length: 3
}
var users= Array.from(users)
// console.log(users);
// console.log(users);

function somthing(){
    Array.from(arguments).forEach(function(item){
        console.log(item);
    })
}

// somthing(5, 10, 15, 20, 25, 30)

//tao mang chua cac so tu 1-100
var rangeArr= Array.from(Array(100)).map(function(_, index){
    return index + 1;
});
// console.log(rangeArr);



// THAM CHIEU: chu y den dia chi

var a= ['Hoang An', 'hoanyttv@gmail.com'];
// var b= a;
//so chep mang
//1. shallow copy: dung cac phuong thuc trong mang cho phep tra ve mang moi
// var b= a.slice(0);
var b= Array.from(a);

// deep copy: De quy, JSON
// B1: chuyen array thanh json
// B2: chuyen json thanh array
// var json= JSON.stringify(a); // chuyen mang a thanh json
// b= JSON.parse(json) // chuyen json cua mang a thanh mang b
// b[0]= 'Dung';
// console.log(a);
// console.log(b);

var a= ["An"];
var b= ["An"];

// console.log(a === b);
// kieu du lieu tham chieu se khong so sanh duoc(a va b ben tren khac dia chi), chi so sanh duoc du lieu nguyen thuy voi nhau

var a= ["An"];
var b= Array.from(a);

// console.log(a === b);

var users= [
    ["User 1", "user1@gmail.com"],
    ["User 2", "user2@gmail.com"],
    ["User 3", "user3@gmail.com"]
]

var user= users.find(function(user){
    return user.includes("user2@gmail.com");
});
user.push("ahihi");
console.log(users);