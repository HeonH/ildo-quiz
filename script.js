const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    // 퀴즈 시작
    alert("퀴즈를 시작합니다!");
    loadQuiz();
});

function loadQuiz() {
    const quizContainer = document.querySelector(".container");
    quizContainer.innerHTML = `
        <h2>1단계: 일도수학이 위치한 층은?</h2>
        <button class="quiz-option" onclick="checkAnswer(1, '2층')">2층</button>
        <button class="quiz-option" onclick="checkAnswer(1, '6층')">6층</button>
        <button class="quiz-option" onclick="checkAnswer(1, '10층')">10층</button>
        <button class="quiz-option" onclick="checkAnswer(1, '63층')">63층</button>
    `;
}

function checkAnswer(stage, answer) {
    const correctAnswers = {
        1: "6층",
        2: "방석호",
        3: "11",
        4: "67",
        5: "140"
    };

    if (answer === correctAnswers[stage]) {
        if (stage === 5) {
            alert("축하합니다! 모든 문제를 맞혔습니다!");
        } else {
            alert("정답입니다! 다음 단계로 넘어갑니다.");
            loadNextStage(stage + 1);
        }
    } else {
        alert("오답입니다. 다시 도전하세요!");
    }
}

function loadNextStage(stage) {
    const questions = {
        2: "일도수학의 원장님 성함은?",
        3: "일도수학에서 일하는 사람의 수는?",
        4: "일도수학의 총 책상 수는?",
        5: "일도수학 선생님의 나이를 전부 더하면?"
    };

    const options = {
        2: ["박석호", "방석호", "밤석호", "바서코"],
        3: ["9", "10", "11", "12"],
        4: ["23", "45", "67", "99"],
        5: ["138", "139", "140", "141"]
    };

    const quizContainer = document.querySelector(".container");
    quizContainer.innerHTML = `
        <h2>${stage}단계: ${questions[stage]}</h2>
        ${options[stage]
            .map(option => `<button class="quiz-option" onclick="checkAnswer(${stage}, '${option}')">${option}</button>`)
            .join("")}
    `;
}
