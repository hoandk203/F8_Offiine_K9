// Array la cau truc du lieu co nhieu phan tu (gia tri)

//Khai bao
var users= [
    'An',
    'Tam',
    'Dat',
    'Tung'
];

console.log(users);

//Kiem tra 1 bien co phai mang hay khong
console.log(Array.isArray(users));

//Lay so luong phan tu
console.log(users.length);

//Truy cap vao 1 phan tu trong mang
console.log(users[1]);

//Cap nhat gia tri 1 phan tu
users[1]= 'Quan';
console.log(users);

//Them phan tu moi vao mang
users[users.length]= 'Son'
console.log(users);

//Duyet qua tung gia tri
for(var i= 0; i< users.length; i++){
    console.log(users[i]);
}

for(var index in users){
    console.log(users[index]);
}

for(var value of users){
    console.log(value);
}

// var indexDel= 2;
// var newUsers= [];
// for (var index in users){
//     if(+index === indexDel){
//         continue;
//     }
//     newUsers[newUsers.length]= users[index];
// }
// console.log(newUsers);

// var value= 'Son';
// newUsers= [];
// newUsers[0]= value;
// for(i= 1; i< users.length; i++){
//     newUsers[i]= users[i-1];
// }

// console.log(newUsers);

// var users=[
//     "Ta Hoang An",
//     "Nguyen Văn Dung",
//     "Nguyen Tuan Anh",
//     "Pham Văn Hieu",
// ];
// var keyword= "an";
// var newUsers= [];
// for (var i=0; i< users.length; i++){
//     if(users[i].includes(keyword)){
//         continue;
//     }
//     newUsers[newUsers.length]= users[i];
// }

// console.log(newUsers);

var numbers= [5, 2, 1, 9, 6];
var max= 0;
var maxIndex=0;
for (var i=0; i< numbers.length; i++){
    if(numbers[i] > numbers[i+1]){
        max= numbers[i];
        maxIndex= i;
    }
}

numbers[maxIndex]= numbers[0];
numbers[0]= max;
console.log(numbers);