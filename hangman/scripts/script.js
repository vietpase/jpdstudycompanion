const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-btn");
const hangmanImg = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const currScore = document.querySelector(".score b");

const maxGuesses = 6;
let currentQuestionIndex = 0, wrongGuessCount = 0;
let score = 0;
let currentQuestion;

function resetGame() {
    nextButton.style.display = "none";
    currScore.innerText = `${score}`;
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function startQuiz() {
    wrongGuessCount = 0;
    currentQuestionIndex = 0;
    score = 0;

    hangmanImg.src = `images/hangman-${wrongGuessCount}.svg`;
    nextButton.innerHTML = "Next";
    gameModal.classList.remove("show");

    showQuestion();
}

function showQuestion() {
    resetGame();

    currentQuestion = questionList[Math.floor(Math.random() * questionList.length)];
    let formattedQuestion = currentQuestion.question.replace(/\n/g, "<br>");
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `<h4>Question ${questionNo}:</h4><b>${formattedQuestion}</b>`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer === currentQuestion.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        score++;
        currScore.innerText = `${score}`;
        selectedButton.classList.add("correct");
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        nextButton.style.display = "block";
    } else {
        selectedButton.classList.add("wrong");
        selectedButton.disabled = true;

        wrongGuessCount++;
        if (wrongGuessCount <= maxGuesses) {
            hangmanImg.src = `images/hangman-${wrongGuessCount}.svg`;
        }

        if (wrongGuessCount >= maxGuesses) {
            gameOver(false);
        }
    }
}

function gameOver() {
    setTimeout(() => {
        const modalText = `The answer was:`;
        gameModal.querySelector("img").src = `images/lost.gif`;
        gameModal.querySelector("h4").innerText = `Game Over!`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentQuestion.correct}</b><br>You got: <b>${score} ${score > 1 ? "points" : "point"}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

function handleNextButton() {
    currentQuestionIndex++;
    showQuestion();
}

nextButton.addEventListener("click", () => {
    if (wrongGuessCount < maxGuesses) {
        handleNextButton();
    } else {
        gameOver(false);
        startQuiz();
    }
});

const giveUpBtn = document.querySelector(".give-up-btn");
if (giveUpBtn) {
    giveUpBtn.addEventListener("click", () => {
        gameOver(false);
    });
}

playAgainBtn.addEventListener("click", startQuiz);

startQuiz();