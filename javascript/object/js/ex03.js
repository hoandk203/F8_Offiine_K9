// function User(){
//     this.name= "Viet Hoan";
//     this.email= "hoanyttv@gmail.com";
//     this.first= function(){
//         return {
//             name: this.name,
//             email: this.email
//         }
//     }
// }

// function Authentication(){
//     this.getProfile= function(){
//         //lam sao de truy cap vao method first cua User
//         User.call(this)
//         return this.first();
//     }
// }

// var user= new Authentication();
// console.log(user.getProfile());

/////////////////////////////////////////////////////////////////////////////
//setter: cập nhật giá trị thuộc tính thông qua 1 hàm
//getter: lấy giá trị thuộc tính thông qua 1 hàm
// => cách gọi thuộc tính
//ví dụ: user.length

// function Person(){
//     this.data= ["item1", "item2", "item3"];
//     this.getLatest= function(){
//         return this.data[this.data.length -1];
//     }
// }

// Person.prototype= {
//     get latest(){
//         return this.data[this.data.length -1];
//     },
//     set latest(value){
//         this.data.push(value);
//     }
// }

// var person= new Person ();
// person.latest= "item4";
// console.log(person.latest);

///////////////////////////////////////////////////////////////////////////////
// có thể sử dụng constructor như một function bình thường
// function Person() {
//     this.name="Hoang An";
//     this.email = "hoangan.web@gmail.com";
//     return "F8" ;
// }
// var person = new Person();
// console.log(person);
// console.log(Person());

// var age= new Number(10);
// console.log(age);
// console.log(Number(10));

// var string = new String("hello ae F8")
// console.log(string);
// console.log(String(10));

///////////////////////////////////////////////////////////////////////////////
// sử dụng từ khóa new mà trả về luôn dữ liệu

// function Transformer(){}

// function UserTransformer(instance){
//     this.config= function(){
//         return {
//             UID: instance.id,
//             fullname: instance.name,
//             emailAddress: instance.email,
//             status: instance.status
//         }
//     }
//     return this.config()
// }

// var user= {
//     id: 1,
//     name: "Hoang An",
//     email: "hoanyttv@gmail.com",
//     status: true
// }

// var newUser= new UserTransformer(user);
// console.log(newUser);

// nếu trong constructor return về object => khi khởi tạo instance từ constructor => instance chứa dữ liệu return luôn

var users= [
    {
        id: 1,
        name: "user 1",
        email: "user1@gmail.com"
    },
    {
        id: 2,
        name: "user 2",
        email: "user2@gmail.com"
    },
    {
        id: 3,
        name: "user 3",
        email: "user3@gmail.com"
    }
]

users= users.filter(function(user){
    return user.email !== "user2@gmail.com";
})

document.write(users.map(function(user){
    // if(user.email !== "user2@gmail.com"){
        return `<div>
        <h2>ID: ${user.id}</h2>
        <h2>Name: ${user.name}</h2>
        <h2>Email: ${user.email}</h2>
        </div>`
    // }
        
}).join(""));