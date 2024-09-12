var timer = document.querySelector(".timer");
var btn = document.querySelector(".btn");
var action = document.querySelector(".action");

timer.innerText = 30;
var startTime = 0;
var stop = false;
var lastTime = 0;
var isDisabled = true;
function countdown(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }
    if (!stop) {
        var elapsed = timestamp - startTime;

        var remainingTime = 30 - Math.floor(elapsed / 1000);
        if (remainingTime >= 0) {
            timer.textContent = remainingTime;
        } else if (remainingTime === 0) {
            stop = true;
        }

        requestAnimationFrame(countdown);
        if (remainingTime === 0) {
            action.innerHTML = `
                <button class="btn">Get Link</button>
            `;

            var newBtn = document.querySelector(".btn");
            newBtn.addEventListener("click", function (e) {
                e.preventDefault();
                window.location.href = "https://fullstack.edu.vn";
            });
        }
    }
}

function handleVisibilityChange() {
    if (document.hidden) {
        stop = true;
        lastTime = new Date().getTime();
    } else {
        stop = false;
        startTime += new Date().getTime() - lastTime;
        requestAnimationFrame(countdown);
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);

requestAnimationFrame(countdown);
