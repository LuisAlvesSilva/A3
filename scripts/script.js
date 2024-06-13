document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const gameContainer = document.getElementById("game-container");

    startButton.addEventListener("click", () => {
        startScreen.style.display = "none";
        gameContainer.style.display = "block";
    });

    const questions = document.querySelectorAll(".question");
    const result = document.getElementById("result");
    const congratsImage = document.getElementById("congrats-image");
    const overlay = document.querySelector(".overlay");
    let currentQuestionIndex = 0;

    function showNextQuestion() {
        questions[currentQuestionIndex].classList.remove("active");
        congratsImage.style.display = "none";
        overlay.style.display = "none";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.add("active");
        } else {
            result.textContent = "Você completou o jogo!";
            result.style.color = "blue";
        }
    }

    questions[currentQuestionIndex].classList.add("active");

    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            if (option.getAttribute("data-answer") === "correct") {
                result.textContent = "Correto! Boa escolha.";
                result.style.color = "green";
                option.style.borderColor = "green";

                overlay.style.display = "block";
                congratsImage.style.display = "block";
                setTimeout(() => {
                    result.textContent = "";
                    option.style.borderColor = "";
                    showNextQuestion();
                }, 2000);
            } else {
                result.textContent = "Errado! Tente novamente.";
                result.style.color = "red";
                option.style.borderColor = "red";

                setTimeout(() => {
                    result.textContent = "";
                    option.style.borderColor = "";
                }, 2000);
            }
        });
    });
});
