//tạo element
var audio = document.querySelector("audio");
var karaokeInner = document.querySelector(".karaoke-inner");

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

//xu ly to mau tung tu khi hat karaoke
function renderKaraoke(currentTime) {
    var wordList = karaokeInner.querySelectorAll(".word");
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
    var index = lyric.findIndex(function (sentenceEl) {
        var sentenceArr = sentenceEl.words;
        var fisrtWord = sentenceArr[0];
        var lastWord = sentenceArr[sentenceArr.length - 1];
        return (
            currentTime >= fisrtWord.startTime &&
            currentTime <= lastWord.endTime
        );
    });

    if (index !== -1 && index !== lastIndex) {
        // nếu index =0 => hiển thị 2 câu đầu tiên
        if (index === 0) {
            karaokeInner.innerHTML = `
                <p>${getSentence(0)}</p>
                <p>${getSentence(1)}</p>
            `;
        } else {
            if (index % 2 !== 0) {
                //ẩn hàng đầu tiên vào hiển thị câu tiếp
                nextSentence(karaokeInner.children[0], getSentence(index + 1));
            } else {
                // ẩn hàng 2 và hiển thị câu tiếp
                nextSentence(karaokeInner.children[1], getSentence(index + 1));
            }
        }
        var sentence = getSentence(index);
        lastIndex = index;
    }
}

function getSentence(index) {
    return lyric[index].words
        .map(function (wordEl) {
            return `<span class="word" data-start-time="${wordEl.startTime}" data-end-time="${wordEl.endTime}">${wordEl.data}<span>${wordEl.data}</span></span>`;
        })
        .join(" ");
}

function nextSentence(element, sentence) {
    element.style.transition = ` opacity 0.3s ease`;
    element.style.opacity = 0;
    setTimeout(function () {
        element.innerHTML = sentence;
        element.style.opacity = 1;
    }, 300);
}
