const getUser = (userId) => {
    return new Promise((resolve) => {
        setTimeout(function () {
            const users = [
                {
                    id: 1,
                    name: "user 1",
                    salary: 1000,
                    email: `hoan@gmail.com`,
                },
                {
                    id: 2,
                    name: "user 2",
                    salary: 7000,
                    email: `hoan1@gmail.com`,
                },
                {
                    id: 3,
                    name: "user 3",
                    salary: 5000,
                    email: `hoan2@gmail.com`,
                },
            ];
            const user = users.find(({ id }) => id === userId);
            resolve(user);
        });
    }, Math.random() * 2000);
};

const ids = [1, 2, 3];
// tính tổng thu nhập của tất cả ủe tồn tại trong mảng ids
let total = 0;
const promises = ids.map(function (id) {
    return getUser(id);
});
console.log(promises);
let higherSalary = 0;
Promise.all(promises).then(function (datas) {
    datas.forEach(function (data) {
        if (higherSalary < data.salary) {
            higherSalary = data.salary;
        }
    });

    const emailUser = datas.find(function (data) {
        return higherSalary === data.salary;
    });
    console.log(emailUser.email);
});

let count = 0;

// function promise() {
//     let total = 0;
//     return new Promise((resolve) => {
//         ids.forEach((id) => {
//             getUser(id).then((user) => {
//                 total += user.salary;
//                 if (count === ids.length - 1) {
//                     resolve(total);
//                 }
//                 count++;
//             });
//         });
//     });
// }
// promise().then((data1) => {
//     console.log(data1);
// });
