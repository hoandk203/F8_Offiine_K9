console.log(Array.prototype);

var users=['user1', 'user2', 'user3', 'user4', 'user2'];
console.log(users);

//chaining: object.method1().method2().method3()

//at(index): lay phan tu dua vao index
console.log(users.at(0))

//concat(arr1, arr2, ...): noi cac array thanh 1 array
// console.log(users.concat([1, 2, 3], [4, 5, 6], ['A', 'B', 'C']));
console.log(users.concat('user5')); // dung de them 1 phan tu vao mang

//fill(value): cap nhat cac phan tu thanh 1 gia tri
//tra ve ham moi' da duoc thay doi, nhung cung thay doi luon mang ban dau
// users.fill('0');
// console.log(users);

//includes(value): kiem tra phan tu co trong mang khong (tra ve true, false)
console.log(users.includes['user1']);

//indexOf(value): kiem tra phan tu co trong mang khong, tra ve index dau tien tim duoc
console.log(users.indexOf('user1'));

//lastIndexOf(value): kiem tra phan tu co trong mang khong, tra ve index cuoi cung tim duoc
console.log(users.lastIndexOf('user2'));

//slice(start, end): cat mang tu start den end-1
console.log(users.slice(0, 2));
console.log(users.slice(1));
console.log(users.slice(-2));


//join(): noi cac phan tu trong mang thanh chuoi
console.log(users.join('- '));
var fullname= 'Ta Hoang An';
var firstname= fullname.split(' ').slice(-1).join();

console.log(firstname);

//reverse(): dao nguoc mang
//thay doi ca mang ban dau
console.log(users.reverse());

//sort(): sap xep mang theo thu tu tang dan (kiem tra theo ky tu)
// var users= ['Dung', 'An', 'Tam', 'Van'];
// users.sort();
// console.log(users);

var numbers= [2, 100, 1, 8];
numbers.sort(function(a, b){
    /*  a la phan tu sau, 
        b la phan tu truoc 
        neu ham nay return ve gia tri am => tu dong doi cho a va b
    */
    console.log(`a= ${a}, b= ${b}`);
    if(b> a){
        return -1;
    }
});

console.log(numbers);

var customer= [
    'Ta Hoang An',
    'Phan Van Hieu',
    'Nguyen Tuan Anh',
    'Nguyen van Tung'
];

//sap xep mang theo thu tu tang dan theo ten

function getFirstName(fullname){
    return fullname.split(' ').slice(-1).join();
}

customer.sort(function(a, b){
    if(getFirstName(a) < getFirstName(b)){
        return -1;
    }
})

console.log(customer);


//them 1 khach hang vao giua mang customer sau khi da sap xep o bai tren
// var newCustomer= 'Le Duc Nam';
// var index= (customer.length - (customer.length % 2)) / 2;
// function insertCustomer(newCustomer, index){
//     var newCustomer1= customer.slice(0, index)
//     var newCustomer2= customer.slice(index)

//     return newCustomer1.concat(newCustomer,newCustomer2)
// }

// console.log(insertCustomer(newCustomer, index));

// var fullname= 'Ta    Hoang   An';
// console.log(fullname.split(' '));
// var splitArray= fullname.split(' ');
// var newArray= [];
// for(var i=0; i<splitArray.length; i++){
    
//     if(splitArray[i] !== ''){
//         newArray[newArray.length]= splitArray[i];
//     }
    
// }

// console.log(newArray.join(' '));

//11. push(): them phan tu vao cuoi mang, tra ve so luong phan tu sau khi them
users.push('a', 'b', 'c');

console.log(users);
console.log(count);

//12. unshift(): them pham tu vao dau mang, tra ve so luong phan tu sau khi them

var count= users.unshift('a', 'b', 'c');
console.log(users);
console.log(count);

//13. pop(): xoa phan tu cuoi mang
var value= users.pop();
console.log(users);
console.log(value);

//14. shift(): Xoa phan tu dau mang
var value= users.shift();
console.log(users);
console.log(value);

//15. splice(index, count): xoa count phan tu, tu vi tri index
var result= users.splice(1, 2, 'item7', 'item10')       //co the dung de chen` phan tu vao vi tri index
console.log(users);
console.log(result);

//16.length: lay do dai
var arr=['item1', 'item2', 'item3', 'item4'];
arr.length= 2;
console.log(arr);