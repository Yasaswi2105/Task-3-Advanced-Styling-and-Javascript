const questions = [
    {
        question: "1. What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        correct: 1
    },
    {
        question: "2. HTML stands for?",
        options: ["HighText Machine Language", "Hyper Text Markup Language", "Hyper Tool Modern Language", "None"],
        correct: 1
    },
    {
        question: "3. CSS is mainly used for?",
        options: ["Styling", "Database", "Backend", "Debugging"],
        correct: 0
    },
    {
        question: "4. JavaScript adds ______ to webpages.",
        options: ["Structure", "Styling", "Interactivity", "Nothing"],
        correct: 2
    }
];

let current = 0;
let score = 0;


function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.question;

    let ansBox = document.getElementById("answers");
    ansBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        ansBox.innerHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
    });
}

function checkAnswer(i) {
    if (i === questions[current].correct) {
        score++;
    }
    document.getElementById("nextButton").style.display = "block";
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        document.getElementById("nextButton").style.display = "none";
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = `
            <h3>Quiz Completed 🎉</h3>
            <p>Your Score: <strong>${score} / ${questions.length}</strong></p>
        `;
    }
}


loadQuestion();


async function getJoke() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
}
