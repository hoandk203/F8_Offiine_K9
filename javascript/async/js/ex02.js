// xu ly ngoai le
//exception

const getUser = (userId) => {
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
    // if (userId > 3) {
    //     throw new Error("user not found");
    // }
    const user = users.find(({ id }) => id === userId);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
            reject("not found");
        }, 1000);
    });
};

const getAdminUser = async (id) => {
    return getUser(id);
};

const main = async function () {
    try {
        const user = await getAdminUser(2);
        const user2 = await getAdminUser(4);
        const user3 = await getAdminUser(2);
        console.log(user, user2, user3);
    } catch (error) {
        console.log("error: " + error);
    }
};

main();

const main2 = function () {
    const user = getAdminUser(2);
    const user2 = getAdminUser(4);
    const user3 = getAdminUser(2);
    Promise.all([user, user2, user3])
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("error: " + error);
        });
};

main2();
