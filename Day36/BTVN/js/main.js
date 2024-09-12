let isDraging = false;
let currLesson = null;
let offsetXClick = 0;
let offsetYClick = 0;
let clientXClick = 0;
let clientYClick = 0;

function handleMouseDown() {
    const lessons = document.querySelectorAll(".lesson");
    lessons.forEach((lesson) => {
        lesson.addEventListener("mousedown", (e) => {
            currLesson = lesson;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            clientXClick = e.clientX;
            clientYClick = e.clientY;
            document.addEventListener("mousemove", handleDrag);
        });
    });

    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", handleDrag);
    });
}

function handleDrag(e) {
    isDraging = true;
    currLesson.style.translate = `${e.clientX - clientXClick}px ${
        e.clientY - clientYClick
    }px`;
}

function replaceLesson(lesson) {}

function render() {
    const container = document.querySelector(".container");
    container.innerHTML = `<div class="module lesson">Module: 1: Nhập môn lập trình web</div>
        <div class="lesson">Bài: 1: Giới thiệu Khóa học HTML-CSS</div>
        <div class="lesson">Bài: 2: Nhập môn lập trình web - Phần 1</div>
        <div class="lesson">Bài: 3: Nhập môn lập trình web - Phần 2</div>
        <div class="lesson">Bài: 4: Công cụ - Phần mềm cần chuẩn bị</div>
        <div class="module lesson">Module: 2: Ngôn ngữ HTML</div>
        <div class="lesson">Bài: 5: HTML cơ bản - Phần 1</div>
        <div class="lesson">Bài: 6: HTML cơ bản - Phần 2</div>
        <div class="module lesson">Module: 3: Ngôn ngữ CSS</div>
        <div class="lesson">Bài: 7: Giới thiệu ngôn ngữ CSS - Cách viết CSS</div>
        <div class="lesson">Bài: 8: Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1</div>`;
}

function main() {
    render();
    handleMouseDown();
}

main();
