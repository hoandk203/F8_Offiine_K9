const userEndpoint = "http://localhost:3000/users";
let users = [];
let currentUserId = "";

async function getUsers() {
    const response = await fetch(userEndpoint);
    const datas = await response.json();
    return datas;
}

async function main() {
    users = await getUsers();
    const listUl = document.querySelector(".container");
    let newElement = "";
    users.forEach(function (user) {
        newElement += `
            <li style="padding: 4px">
                ${user.name}
                <button type="button" onclick="handleUpdate('${user.id}')">Update</button>
                <button type="button" onclick="handleDelete('${user.id}')">Delete</button>
            </li>`;
    });
    listUl.innerHTML = `<div class="list"><ul>${newElement}</ul></div>`;
}

async function addUser(name) {
    //call api post user
    //method: POST
    //url: http://localhost:3000/users/id
    //payload | body: { "name": "inputValue" }
    //{"name": "inputValue"} is json string
    //khi mà mình tạo bất kì 1 thông tin gì mới thì không gửi id lên
    //id là backend tự tạo
    const body = JSON.stringify({
        name: name,
    });
    // call api
    const endpoint = currentUserId
        ? `${userEndpoint}/${currentUserId}`
        : userEndpoint;
    const method = currentUserId ? "PATCH" : "POST";
    const response = await fetch(endpoint, {
        method: `${method}`,
        body: body,
        headers: {
            "Content-Type": "application/json",
        },
    });
    document.querySelector(".input-add").value = "";
    currentUserId = "";
}

const handleClick = async (e) => {
    e.preventDefault();
    const inputValue = document.querySelector(".input-add").value;
    if (inputValue.trim()) {
        await addUser(inputValue);
    }
};

// Thêm event listener cho form
const formAdd = document.querySelector(".form-add");
formAdd.addEventListener("submit", handleClick);

// Thay đổi event listener cho nút Add
const btnAdd = document.querySelector(".btn-add");
btnAdd.addEventListener("click", handleClick);

const handleUpdate = async (id) => {
    const inputEl = document.querySelector(".input-add");
    const currentUser = users.find(function (user) {
        return user.id === id;
    });
    currentUserId = id;
    const currentUserName = currentUser.name;
    inputEl.value = currentUserName;
};

const handleDelete = async (id) => {
    const response = await fetch(`${userEndpoint}/${id}`, {
        method: "DELETE",
    });
};

main();
