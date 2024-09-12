// Object, Array
//Destructuring
//cú pháp của ES6 cho phép phá vỡ cấu trúc của array, object để truy cập vào các phần tử và lưu thành các biến riêng biệt

// const user = {
//     fullname: `Viet Hoan`,
//     email: `hoanyttv@gmail.com`,
//     age: 32,
//     "status-text": `success`,
//     address: `Ha Noi`,
//     gender: `Nam`,
//     position: `Hoc vien`,
// };

// const fullname = user.fullname;
// const email = user.email;
// const { fullname: username, email, age = 30, "status-text": statusText } = user; //destructuring
// console.log(username, email, age, statusText); // email để nguyên thì biến tên là email, fullname muốn biến tên khác thì :username

// const { fullname, email, ...data } = user; //khai báo biến data là object chứa tất cả key:value của user trừ fullname, email
// console.log(data);

// const profile = {
//     displayName: "Hoang An",
//     emails: {
//         id: 1,
//         email: "hoanyttv@gmail.com",
//     },
// };

// const {
//     displayName,
//     emails: { email },
// } = profile;

// console.log(displayName, email);

// var key = `fullname`;
// const { [key]: a } = user;
// console.log(a);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const users = [
//     "Viet Hoan",
//     "hoanyttv@gmail.com",
//     32,
//     "Ha Noi",
//     "Hoc Vien",
//     "Nam",
// ];

// console.log(users);

// const [fullname, email, , address, ...data] = users;
// console.log(fullname, email, address);
// console.log(data);

// const doSomething = function ({ fullname, email }) {
//     console.log(fullname, email);
// };

// doSomething({
//     fullname: "Hoang An",
//     email: "hoanyttv@gmail.com",
//     password: "12345",
// });

///////////////////////////////////////////////////////////////
//Named Arguments
// const doSomething = function ({
//     name,
//     email = "admin@gmail.com",
//     status = true,
//     isShow = false,
// }) {
//     console.log(name, email, status, isShow);
// };

// doSomething("user1", "user1@gmail.com");
// doSomething("user1", "admin@gmail.com", false);
// doSomething({ name: "user1", status: false });

////////////////////////////////////////////////////////////////
//spread operator
// const oldObj = {
//     name: "Viet Hoan",
//     email: "hoanyttv@gmail.com",
// };

// const newObj = {
//     teacher: "Hoang An F8",
//     price: 120,
//     ...oldObj,
// };

// console.log(newObj);

// const data = {
//     msg: "Hoc JS khong kho",
//     products: ["Product 1", "Product 2"],
// };

// sao cheps obj data va luu vao bien newData, sau do thuc hien them product 3 vao key product
// const newData = { ...data, products: [...data.products, "Product 3"] };
// console.log(newData);
// console.log(data);

/////////////////////////////////////////////////////////
//object literal enhanced

const name = "Hoan";
const email = "hoanyttv@gmail.com";
const age = 32;

const user = {
    name,
    email,
    age,
    getName() {
        return this.name;
    },
};
console.log(user.getName());
