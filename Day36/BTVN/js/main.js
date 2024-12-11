let isDragging = false;
let currLesson = null;
let offsetX = 0;
let offsetY = 0;

function handleMouseDown() {
    const lessons = document.querySelectorAll(".lesson");
    lessons.forEach((lesson) => {
        lesson.addEventListener("mousedown", (e) => {
            isDragging = true;
            currLesson = lesson;
            offsetX = e.clientX - lesson.getBoundingClientRect().left;
            offsetY = e.clientY - lesson.getBoundingClientRect().top;
            lesson.style.position = "absolute";
            lesson.style.zIndex = "1000";
            document.addEventListener("mousemove", handleDrag);
        });
    });

    document.addEventListener("mouseup", handleDrop);
}

function handleDrag(e) {
    if (!isDragging) return;
    currLesson.style.left = `${e.clientX - offsetX}px`;
    currLesson.style.top = `${e.clientY - offsetY}px`;
}

function handleDrop(e) {
    if (!isDragging) return;
    isDragging = false;
    currLesson.style.position = "static";
    currLesson.style.zIndex = "auto";
    document.removeEventListener("mousemove", handleDrag);

    const container = document.querySelector(".container");
    const lessons = Array.from(container.children);
    const dropPosition = lessons.findIndex((lesson) => {
        const rect = lesson.getBoundingClientRect();
        return e.clientY < rect.top + rect.height / 2;
    });

    if (dropPosition !== -1) {
        const targetLesson = lessons[dropPosition];
        if (targetLesson !== currLesson) {
            replaceLesson(currLesson, targetLesson);
        }
    } else {
        container.appendChild(currLesson);
    }

    currLesson = null;
}

function replaceLesson(draggedLesson, targetLesson) {
    const container = document.querySelector(".container");
    const draggedIsModule = draggedLesson.classList.contains("module");
    const targetIsModule = targetLesson.classList.contains("module");

    if (draggedIsModule && !targetIsModule) {
        // Nếu kéo module vào bài học, chèn module trước bài học
        container.insertBefore(draggedLesson, targetLesson);
    } else if (!draggedIsModule && targetIsModule) {
        // Nếu kéo bài học vào module, chèn bài học sau module
        container.insertBefore(draggedLesson, targetLesson.nextSibling);
    } else {
        // Nếu cùng loại (module-module hoặc bài học-bài học), hoán đổi vị trí
        const draggedNext = draggedLesson.nextSibling;
        const targetNext = targetLesson.nextSibling;
        container.insertBefore(targetLesson, draggedNext);
        container.insertBefore(draggedLesson, targetNext);
    }
}

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
