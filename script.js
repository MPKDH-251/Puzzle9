// script.js
const correctAnswer = "Wrong"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Congratulations! You solved the riddle. Please go towards the robo and find your next clue!! ");
    } else {
        alert("Oops! Try again.");
    }
}
