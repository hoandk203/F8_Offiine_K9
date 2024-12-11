const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list-item");
const listHidden = document.querySelector(".list-hidden");

let lessionIndex = 0;
let moduleIndex = 0;

// Tính toán vị trí chuột tương đối so với phần tử được nhấp
const getMouseOffset = (evt) => {
    const targetRect = evt.target.getBoundingClientRect();
    const offset = {
        x: evt.pageX - targetRect.left,
        y: evt.pageY - targetRect.top,
    };
    return offset;
};

// Tính toán tâm dọc của một phần tử
const getElementVerticalCenter = (el) => {
    const rect = el.getBoundingClientRect();
    return (rect.bottom - rect.top) / 2;
};

// Xử lý việc chèn placeholder khi kéo thả
const appendPlaceholder = (evt, idx) => {
    evt.preventDefault();
    if (idx === dragIndex) {
        return;
    }

    const offset = getMouseOffset(evt);
    const middleY = getElementVerticalCenter(evt.target);
    const placeholder = list.children[dragIndex];

    // console.log(`hover on ${idx} ${offset.y > middleY ? 'bottom half' : 'top half'}`)
    if (offset.y > middleY) {
        list.insertBefore(evt.target, placeholder);
    } else if (list.children[idx + 1]) {
        list.insertBefore(evt.target.nextSibling || evt.target, placeholder);
    }
    return;
};

// Chức năng chính để thực hiện sắp xếp
function sortable(rootEl, onUpdate) {
    var dragEl;

    // Making all siblings movable
    render(rootEl);

    // Xử lý sự kiện kéo thả
    function _onDragOver(evt) {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "move";

        var target = evt.target;
        if (target && target !== dragEl && target.nodeName == "DIV") {
            // Sorting
            const offset = getMouseOffset(evt);
            const middleY = getElementVerticalCenter(evt.target);

            if (offset.y > middleY) {
                if (target.nextSibling.parentElement === rootEl) {
                    rootEl.insertBefore(dragEl, target.nextSibling);
                    //   rootEl.dataset.index = target.nextSibling.dataset.index;
                }
            } else {
                if (target.parentElement === rootEl) {
                    rootEl.insertBefore(dragEl, target);
                    //   rootEl.dataset.index = target.dataset.index;
                }
            }
        }
    }

    // Kết thúc sắp xếp
    function _onDragEnd(evt) {
        evt.preventDefault();

        dragEl.classList.remove("ghost");
        rootEl.removeEventListener("dragover", _onDragOver, false);
        rootEl.removeEventListener("dragend", _onDragEnd, false);

        // Notification about the end of sorting
        onUpdate(dragEl);
    }

    // Bắt đầu sắp xếp
    rootEl.addEventListener(
        "dragstart",
        function (evt) {
            dragEl = evt.target; // Ghi nhớ phần tử sẽ được di chuyển

            // Giới hạn kiểu di chuyển
            evt.dataTransfer.effectAllowed = "move";
            evt.dataTransfer.setData("Text", dragEl.textContent);

            // Đăng ký các sự kiện kéo thả
            rootEl.addEventListener("dragover", _onDragOver, false);
            rootEl.addEventListener("dragend", _onDragEnd, false);

            setTimeout(function () {
                // Nếu hành động này được thực hiện mà không có setTimeout,
                // thì đối tượng di chuyển sẽ thuộc lớp này.
                dragEl.classList.add("ghost");
            }, 0);
        },
        false
    );
}

// Cập nhật nội dung và thuộc tính của các phần tử con
function render(rootEl) {
    [].slice.call(rootEl.children).forEach(function (itemEl, index) {
        itemEl.draggable = true;
        let type = "Bài";

        if (itemEl.classList.contains("active")) {
            type = "Module";
            moduleIndex++;
        } else {
            lessionIndex++;
        }
        if (!itemEl.children.length) {
            itemEl.innerHTML = `${type}: ${
                type === "Module" ? moduleIndex : lessionIndex
            }: <span>${itemEl.innerText}</span>`;
        } else {
            itemEl.innerHTML = `${type}: ${
                type === "Module" ? moduleIndex : lessionIndex
            }: <span>${itemEl.children[0].innerText}</span>`;
        }
    });
}

// Khởi tạo chức năng sắp xếp
sortable(list, function (item) {
    lessionIndex = 0;
    moduleIndex = 0;

    render(list);
});
