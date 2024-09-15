const onRegister = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = await requestRegister("master/user", name, email, password);
    if (data) {
        router.navigate("/login");
    }
};

const onLogin = async () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const data = await requestLogin("login", email, password);
    if (data) {
        localStorage.setItem("userToken", JSON.stringify(data));
        router.navigate("/");
    } else {
        const msg = document.querySelector(".msg");
        msg.style.display = "block";
        msg.textContent = "Email hoặc mật khẩu không đúng";
    }
};

const onLogout = async () => {
    localStorage.removeItem("userToken");
    router.navigate("/login");
};

const onPost = async () => {
    const title = document.querySelector("#input-title");
    const content = document.querySelector("#input-content");

    const { access: accessToken, refresh: refreshToken } = JSON.parse(
        localStorage.getItem("userToken")
    );
    const data = await requestPost(
        "post",
        accessToken,
        title.value,
        content.value
    );
    const postListEl = document.querySelector(".post-list");
    getPostList();
    title.value = "";
    content.value = "";
};

const getPostList = async () => {
    let postList = "";
    const { access: accessToken } = JSON.parse(
        localStorage.getItem("userToken")
    );
    try {
        const data = await requestPost("post", accessToken);
        postList = data
            .map(
                (post) => `<tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.content}</td>
                <td>
                    <button class="edit-post"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-post"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`
            )
            .join("");
        document.querySelector(".post-list table").innerHTML = `<tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                    ${postList}`;
    } catch (error) {
        console.log(error);
    }
};
