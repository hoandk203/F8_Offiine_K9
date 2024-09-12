let img = document.querySelector(".image");
let imgShow = document.querySelector(".show");
let zoomFrame = document.querySelector(".zoom-frame");
let overlay = document.querySelector(".overlay");

let imgInsideShow = document.querySelector(".show img");

let scale = 2;
window.addEventListener("load", function () {
    let imgWidth = img.offsetWidth;
    let imgHeight = img.offsetHeight;
    zoomFrame.style.width = `${imgWidth / scale}px`;
    zoomFrame.style.height = `${imgHeight / scale}px`;

    imgShow.style.width = `${imgWidth / scale}px`;
    imgShow.style.height = `${imgHeight / scale}px`;
});

overlay.addEventListener("mousemove", function (e) {
    imgShow.style.visibility = "visible";
    zoomFrame.style.visibility = "visible";

    let offsetX = e.offsetX;
    let offsetY = e.offsetY;

    let zoomFrameHalfWidth = zoomFrame.offsetWidth / 2;
    let zoomFrameHalfHeight = zoomFrame.offsetHeight / 2;

    // Calculate zoomFrame position
    let zoomFrameLeft = Math.max(
        0,
        Math.min(offsetX - zoomFrameHalfWidth, zoomFrame.offsetWidth)
    );
    let zoomFrameTop = Math.max(
        0,
        Math.min(offsetY - zoomFrameHalfHeight, zoomFrame.offsetHeight)
    );

    zoomFrame.style.left = `${zoomFrameLeft}px`;
    zoomFrame.style.top = `${zoomFrameTop}px`;

    // Calculate imgInsideShow position
    let imgInsideShowX = -Math.min(
        Math.max(offsetX - zoomFrameHalfWidth, 0),
        zoomFrame.offsetWidth
    );
    let imgInsideShowY = -Math.min(
        Math.max(offsetY - zoomFrameHalfHeight, 0),
        zoomFrame.offsetHeight
    );

    imgInsideShow.style.objectPosition = `${imgInsideShowX}px ${imgInsideShowY}px`;

    imgShow.style.scale = "2";
    let imgWidth = img.offsetWidth;
    let imgHeight = img.offsetHeight;
    imgShow.style.translate = `${imgWidth / 4}px -${imgHeight / 4}px`;
});

img.addEventListener("mouseout", function () {
    imgShow.style.visibility = "hidden";
    zoomFrame.style.visibility = "hidden";
});
