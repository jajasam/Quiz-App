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
    }
    
]

let index = 0

function displayQuestion() {
    questionElem.textContent = `${quizData[index].question}`;
    labels.forEach((label,i) => label.textContent = `${quizData[index].answers[i]}`)

    if (index < quizData.length - 1) index++;
}

displayQuestion();

btn.addEventListener('click', displayQuestion)