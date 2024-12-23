const questions = [
    { question: "5 + 8은 무엇인가요?", answer: 8 },
    { question: "16 x 9은 무엇인가요?", answer: 144 },
    { question: "24424 ÷ 284는 무엇인가요?", answer: 86 },
    { question: "562 + 847은 무엇인가요?", answer: 1409 },
    { question: "2의 10제곱은 무엇인가요?", answer: 1024 }
  ];
  let currentStep = 0;
  
  function showQuestion() {
    if (currentStep < questions.length) {
      document.getElementById('question').innerText = questions[currentStep].question;
    } else {
      alert("축하합니다! 퀴즈를 완료했습니다!");
    }
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === questions[currentStep].answer) {
      currentStep++;
      if (currentStep < questions.length) {
        showQuestion();
      } else {
        alert("모든 단계를 완료했습니다!");
      }
    } else {
      document.getElementById('quiz-screen').style.display = "none";
      document.getElementById('failure-screen').classList.add("active");
    }
  }
  
  function restartQuiz() {
    currentStep = 0;
    document.getElementById('failure-screen').classList.remove("active");
    document.getElementById('quiz-screen').style.display = "block";
    showQuestion();
  }
  
  showQuestion();
  