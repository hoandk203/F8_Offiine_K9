const loginPage = () => {
    return `
    <div class="container">
        <div class="auth-page">
            <div class="introduct">
                    <h1>Đăng nhập</h1>
                    <p>
                        Bạn muốn tham gia cộng đồng Blogger, nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình? Hãy điền thông tin của bạn vào biểu mẫu dưới đây để tạo tài khoản miễn phí. Bạn sẽ nhận được nhiều ưu đãi, thông tin mới nhất và cơ hội giao lưu với những blogger khác khi đăng ký. Đừng bỏ lỡ cơ hội này, hãy đăng ký ngay! Nếu bạn chưa có tài khoản, <a href="/BTVN/register" class="link">Đăng ký ngay!</a>
                    </p>
                    <div class="back-to-home"><a href="/BTVN" class="link">Về trang chủ</a></div>
                </div>
                <div class="form-container">
                    <form>
                        <div class="msg"></div>
                        <label for="email">Enter Your email</label>
                        <input type="email" id="email" name="email" placeholder="Please enter the email">
                        <label for="password">Enter Your password</label>
                        <input type="password" id="password" name="password" placeholder="Please enter the password">
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

const registerPage = () => {
    return `
    <div class="container">
        <div class="auth-page">
            <div class="introduct">
                    <h1>Đăng ký</h1>
                    <p>
                        Bạn muốn tham gia cộng đồng Blogger, nơi bạn có thể tạo và chia sẻ những bài viết độc đáo của mình? Hãy điền thông tin của bạn vào biểu mẫu dưới đây để tạo tài khoản miễn phí. Bạn sẽ nhận được nhiều ưu đãi, thông tin mới nhất và cơ hội giao lưu với những blogger khác khi đăng ký. Đừng bỏ lỡ cơ hội này, hãy đăng ký ngay! Nếu bạn đã có tài khoản, <a href="/BTVN/login" class="link">Đăng nhập ngay!</a>
                    </p>
                    <div class="back-to-home"><a href="/BTVN" class="link">Về trang chủ</a></div>
                </div>
                <div class="form-container">
                    <form>
                        <label for="name">Enter Your name</label>
                        <input type="text" id="name" name="name" placeholder="Please enter the name">
                        <label for="email">Enter Your email</label>
                        <input type="email" id="email" name="email" placeholder="Please enter the email">
                        <label for="password">Enter Your password</label>
                        <input type="password" id="password" name="password" placeholder="Please enter the password">
                        <div class="form-action">
                            <button onclick="event.preventDefault();onRegister()" class="btn-register" type="submit">Sign up</button>
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
                <table>
                    
                </table>
            </div>
          </div>`;
        getPostList();
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
