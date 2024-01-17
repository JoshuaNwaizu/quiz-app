const questions = document.getElementById('html-question'),
    choices = Array.from(document.querySelectorAll('.html__choice-text')),
    choicePrefix = document.querySelector('.html__choice-prefix'),
    optionList = document.querySelector('.html__options-list'),
    buttonBackToMenu = document.querySelector('.button'),
    questionHtmlCounter = document.querySelector('.html__question-counter'),
    scoreCounter = document.querySelector('.html__score'),
    progressBarFull = document.querySelector('.html__progress-full')


let currentQuestion = {}
let takingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []
let finalScore = 0

let htmlQuestions = [];
fetch('questions.json')
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions)

        htmlQuestions = loadedQuestions
        startGame()

        
    })
//GAME FUNCTIONS
const CORRECT_BONUS = 10
const MAX_QUESTIONS = Object.keys(htmlQuestions).length
const startGame = () => {
    questionCounter = 0
    score = 0

    availableQuestions = [...htmlQuestions]
    getNewQuestions()
}

const getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('end.html')
    }
    localStorage.setItem('mostRecentScore', score)
    localStorage.setItem('questionCounter', questionCounter)
    localStorage.setItem('MAX_QUESTIONS', MAX_QUESTIONS)
    localStorage.setItem('finalScore', finalScore)

    questionCounter++

    let progressCount = questionCounter - 1

    questionHtmlCounter.innerText = ` ${questionCounter} of ${MAX_QUESTIONS}`

    progressBarFull.style.width = `${(progressCount / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    questions.innerText = currentQuestion.question

    choices.forEach((choice, index) => {
        const optionKey = 'option' + (index + 1);
        choice.innerText = currentQuestion.options[optionKey];
    });
    availableQuestions.splice(questionIndex, 1)
    takingAnswers = true
}

choices.forEach((choice) => {
    choice.addEventListener('click', e => {
        if (!takingAnswers) return

        takingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS)
            incrementFinal(1)

        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestions()

        }, 1000);
    })
})


const incrementScore = num => {
    score += num
    scoreCounter.innerText = `Score: ${score}`

}

const incrementFinal = num => {
    finalScore += num
    console.log(finalScore)

}

buttonBackToMenu.addEventListener('click', handleClickButton)

function handleClickButton() {
    return window.location.assign('index.html')
}

