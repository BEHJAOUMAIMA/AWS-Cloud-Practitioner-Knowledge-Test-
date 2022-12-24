const quiz = document.getElementById('quiz-app');
const answers = document.querySelector('.answers');
const question = document.getElementById('question');
const answer1 = document.getElementById('answer_1');
const answer2 = document.getElementById('answer_2');
const answer3 = document.getElementById('answer_3');
const answer4 = document.getElementById('answer_4');
const submitBtn = document.getElementById('btnNext');


let currentQuiz = 0;
let score = 0;

getQuiz();

function getQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    answer1.innerText = currentQuizData.answer_1;
    answer2.innerText = currentQuizData.answer_2;
    answer3.innerText = currentQuizData.answer_3;
    answer4.innerText = currentQuizData.answer_4;
}

function deselectAnswers() {
    answers.forEach(answers => answers.checked = false);
}

function getSelected() {

    let answers;
    answers.forEach(answer => {
        if (answer.checked) {

        }
    });

}