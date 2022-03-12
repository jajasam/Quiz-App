const quiz = document.querySelector('.quiz-container');
const questionElem = document.getElementById('question');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const btn = document.querySelector('button');

const quizData = [
    {
        question: 'What is the most used social media in 2022?',
        answers: ['Facebook', 'Youtube', 'Snapchat', 'Instagram'],
        correct: 'Youtube'
    },
    {
        question: 'What is the most used programming language in 2022?',
        answers: ['C', 'JavaScript', 'Python', 'Java'],
        correct: 'Python'
    }, 
    {
        question: 'What does HTML stands for?',
        answers: ['Hyper table milk land', 'Hypertext Markup Language', 'Too hot to handle', 'Humbletaxt medium language'],
        correct: 'Hypertext Markup Language'
    },
    {
        question: 'What year was JavaScript launch?',
        answers: [ '1994', '2000', '1995', '1996'],
        correct: '1995'
    },
    {
        question: 'Who is JavaScript designed by?',
        answers: [ 'Chris Beard', 'Reid Hoffman', 'Mitchell Baker', 'Brendan Eich'],
        correct: 'Brendan Eich'
    }
    
]

let index = 0;
let correctAnswers = 0;

displayQuestion();
btn.addEventListener('click', nextQuestion)


function displayQuestion() {
    //reset input
    inputs.forEach(input => input.checked = false)

    //show question + options
    questionElem.textContent = `${quizData[index].question}`;
    inputs.forEach((input, i) => input.id= quizData[index].answers[i]);


    labels.forEach((label,i) => label.textContent = `${quizData[index].answers[i]}`);
    btn.textContent = `${index === quizData.length - 1? 'Submit' : 'Next'}  (${index + 1} / ${quizData.length})`;
}



function nextQuestion() {
    if (index == quizData.length - 1) return showResults();

    if(document.querySelector('input[name="answer"]:checked') == null) return window.alert("You need to choose an option!");
    let inputSelection = '';
    //check which answer has been selected
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked == true) inputSelection = inputs[i];
    }
    
    if (inputSelection.id === quizData[index].correct) correctAnswers++;
    
    index++;

    displayQuestion();
}

function showResults() {
    quiz.innerHTML = `
    <h1>${correctAnswers / 5 * 100} %</h1>
    <h2>You answered correctly at ${correctAnswers} / ${quizData.length} questions</h2>
    <button onclick="location.reload()">Reload</button>`
}