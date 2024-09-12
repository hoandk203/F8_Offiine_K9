const getQuestions = async (page = 1) => {
    return await getMethod(`questions?limit=1&page=${page}`);
};

let currentAnswer;
const onAnswerClick = async (id) => {
    const question = await getQuestions(currentQuestion);
    const questionData = question[currentQuestion - 1];
    // xoa onclick sau khi chon dap an
    const allAnswer = document.querySelectorAll(".answer button");
    allAnswer.forEach((ans) => {
        ans.removeAttribute("onclick");
    });

    // them background cho dap an dung
    questionData.answer.forEach((ans) => {
        if (ans.id == id) {
            currentAnswer = ans;
        }
        const answerEl = document.querySelector(`.ans-${ans.id}`);
        if (ans.isCorrect) {
            answerEl.classList.add("bg-green-500");
        }
    });

    // them backgound cho dap an da chon | thong bao dap an dung/sai
    const currentAnswerElement = document.querySelector(`.ans-${id}`);
    if (currentAnswer.isCorrect) {
        if (scoreStreak < 300) {
            scoreStreak += 100;
        }
        streakLevel += 1;
        gameCorrect += 1;
        currentAnswerElement.classList.add("bg-green-500");
        const correctAnswer = document.createElement("div");
        correctAnswer.innerHTML = "Correct Answer!";
        correctAnswer.classList.add(
            "text-white",
            "text-2xl",
            "font-bold",
            "absolute",
            "bottom-0",
            "flex",
            "justify-center",
            "items-center",
            "w-full",
            "bg-green-500",
            "p-4"
        );
        content.appendChild(correctAnswer);
    } else {
        scoreStreak = 0;
        gameIncorrect += 1;
        currentAnswerElement.classList.add("bg-red-500");
        const inCorrectAnswer = document.createElement("div");
        inCorrectAnswer.innerHTML = "Incorrect Answer!";
        inCorrectAnswer.classList.add(
            "text-white",
            "text-2xl",
            "font-bold",
            "absolute",
            "bottom-0",
            "flex",
            "justify-center",
            "items-center",
            "w-full",
            "bg-red-500",
            "p-4"
        );
        content.appendChild(inCorrectAnswer);
    }

    // chuyen den cau hoi tiep theo
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        setTimeout(() => {
            renderContent();
        }, 1000);
    } else {
        setTimeout(() => {
            renderGamePerformance();
        }, 1000);
    }
};

const onPlayAgainClick = () => {
    currentQuestion = 1;
    scoreStreak = 0;
    score = 0;
    streakProgress = 0;
    streakLevel = 0;
    gameCorrect = 0;
    gameIncorrect = 0;
    renderStartGame();
};

const onStartClick = () => {
    const timerStart = document.querySelector(".timer-start");
    const startBtn = document.querySelector(".start-btn");
    startBtn.style.display = "none";
    timerStart.style.display = "block";
    let timer = 3;
    const intervalId = setInterval(() => {
        timer--;
        if (timer > 0) {
            timerStart.textContent = timer;
        } else if (timer === 0) {
            timerStart.textContent = "GO";
        } else {
            clearInterval(intervalId);
            renderContent();
        }
    }, 1000);
};
