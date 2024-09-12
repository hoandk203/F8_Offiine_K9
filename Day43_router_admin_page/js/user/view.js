async function renderUser() {
    const users = await getUsers();

    let elementUsers = [];
    users.forEach((user) => {
        elementUsers += `
        <div class="item">
            <div class="item-info">
                <span class="item-id">${user.id}</span>
                <span class="item-name">${user.name}</span>
                <span class="item-email">${user.email}</span>
                <span class="item-age">${user.age}</span>
            </div>
            <div class="item-action">
                <button onclick="onEditOrCreate(${user.id})">Edit</button>
                <button>Delete</button>
            </div>
        </div>`;
    });
    elementUsers += `<div class="item-info"><button onclick="onEditOrCreate(0)" class="btn-add">Add</button></div>`;
    app.innerHTML = `<div class="list-item">${elementUsers}</div>`;
}

async function renderUserForm(id) {
    const user = id
        ? await getUser(id)
        : {
              name: "",
              email: "",
              age: "",
          };
    //build form
    let formHtml = `
    <form class="form-user">
        <input type="text" id="name" placeholder="Name" value="${user.name}">
        <input type="text" id="email" placeholder="Email" value="${user.email}">
        <input type="text" id="age" placeholder="Age" value="${user.age}">
        
        <button onclick="onSave(event, '${user.id}')" type="submit">${
        id ? "Update" : "Add"
    }</button>
    </form>
    `;
    app.innerHTML = formHtml;
}
