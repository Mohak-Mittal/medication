// Function to calculate the score and display the result
function calculateScore() {
    // Array to store correct answers for each question
    var correctAnswers = ['C', 'D', 'C', 'D', 'C', 'D', 'A', 'A', 'A', 'B'];
    
    // Variable to store the user's score
    var score = 0;

    // Loop through each question
    for (var i = 0; i < 10; i++) {
        // Get the selected answer for the current question
        var selectedAnswer = document.querySelector('input[name="question' + (i + 1) + '"]:checked');

        // If an answer is selected
        if (selectedAnswer) {
            // Check if the selected answer is correct
            if (selectedAnswer.value === correctAnswers[i]) {
                // Increment the score and add 'correct' class to the question
                score++;
                selectedAnswer.parentNode.classList.add('correct');
            } else {
                // Add 'incorrect' class to the question
                selectedAnswer.parentNode.classList.add('incorrect');
            }
        }
    }

    // Display the result
    document.getElementById('result').innerText = 'Your score: ' + score + '/10';
}
