import { requestLogin } from "./http.js";
import { requestProfile } from "./http.js";
import { requestRefreshToken } from "./http.js";

const app = document.querySelector("#app");

const render = async () => {
    if (localStorage.getItem("user_token")) {
        app.innerHTML = `<div class="profile">
            <h2>Welcome to F8</h2>
            <ul class="list-unstyled d-flex gap-2">
            <li>Welcome: <span class="username">Loading...</span></li>
            <li><a href="#" class="logout">Logout</a></li>
            </ul>
            </div>`;
        const getProfile = async () => {
            try {
                const {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                } = JSON.parse(localStorage.getItem("user_token"));
                const profile = await requestProfile(accessToken);
                if (!profile) {
                    // goi refresh token
                    const newToken = await requestRefreshToken(refreshToken);
                    if (!newToken) {
                        throw new Error("Unauthenticated");
                    }
                    // luu new token vao localStorage
                    localStorage.setItem(
                        "user_token",
                        JSON.stringify(newToken)
                    );
                    // goi lai getProfile()
                    getProfile();
                } else {
                    app.querySelector(".username").textContent = profile.email;
                }
            } catch (error) {
                localStorage.removeItem("user_token");
                render();
            }
        };
        getProfile();

        const logoutEl = app.querySelector(".logout");
        logoutEl.addEventListener("click", () => {
            localStorage.removeItem("user_token");
            render();
        });

        return;
    }
    app.innerHTML = `<h2 class=" text-center">Login</h2>
            <form action="" class="login">
            <div class="msg"></div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="email" class="form-control" name="email" placeholder="Email">
                </div>
                <div class="mb-3">
                    <label for="">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Password">
                </div>
                <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>`;
};

const handleLoginForm = () => {
    app.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (e.target.classList.contains("login")) {
            const btn = e.target.querySelector(".btn");
            btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;
            btn.disabled = true;
            const msgEl = e.target.querySelector(".msg");
            msgEl.innerHTML = ``;
            const dataLogin = Object.fromEntries(new FormData(e.target));
            const response = await requestLogin(dataLogin);

            btn.innerText = `Login`;
            btn.disabled = false;

            if (!response) {
                msgEl.innerHTML = `<div class="alert alert-danger text-center">Email hoặc Password không chính xác</div>`;
            } else {
                // luu token vao bo nho trinh duyet
                // chuyen object thanh json
                localStorage.setItem("user_token", JSON.stringify(response));
                e.target.reset();
                render();
            }
        }
    });
};

render();
handleLoginForm();

/*
    Trong một trang bất kỳ request nào cần authorization cần phải thực hiện các bước sau

    - lấy token ở localStorage hoặc cookie
    - Gọi API cần lấy dữ liệu hoặc các thao tác khác ( có truyền token lên)
    - Nếu thành công => trả về dữ liệu tương ứng từ API => thực hiện update giao diện
    - Nếu thất bại => gọi API refresh token
        + Thành công => update access token mới vào localStorage => gọi lại API đã bị failed ở bước trên
        + Thất bại => Đăng xuất

    Ví dụ:
    - request 1 => success
    - request 2 => failed => refresh token => request 2
    - request 3 => failed => refresh token => request 3
    - request 4 => failed => refresh token => request 4
*/
