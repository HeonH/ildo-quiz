const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
    // 퀴즈 시작
    alert("퀴즈를 시작합니다!");
    loadQuiz(1);
});

function loadQuiz(stage) {
    const quizContainer = document.querySelector(".container");
    quizContainer.innerHTML = `
        <h2>${stage}단계: ${questions[stage]}</h2>
        ${options[stage]
            .map(option => `<button class="quiz-option" onclick="checkAnswer(${stage}, '${option}')">${option}</button>`)
            .join("")}
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
            displayResult(true);
        } else {
            alert("정답입니다! 다음 단계로 넘어갑니다.");
            loadQuiz(stage + 1);
        }
    } else {
        displayResult(false);
    }
}

function displayResult(success) {
    const quizContainer = document.querySelector(".container");
    quizContainer.innerHTML = `
        <img src="${success ? 'success.png' : 'fail.png'}" alt="${success ? '성공' : '실패'}" class="result-image">
        <button class="share-button" onclick="shareResult()">공유하기</button>
        <button class="retry-button" onclick="retryQuiz()">다시 도전하기</button>
    `;
}

function shareResult() {
    const shareText = "일도 장학 퀴즈에 도전해 보세요! https://your-quiz-link.com";
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, "_blank");
}

function retryQuiz() {
    location.reload();
}

const questions = {
    1: "일도수학이 위치한 층은?",
    2: "일도수학의 원장님 성함은?",
    3: "일도수학에서 일하는 사람의 수는?",
    4: "일도수학의 총 책상 수는?",
    5: "일도수학 선생님의 나이를 전부 더하면?"
};

const options = {
    1: ["2층", "6층", "10층", "63층"],
    2: ["박석호", "방석호", "밤석호", "바서코"],
    3: ["9", "10", "11", "12"],
    4: ["23", "45", "67", "99"],
    5: ["138", "139", "140", "141"]
};
