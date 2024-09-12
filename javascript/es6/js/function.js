// Arrow function

// const getMessage = (msg) => {
//     console.log("Ok chưa?", msg);
// };

// getMessage("hello");

// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

// const getUser = () => ({
//     name: "Hoan",
//     email: "hoanyttv@gmail.com",
// });

// console.log(getUser());

// const users = [
//     {
//         id: 1,
//         name: "user 1",
//     },
//     {
//         id: 2,
//         name: "user 2",
//     },
// ];

// const getUser = (userId) => users.find(({ id }) => userId === id);

// console.log(getUser(2));

// setTimeout(() => {
//     console.log(`ok`);
// }, 2000);

// const user = {
//     name: "Hoan",
//     getName: function () {
//         return this.name;
//     },
// };

// console.log(user.getName());

/*
lưu ý khi sử dụng arrow function
- không binding được từ khoá this
- không binding được từ khoá arguments ( lấy tất cả giá trị tham số)
- không dùng làm function constructor( khởi tạo object) 
- không có thuộc tính prototype
- không nên sử dụng làm method của object
*/

// const doSomeThing = function () {
//     console.log(arguments);
// };

// doSomeThing(1, 2, 3);
// // không dùng được ảguments thì dùng rest parameter
// const doSomeThing1 = (...args) => {
//     console.log(args);
// };

// doSomeThing(1, 2, 3);

const user = {
    name: "Hoan",
    getInfo: function () {
        return {
            age: 32,
            getAge: function () {
                return this.age;
            },
            getName: () => this.name, //this ở arrow function sẽ đẩy lên this của cha nó, tức là this của getInfo, nên this.name sẽ lấy được name của function user
        };
    },
};
console.log(user.getInfo().getAge());
console.log(user.getInfo().getName());
