const loginPage = (errorMessage) => {
    if (localStorage.getItem("userToken")) {
        router.navigate("/");
    }

    let display;
    if (errorMessage) {
        errorMessage = `Email hoặc mật khẩu không đúng.`;
        display = "block";
    } else {
        errorMessage = "";
        display = "none";
    }

    return `
    <div class="container">
        <div class="auth-page">
            <div class="introduct">
                    <h1>Đăng nhập</h1>
                    <p>
                        Bạn muốn tham gia cộng đồng Blogger, nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình? Hãy điền thông tin của bạn vào biểu mẫu dưới đây để tạo tài khoản miễn phí. Bạn sẽ nhận được nhiều ưu đãi, thông tin mới nhất và cơ hội giao lưu với những blogger khác khi đăng ký. Đừng bỏ lỡ cơ hội này, hãy đăng ký ngay! Nếu bạn chưa có tài khoản, <a onclick="toRegisterPage()" class="link">Đăng ký ngay!</a>
                    </p>
                </div>
                <div class="form-container">
                    <form>
                        <div style="display: ${display}" class="msg">${errorMessage}</div>
                        <label for="email">Enter Your email</label>
                        <div class="msg-email"></div>
                        <input type="email" id="email" name="email" placeholder="Please enter the email" required>
                        <label for="password">Enter Your password</label>
                        <div class="msg-password"></div>
                        <input type="password" id="password" name="password" placeholder="Please enter the password" required>
                        <div class="form-action">
                            <button onclick="event.preventDefault();onLogin()" type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
};

const registerPage = (errorMessage) => {
    if (localStorage.getItem("userToken")) {
        router.navigate("/");
    }
    let display;
    if (errorMessage) {
        errorMessage = `Email đã tồn tại.`;
        display = "block";
    } else {
        errorMessage = "";
        display = "none";
    }

    return `
    <div class="container">
        <div class="auth-page">
            <div class="introduct">
                    <h1>Đăng ký</h1>
                    <p>
                        Bạn muốn tham gia cộng đồng Blogger, nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình? Hãy điền thông tin của bạn vào biểu mẫu dưới đây để tạo tài khoản miễn phí. Bạn sẽ nhận được nhiều ưu đãi, thông tin mới nhất và cơ hội giao lưu với những blogger khác khi đăng ký. Đừng bỏ lỡ cơ hội này, hãy đăng ký ngay! Nếu bạn đã có tài khoản, <a onclick="toLoginPage()" class="link">Đăng nhập ngay!</a>
                    </p>
                </div>
                <div class="form-container">
                    <form>
                        <div style="display:${display}" class="msg">${errorMessage}</div>
                        <label for="name">Enter Your name</label>
                        <div class="msg-name"></div>
                        <input type="text" id="name" name="name" placeholder="Please enter the name" required>
                        <label for="email">Enter Your email</label>
                        <div class="msg-email"></div>
                        <input type="email" id="email" name="email" placeholder="Please enter the email" required>
                        <label for="password">Enter Your password</label>
                        <div class="msg-password"></div>
                        <input type="password" id="password" name="password" placeholder="Please enter the password" required>
                        <div class="form-action">
                            <button onclick="event.preventDefault(); onRegister()" class="btn-register" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
};

const homePage = async () => {
    const { access: accessToken, refresh: refreshToken } = JSON.parse(
        localStorage.getItem("userToken")
    );
    const posts = await requestPost("post", accessToken);
    let postsList = `<tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>`;
    if (posts.length > 0) {
        posts.forEach((post) => {
            postsList += `<tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.content}</td>
                <td>
                    <button class="edit-post"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete-post"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>`;
        });
    } else {
        postsList = "Bạn chưa có bài viết nào. Hãy đăng bài đi!";
    }

    if (posts) {
        const html = `<div class="container">
          <div class="home-page">
            <header class="home-header">
              <h1>Home Page</h1>
            </header>
            <div class="blogger-container">
              <h2>Blogger</h2>
              <div class="blogger-profile">
                <div class="blogger-avatar">
                  <p class="name-first-char">S</p>
                </div>
                <div class="blogger-info">
                  <a href="#" class="blogger-name">Shinki</a>
                </div>
              </div>
              <div class="post-form">
                <form action="">
                  <div class="form-input">
                      <label for="input-title">Enter Your Title:</label>
                      <input type="text" id="input-title" name="title" required>
                  </div>
                  <div class="form-input">
                      <label for="input-content">Enter Your Content:</label>
                      <textarea id="input-content" name="content" rows="10" required></textarea>
                  </div>
                  <button onclick="event.preventDefault();onPost()" type="submit">Post!</button>
                </form>
                </div>
                </div>
                <div class="sign-out-btn">
                    <button onclick="event.preventDefault(); onLogout()">Sign out</button>
                </div>
          </div>
          <div class="container">
            <div class="post-list">
                <table border="1px">
                    
                    ${postsList}
                </table>
            </div>
          </div>`;
        return html;
    } else {
        const newToken = await requestRefreshToken(
            "login/get_new_token",
            refreshToken
        );
        localStorage.setItem(
            "userToken",
            JSON.stringify({
                access: newToken.access,
                refresh: newToken.refresh,
            })
        );
        return await homePage();
    }
};
