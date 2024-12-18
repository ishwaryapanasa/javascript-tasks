// Quiz Data
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswerIndex: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswerIndex: 1
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswerIndex: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Initialize the quiz
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    question.answers.forEach((answer, index) => {
        document.getElementById(`ans${index + 1}`).textContent = answer;
        document.getElementById(`ans${index + 1}`).classList.remove('correct', 'wrong');
        document.getElementById(`ans${index + 1}`).disabled = false;
    });
    document.getElementById('next-btn').style.display = 'none';
}

// Check the answer
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const selectedButton = document.getElementById(`ans${selectedIndex + 1}`);

    if (selectedIndex === question.correctAnswerIndex) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    // Disable all buttons after the answer is selected
    disableButtons();

    // Show the next button
    document.getElementById('next-btn').style.display = 'inline-block';
}

// Disable all answer buttons
function disableButtons() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Show the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show the results
function showResults() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = score;
    document.getElementById('total-questions').textContent = questions.length;
}

// Start the quiz
loadQuestion();
