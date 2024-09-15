const onRegister = async () => {
    const btnAuth = document.querySelector(".form-action button");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name) {
        document.querySelector(".msg-name").textContent =
            "Vui lòng nhập tên bạn";
    }
    if (!email) {
        document.querySelector(".msg-email").textContent =
            "Vui lòng nhập email của bạn";
    }
    if (!password) {
        document.querySelector(".msg-password").textContent =
            "Vui lòng nhập mật khẩu của bạn";
    } else if (!email.includes("@") || !email.includes(".com")) {
        document.querySelector(".msg-email").textContent =
            "Email không đúng định dạng";
    } else if (name && email) {
        try {
            btnAuth.disabled = true;
            btnAuth.textContent = "Loading...";
            const data = await requestRegister(
                "master/user",
                name,
                email,
                password
            );
            console.log(data);
            if (data) {
                router.navigate("/login");
            }
        } catch (error) {
            if (error.message === "Email already exists") {
                app.innerHTML = registerPage(error.message);
            }
        }
    }
};

const onLogin = async () => {
    const btnAuth = document.querySelector(".form-action button");
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (!email) {
        document.querySelector(".msg-email").textContent =
            "Vui lòng nhập email của bạn";
    }
    if (!password) {
        document.querySelector(".msg-password").textContent =
            "Vui lòng nhập mật khẩu của bạn";
    } else if (!email.includes("@") || !email.includes(".com")) {
        document.querySelector(".msg-email").textContent =
            "Email không đúng định dạng";
    } else if (password) {
        try {
            btnAuth.disabled = true;
            btnAuth.textContent = "Loading...";
            const data = await requestLogin("login", email, password);
            if (data) {
                localStorage.setItem("userToken", JSON.stringify(data));
                router.navigate("/");
            }
        } catch (error) {
            if (error) {
                app.innerHTML = loginPage(error.message);
            }
        }
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
        if (data.length > 0) {
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
        }
        if (data.length > 0) {
            document.querySelector(".post-list table").innerHTML = `<tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                        ${postList}`;
        }
    } catch (error) {
        console.log(error);
    }
};

const toLoginPage = () => {
    router.navigate("/login");
};

const toRegisterPage = () => {
    router.navigate("/register");
};
