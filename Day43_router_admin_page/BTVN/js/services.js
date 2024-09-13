let questionList = [];

const loadQuestions = async (page) => {
    const questions = await getMethod(`questions?_limit=1&_page=${page}`);
    questionList.push(...questions);
};

const getQuestions = async () => {
    return questionList;
};

let currentAnswer;
const onAnswerClick = async (id) => {
    const question = await getQuestions();
    const questionData = question[0];
    // xoa onclick sau khi chon dap an
    const allAnswer = document.querySelectorAll(".answer button");
    allAnswer.forEach((ans) => {
        ans.removeAttribute("onclick");
    });

    // them background cho dap an dungg
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

        if (questionData.id === 1) {
            score = scoreStreak + 300;
        } else if (questionData.id >= 1 && currentAnswer.isCorrect) {
            score += scoreStreak + 300;
        }
        if (scoreStreak >= 0) {
            streakProgress = (scoreStreak / 300) * 100;
        }
        questionNumber += 1;
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
        questionNumber += 1;
        streakLevelMax.push(streakLevel);

        streakLevel = 0;
        if (scoreStreak >= 0) {
            streakProgress = (scoreStreak / 300) * 100;
        }
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
    if (questionNumber <= totalQuestions) {
        setTimeout(() => {
            renderContent();
        }, 1000);
    } else {
        setTimeout(() => {
            renderGamePerformance();
        }, 1000);
    }
    questionList = [];
};

const onPlayAgainClick = () => {
    currentQuestion = 1;
    questionNumber = 1;
    scoreStreak = 0;
    score = 0;
    streakProgress = 0;
    streakLevel = 0;
    streakLevelMax = [];
    gameCorrect = 0;
    gameIncorrect = 0;
    questionNumberArray = [];
    renderStartGame();
};

const onStartClick = async () => {
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
