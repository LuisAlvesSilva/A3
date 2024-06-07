// script.js
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");
    const result = document.getElementById("result");
    const congratsImage = document.getElementById("congrats-image");
    let currentQuestionIndex = 0;

    function showNextQuestion() {
        questions[currentQuestionIndex].classList.remove("active");
        congratsImage.style.display = "none";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].classList.add("active");
        } else {
            result.textContent = "Você completou o jogo!";
        }
    }

    questions[currentQuestionIndex].classList.add("active");

    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            if (option.getAttribute("data-answer") === "correct") {
                result.textContent = "Correto! Boa escolha.";
                result.style.color = "green";
                congratsImage.style.display = "block";

                setTimeout(() => {
                    result.textContent = "";
                    showNextQuestion();
                }, 2000); // Mostra a imagem de parabéns por 2 segundos
            } else {
                result.textContent = "Errado! Tente novamente.";
                result.style.color = "red";

                setTimeout(() => {
                    result.textContent = "";
                }, 2000); // Mantém a mensagem de erro por 2 segundos
            }
        });
    });
});
