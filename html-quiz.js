const questions = document.getElementById('html-question')
const choices = Array.from(document.querySelectorAll('.html__choice-text')),
    choicePrefix = document.querySelector('.html__choice-prefix'),
    optionList = document.querySelector('.html__options-list')


let currentQuestion = {}
let takingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []

const htmlQuestions = [

    {
        question: "What does HTML stand for?",
        options: {
            option1: "Hyper Text Markup Language",
            option2: "High-Level Text Management Language",
            option3: "Hyper Transfer Text Language",
            option4: "Hyperlink and Text Management Language",
        },
        answer: "1"
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        options: {
            option1: "<ul>",
            option2: "<ol>",
            option3: "<li>",
            option4: "<ul></ul>",
        },
        answer: "1"
    },
    {
        question: "What is the purpose of the HTML <head> tag?",
        options: {
            option1: "It defines the main content of the document.",
            option2: "It contains metadata about the document.",
            option3: "It defines a header for the document.",
            option4: "It represents a paragraph in HTML.",
        },
        answer: "2"
    },
    {
        question: "Which attribute is used to provide additional information about an HTML element?",
        options: {
            option1: "class",
            option2: "style",
            option3: "id",
            option4: "title",
        },
        answer: "4"
    },
    {
        question: "In HTML, what does the acronym 'URL' stand for?",
        options: {
            option1: "Uniform Resource Locator",
            option2: "Universal Reference Language",
            option3: "Unified Resource Link",
            option4: "User Reference Locator",
        },
        answer: "1"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: {
            option1: "<a>",
            option2: "<link>",
            option3: "<hyperlink>",
            option4: "<url>",
        },
        answer: "1"
    },
    {
        question: "What is the purpose of the HTML <footer> tag?",
        options: {
            option1: "It defines a section in the document.",
            option2: "It represents the main content of the document.",
            option3: "It contains metadata about the document.",
            option4: "It defines a footer for the document.",
        },
        answer: "4"
    }
];

//GAME FUNCTIONS

const CORRECT_BONUS = 10
const MAX_QUESTIONS = 7
const startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...htmlQuestions]
    getNewQuestions()
}
console.log(availableQuestions)

const getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      return window.location.assign('./end.html')
    }

    questionCounter++
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    questions.innerText = currentQuestion.question

    choices.forEach((choice, index) => {
        const optionKey = 'option' + (index + 1);
        choice.innerText = currentQuestion.options[optionKey];
        console.log(choice.innerText)
    });
    availableQuestions.splice(questionIndex, 1)
    takingAnswers = true
}

choices.forEach((choice, index) => {
    choice.addEventListener('click', e => {
        if (!takingAnswers) return

        takingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = index + 1
        console.log(selectedAnswer)
        getNewQuestions()
    })
})


startGame()
