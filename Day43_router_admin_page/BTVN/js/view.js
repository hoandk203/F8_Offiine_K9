let currentQuestion = 1;
const totalQuestions = 5;
let scoreStreak = 0;
let score = 0;
let streakProgress = 0;
let streakLevel = 0;
let gameCorrect = 0;
let gameIncorrect = 0;

const renderContent = async () => {
    renderLoading();
    content.classList.remove("flex", "justify-center", "items-center");
    const question = await getQuestions(currentQuestion);
    if (question && question.length > 0) {
        const questionData = question[currentQuestion - 1];
        if (questionData.id === 1) {
            score = scoreStreak + 0;
        } else if (questionData.id >= 1 && currentAnswer.isCorrect) {
            score += scoreStreak + 300;
        }
        if (scoreStreak >= 0) {
            streakProgress = (scoreStreak / 300) * 100;
        }
        content.innerHTML = `
        <div class="game-info flex flex-col justify-between items-center p-8 bg-black text-white">
            <div class="timer w-full h-[5px] bg-white rounded-full mb-3"></div>
            <div class="flex justify-between w-full">
                <div class="flex justify-between gap-x-3">
                    <div class="amount-quiz ">
                        <p class="p-2 bg-gray-500 rounded-full">${currentQuestion}/${totalQuestions}</p>
                    </div>
                    <div class="streak flex items-center gap-x-2.5">
                        <div class="streak-level">
                            <div class="streak-bar bg-white rounded-full w-[200px] h-[20px]">
                                <div style="width: ${streakProgress}%;" class="streak-progress bg-red-500 rounded-full w-[100px] h-full"></div>
                            </div>
                        </div>
                        <div class="streak-bonus">
                            <p>+${scoreStreak}</p>
                        </div>
                    </div>
                </div>
                <div class="score">
                    <p>Score: ${score}</p>
                </div>
            </div>
        </div>
        <div class="game-container flex flex-col justify-center items-center h-[80%] gap-y-[200px] m-auto">
            <div
                class="question bg-black bg-opacity-60 text-2xl font-bold  w-[50%] h-[200px] rounded-md flex justify-center items-center">
                <p class="text-white">${questionData.question}</p>
            </div>
            <div class="answer w-full flex justify-center gap-x-10">
                ${questionData.answer
                    .map(
                        (ans) => `
                    <button 
                      onclick="onAnswerClick('${ans.id}')" 
                      class="ans-${ans.id} w-[300px] h-[200px] bg-black bg-opacity-60 text-white rounded-md"
                    >
                      ${ans.content}
                    </button>
                `
                    )
                    .join("")}
            </div>

        </div>`;
    }
};

const renderGamePerformance = () => {
    const content = document.querySelector(".content");
    const performanceProgress = (gameCorrect / totalQuestions) * 100;
    content.classList.add("flex", "justify-center", "items-center");
    content.innerHTML = `<div class="game-performance flex flex-col gap-4 text-white">
            <h2 class="text-center text-2xl font-bold">Game Performance</h2>
            <div class="accuracy text-center">
                <p>Accuracy</p>
                <div class="performance-bar mt-2 w-full h-[20px] bg-gray-300 rounded-full">
                    <div
                        style="width: ${performanceProgress}%;"
                        class="performance-bar-progress text-[14px] h-full bg-green-500 rounded-full flex justify-center items-center">
                        ${performanceProgress}%</div>
                </div>
            </div>
            <div class="game-performance-content flex justify-between flex-wrap">
                <div class="w-[50%]">Score: <span id="game-score">${score}</span></div>
                <div class="w-[50%]">Streak: <span id="game-streak">${streakLevel}</span></div>
                <div class="w-[50%]">Correct: <span id="game-correct">${gameCorrect}</span></div>
                <div class="w-[50%]">Incorrect: <span id="game-incorrect">${gameIncorrect}</span></div>
            </div>
            <div class="game-performance-btn flex justify-center">
                <button onclick="onPlayAgainClick()" class="bg-blue-500 text-white px-4 py-2 rounded-md">Play Again</button>
            </div>
        </div>`;
};

const renderStartGame = () => {
    content.innerHTML = `<div class="start w-full flex justify-center items-center bg-black p-8">
            <div class="timer-start text-white text-[50px] hidden">3</div>
            <div class="start-btn">
                <button onclick="onStartClick()">Start</button>
            </div>
        </div>`;
};

const renderLoading = () => {
    content.innerHTML = `<div class="loading text-center">
        <div class="text-white text-[50px]">LOADING...</div>
    </div>`;
};
