//Bai tap ve nha buoi 35 line 2723

var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector(".progress-bar .progress span");
var progressBarWidth = progressBar.clientWidth;
var rate = 0;
var drag = false;
var initalRate = 0;
progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        drag = true;
        var offsetX = e.offsetX;
        rate = (offsetX / progressBarWidth) * 100;
        progress.style.width = `${rate}%`;
        clientXSpan = e.clientX;
        offsetLeft = offsetX;
        document.addEventListener("mousemove", handleDrag);
    }

    if (!drag) {
        var currentTime = (audio.duration * rate) / 100;
        currentTimeEl.innerText = getTimeFormat(currentTime);
        audio.currentTime = currentTime;
    }
});

progressSpan.addEventListener("mousedown", function (e) {
    e.stopPropagation();
    if (e.which === 1) {
        drag = true;
        clientXSpan = e.clientX;
        offsetLeft = e.target.offsetLeft;
        document.addEventListener("mousemove", handleDrag);
    }
});
document.addEventListener("mouseup", function (e) {
    document.removeEventListener("mousemove", handleDrag);
    if (drag) {
        var currentTime = (audio.duration * rate) / 100;
        currentTimeEl.innerText = getTimeFormat(currentTime);

        audio.currentTime = currentTime;
    }
    drag = false;
});
var clientXSpan = 0;
var offsetLeft = 0;
function handleDrag(e) {
    if (drag) {
        var spaceMove = e.clientX - clientXSpan;
        rate = ((spaceMove + offsetLeft) / progressBarWidth) * 100;
        if (rate < 0) {
            rate = 0;
        }
        if (rate > 100) {
            rate = 100;
        }
        progress.style.width = `${rate}%`;

        var currentTime = (audio.duration * rate) / 100;
        currentTimeEl.innerText = getTimeFormat(currentTime);
    }
}

//xây dựng player
//audio.paused : true/false  co dang chay khong
//audio.play(): chay
//audio.pause(): dung
var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationTimeEl = progressBar.nextElementSibling;

function getTimeFormat(seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${
        seconds < 10 ? "0" + seconds : seconds
    }`;
}

audio.addEventListener("canplay", function (e) {
    durationTimeEl.innerText = getTimeFormat(audio.duration);
});
audio.addEventListener("canplay", function (e) {
    currentTimeEl.innerText = getTimeFormat(audio.currentTime);
});

playAction.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener("play", function () {
    playAction.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
    playAction.classList.replace("fa-pause", "fa-play");
});

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var line1 = document.querySelector(".karaoke-lyrics .line1");
var line2 = document.querySelector(".karaoke-lyrics .line2");
audio.addEventListener("timeupdate", function () {
    if (drag === false) {
        currentTimeEl.innerText = getTimeFormat(audio.currentTime);

        rate = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${rate}%`;
    }
});

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

audio.addEventListener("ended", function () {
    audio.currentTime = 0;
    progress.style.width = 0;
    playAction.classList.replace("fa-pause", "fa-play");
});

var hoverCurrentTime = document.querySelector(".hover-current-time");

progressBar.addEventListener("mousemove", function (e) {
    hoverCurrentTime.style.display = "inline-block";
    hoverCurrentTime.style.left = `${e.offsetX}px`;

    var rate1 = (e.offsetX / progressBarWidth) * 100;
    hoverCurrentTime.innerText = getTimeFormat((audio.duration * rate1) / 100);
});

progressBar.addEventListener("mouseout", function (e) {
    hoverCurrentTime.style.display = "none";
});

progressSpan.addEventListener("mousemove", function (e) {
    e.stopPropagation();
});

////////////////////////////////////////////////////////////////////

var btnKaraoke = document.querySelector(".btn-show-karaoke");
var karaoke = document.querySelector(".karaoke");
var closeKaraoke = document.querySelector(".karaoke-header i");
var karaokeLyric = document.querySelector(".karaoke-lyrics");
btnKaraoke.addEventListener("click", function () {
    karaoke.classList.add("show");
});
closeKaraoke.addEventListener("click", function () {
    karaoke.classList.remove("show");
});

///////////////////////////////////////////////////

var requestId;
audio.addEventListener("play", function () {
    requestId = window.requestAnimationFrame(handleKaraoke);
});
audio.addEventListener("pause", function () {
    window.cancelAnimationFrame(requestId);
});
var lastWord;
var lastIndex;
function handleKaraoke() {
    var currentTime = audio.currentTime * 1000;
    renderLyric(currentTime);
    renderKaraoke(currentTime);
    requestId = window.requestAnimationFrame(handleKaraoke);
}

var songName;

//xu ly to mau tung tu khi hat karaoke
function renderKaraoke(currentTime) {
    var wordList = karaokeLyric.querySelectorAll(".word");
    wordList.forEach(function (wordEl) {
        var startTime = wordEl.dataset.startTime;
        var endTime = wordEl.dataset.endTime;
        if (currentTime >= startTime && currentTime <= endTime) {
            var rate =
                ((currentTime - startTime) / (endTime - startTime)) * 100;
            wordEl.children[0].style.width = `${rate}%`;
        }
        if (currentTime > endTime) {
            wordEl.children[0].style.width = `100%`;
        }
    });
}

// hien thi loi bai hat len man hinh
function renderLyric(currentTime) {
    var index = lyric1.findIndex(function (sentenceEl) {
        var sentenceArr = sentenceEl.words;
        var fisrtWord = sentenceArr[0];
        var lastWord = sentenceArr[sentenceArr.length - 1];
        console.log(sentenceArr, fisrtWord, lastWord);
        return (
            currentTime > fisrtWord.startTime && currentTime < lastWord.endTime
        );
    });

    if (
        currentTime < lyric1[0].words[0].startTime - 5000 ||
        currentTime >
            lyric1[lyric1.length - 1].words.slice(-1)[0].endTime + 5000
    ) {
        karaokeLyric.innerHTML = `
            <span>Ngày mai người ta lấy chồng</span>
            <span>Thành Đạt</span>
        `;
    }

    if (index !== -1 && index !== lastIndex) {
        // nếu index =0 => hiển thị 2 câu đầu tiên
        if (index === 0) {
            karaokeLyric.innerHTML = `
                <p>${getSentence(0)}</p>
                <p>${getSentence(1)}</p>
            `;
        } else {
            if (index % 2 !== 0) {
                //ẩn hàng đầu tiên vào hiển thị câu tiếp
                nextSentence(karaokeLyric.children[0], getSentence(index + 1));
            } else {
                // ẩn hàng 2 và hiển thị câu tiếp
                nextSentence(karaokeLyric.children[1], getSentence(index + 1));
            }
        }
        var sentence = getSentence(index);
        lastIndex = index;
    }
}

function getSentence(index) {
    if (index >= 0 && index < lyric1.length) {
        return lyric1[index].words
            .map(function (wordEl) {
                return `<span class="word" data-start-time="${wordEl.startTime}" data-end-time="${wordEl.endTime}">${wordEl.data}<span>${wordEl.data}</span></span>`;
            })
            .join(" ");
    }
    return "";
}

function nextSentence(element, sentence) {
    element.style.transition = ` opacity 0.3s ease`;
    element.style.opacity = 0;
    setTimeout(function () {
        element.innerHTML = sentence;
        element.style.opacity = 1;
    }, 300);
}
