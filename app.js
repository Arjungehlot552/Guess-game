document.addEventListener("DOMContentLoaded", function() {
    const rangeInput = document.getElementById("range");
    const startButton = document.getElementById("start");
    const gameDiv = document.getElementById("game");
    const guessInput = document.getElementById("guess");
    const submitButton = document.getElementById("submit");
    const hintParagraph = document.getElementById("hint");

    let random;

    startButton.addEventListener("click", function() {
        const range = parseInt(rangeInput.value);
        if (isNaN(range) || range <= 0) {
            alert("Please enter a valid range!");
            return;
        }
        random = Math.floor(Math.random() * range) + 1;
        gameDiv.classList.remove("hidden");
        rangeInput.disabled = true;
        startButton.disabled = true;
    });

    submitButton.addEventListener("click", function() {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess)) {
            alert("Please enter a valid number!");
            return;
        }
        if (guess == random) {
            hintParagraph.textContent = `Congratulations! You guessed the number ${random} correctly!`;
            hintParagraph.style.color = "green";
            guessInput.disabled = true;
            submitButton.disabled = true;
        } else if (guess < random) {
            hintParagraph.textContent = "Hint: Your guess is too small. Try again!";
            hintParagraph.style.color = "red";
        } else {
            hintParagraph.textContent = "Hint: Your guess is too large. Try again!";
            hintParagraph.style.color = "red";
        }
    });
});
