//Doi tuong( Object): khai niem truu truong de mo ta 1 doi tuong cu the
// 1. Dac diem (Thuoc tinh)
// 2. Hanh dong (phuong thuc)
//Trong JS, hau het deu la doi tuong

// khoi tao object
var user= {
    name: "Viet Hoan",
    email: "hoanyttv@gmail.com",
    age: 20,
    getName: function(){
        console.log("Hello ae");
    }
    // key: value
}
//them key vao object
user.address= "Ha Noi";
user['location']= "Viet Nam";

//cap nhat gia tri cua key
user.name= "Thai Viet Hoan";

//Xoa 1 key
delete user.email;

// duyet qua tung phan tu (duyet key)
for ( var key in user){
    if(typeof user[key] === "function"){
        console.log(user[key]());
    }else{
        console.log(user[key]);
    }
}
// console.log(user);

var product = {
    name: "Laptop",
    price: 2000,
    infomation: {
      ssd: "512GB",
      ram: "8GB",
    },
  };
  // console.log(product.infomation.ssd);

var obj1= {
    name: "Hoang An",
    email: "hoangan@gmail.com"
}

var obj2= {
    age: 32,
    role: "teacher"
}

var obj3= {};

for (var key in obj1){
    obj3[key]=obj1[key];
}
for (var key in obj2){
    obj3[key]=obj2[key];
}

// console.log(obj3);

var user= {
    name: "Hoang An",
    email: "hoangan@gmail.com",
    age: 32,
}
//////////////////////////////////////////////////////////////////////////
//object.keys(): lay danh sach key trong object tra ve array
console.log(Object.keys(user));

//kiem tra 1 object co du lieu hay khong

var a= {};
if(Object.keys(a).length){
    console.log("Co du lieu");
}else{
    console.log("Khong co du lieu");
}
//////////////////////////////////////////////////////////////////////////
// object.value(): lay cac value trong object va luu vao 1 mang
// console.log(Object.values(user));
//////////////////////////////////////////////////////////////////////////
// Object.entries(): lay key va value cua object va tra ve mang 2 chieu
// console.log(Object.entries(user));
//////////////////////////////////////////////////////////////////////////
//Object.fromEntries(): chuyen mang 2 chieu thanh object

var arr= [
    ["name", "Hoan"],
    ["age", 20],
    ["address", "Thai Nguyen"]

]

// console.log(Object.fromEntries(arr));


// bai tap

var query= {
    category: 1,
    keyword: "Khoa hoc fullstack",
    status: false
}
var string= "";

arr= Object.entries(query);

arr.forEach(function(element){
    string = string + element.join('=') + "&";
})

string = string.replaceAll(' ', "+").slice(0, string.length-1)

console.log(string);

var queryString= Object.entries(query).map(function(item){
    return item.join('=')
}).join('&').replaceAll(' ', '+')

console.log(queryString);


var allowArr=["true", "false"];
var newQuery= Object.fromEntries(queryString.replaceAll('+', ' ').split('&').map(function(item){
    var itemArr= item.split('=');
    if(!isNaN(+itemArr[1])){
        itemArr[1]= +itemArr[1];
    }
    if(allowArr.includes(itemArr[1])){
        itemArr[1]= itemArr[1] === "true";
    }
    return itemArr;
}))


console.log(newQuery);


//////////////////////////////////////////////////////////////////////////
// Object.assign(target, source1, source2, ...): noi' object

var user= {
    name: "Hoang An",
    email: "hoanyttv@gmail.com"
}

var course= {
    courseName: "fullstackK9",
    coursePrice: 1000
}

// var newObj= Object.assign(user, course); cach nay user se thay doi (vi duoc them vao)
var newObj= Object.assign({}, user, course); // cach nay them 2 object vao object rong nen 2 object kia khong bi thay doi

console.log(user);
console.log(newObj);


//////////////////////////////////////////////////////////////////////////
// tu khoa this (context)

var user= {
    name: "Hoan",
    email: "hoanyttv@gmail.com",
    getName: function(){
        console.log(this);
        return this.name;
    },

    getInfo: function(){
        var _this= this;
        return {
            age: 32,
            getEmail: function(){
                console.log(_this.email);
            }
        }
    }
}


// user.getInfo().getEmail();
// console.log(user.getName());


///////////////////////////////////////////////////////////////////////
// bind(): thay doi context, dung this o object b nhung lai la object a
var a= {
    name: "Hoan",
    email: "hoanyttv@gmail.com"
}

var b= {
    course: "Fullstack",
    teacher: "Hoang An",
    getEmail: function(){
        console.log(this.email);
    }
}

// b.getEmail.bind(a)();

//////////////////////////////////////////////////////////////////////////
// call(): giong nhu ham bind, nhung ma cach goi ham nhin dep hon

var a= {
    name: "Hoan",
    email: "hoanyttv@gmail.com"
}
function something(a, b){
    console.log(this);
    console.log(a, b);
}

// something.call(a, 10, 20);

//////////////////////////////////////////////////////////////////////////
// apply(): giong call nhung ma nhan doi so la mot Array
// var args= [10, 20];
// something.apply(a, args);
Object.prototype.message= "Hello ae"
var user= {
    name: "Viet Hoan",
    email: "hoanyttv@gmail.com",

    combineValues: function(){
        //lay tat ca gia tri cua cac key khong phai ham va gan vao 1 mang
        Object.keys(this).forEach(function(key){
            if( typeof this[key] !== "function"){
                console.log(this[key]);
            }
            
        }, this)
    }
}


user.combineValues();

//////////////////////////////////////////////////////////////////////////
// trong JS, ham tao Object la to nhat (hay con goi la Object cụ tổ)
// console.dir(String.prototype);
// console.dir(Number.prototype);
// console.dir(Array.prototype);
// console.dir(Boolean.prototype);
// deu tao tu object

// ung dung: Object.prototype.     //them thuoc tinh vao Object prototype thi bien' thuoc kieu du lieu nao cung co the dung duoc
var string= "Hoan";
console.log(string.message);
console.log(user.message); // vi message duoc them vao Object prototype roi (line 225)


var fullname= "Thai Viet Hoan"
String.prototype.getFisrtName= function(){
    var result= this.split(' ').slice(-1).join();
    console.log(result);
}

fullname.getFisrtName();