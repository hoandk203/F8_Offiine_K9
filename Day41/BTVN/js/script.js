const posts = document.querySelector(".posts");
let isLoading = false;
let currentPage = 1;

async function fetchPosts() {
    if (isLoading) return;
    isLoading = true;

    const response = await fetch(
        `https://api-auth-two.vercel.app/blogs?limit=5&page=${currentPage}`
    );
    console.log(response);
    const datas = await response.json();
    console.log(datas);
    datas.data.forEach((data) => {
        const beforeLink = data.content.indexOf("https://") - 1;
        const charBeforeLink = data.content.charAt(beforeLink);
        if (data.content.includes("https://")) {
            data.content.split(" ").forEach((word) => {
                if (
                    word.includes("https://") &&
                    (charBeforeLink === " " || charBeforeLink === "")
                ) {
                    data.content = data.content.replace(
                        word,
                        `<a href="${word}" target="_blank">${word}</a>`
                    );
                }
            });

            // data.content = `${beforeLink} <a href="${data.content}" target="_blank">${data.content}</a>`;
        }
        posts.innerHTML += `<div class="post">
                <div class="time">
                    <div class="time-passed">
                        <span>${getTimePassed(data.createdAt)}</span>
                    </div>
                    <div class="hour">
                        <span>${getHour(data.createdAt)}</span>
                    </div>
                    <div class="minute">
                        <span>${getMinute(data.createdAt)}</span>
                    </div>
                    <div class="username">
                        <span>@${data.userId.name}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="user-profile">
                        <span class="user-profile-image">
                            <p>H</p>
                        </span>
                        <span class="user-profile-name"><a href="#">${
                            data.userId.name
                        }</a></span>
                    </div>
                    <div class="title">
                        <h3>${data.title}</h3>
                    </div>
                    <div class="description">
                        <p>${data.content}</p>
                    </div>
                    <div class="view-more">
                        <a href="#"># view more ${
                            data.title.length > 20
                                ? data.title.substring(0, 20) + "..."
                                : data.title
                        }</a>
                    </div>
                    <div class="link">
                        <a href="#"># ${data.userId.name}</a>
                        <div class="read-time">
                            <span>Khoảng 1 giây đọc</span>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    currentPage++;
    isLoading = false;
}

function handleScroll() {
    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
    ) {
        fetchPosts();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchPosts();
    window.addEventListener("scroll", handleScroll);
});

function getTimePassed(createdAt) {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInHours = Math.floor((now - created) / (1000 * 60 * 60));
    return `${diffInHours} giờ trước`;
}

function getHour(createdAt) {
    const created = new Date(createdAt);
    let hours = created.getHours();
    const ampm = hours >= 12 ? "chiều" : "sáng";
    hours = hours % 12;
    hours = hours ? hours : 0;
    return `${hours}h ${ampm}`;
}

function getMinute(createdAt) {
    const created = new Date(createdAt);
    return `${created.getMinutes()} phút`;
}
