async function getUsers() {
    const users = await getMethod("users");
    return users;
}

function onEditOrCreate(id) {
    router.navigate(`/users/${id ? id : 0}`);
}

async function getUser(id) {
    return await getMethod(`users/${id}`);
}

async function onSave(event, id) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const body = {
        name,
        email,
        age,
    };

    let newUser;

    if (id) {
        newUser = await putMethod(`users/${id}`, body);
    } else {
        newUser = await postMethod("users", body);
    }

    //back to home
    router.navigate("/");
}
