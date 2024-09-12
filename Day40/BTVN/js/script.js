let scale = 2;
function handleScaleChange() {
    imgShow.style.scale = scale;
    overlay.style.width = `${100 / scale}%`;
    overlay.style.height = `${100 / scale}%`;
}
handleScaleChange();

// Hành động zoom
active.addEventListener("mousemove", function (e) {
    e.stopPropagation();
    display.style.visibility = "visible";
    overlay.style.visibility = "visible";

    let x = e.layerX - overlay.clientWidth / 2;
    let y = e.layerY - overlay.clientHeight / 2;

    // Đặt giới hạn di chuyển Overlay
    let rateX = x / img.clientWidth;
    let rateY = y / img.clientHeight;

    let overlayZone = 1 - 1 / scale;
    if (rateX <= 0) {
        x = 0;
    }
    if (rateX >= overlayZone) {
        x = overlayZone * img.clientWidth;
    }
    if (rateY <= 0) {
        y = 0;
    }
    if (rateY >= overlayZone) {
        y = overlayZone * img.clientHeight;
    }

    // Di chuyển overlay
    overlay.style.left = x + "px";
    overlay.style.top = y + "px";
    showImg(x, y);
});

active.addEventListener("mouseout", function () {
    display.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
});

function showImg(x, y) {
    // Dịch chuyển (x,y)=(0,0) về tâm của imgShow
    x -= img.clientWidth / 2 - overlay.clientWidth / 2;
    y -= img.clientHeight / 2 - overlay.clientHeight / 2;

    // Dịch chuyển imgShow với tọa độ tính từ tâm imgShow
    imgShow.style.objectPosition = `${-1 * x}px ${-1 * y}px`;
}
