const questions = document.getElementById('html-question')
const choices = Array.from(document.querySelectorAll('.html__choice-text')),
    choicePrefix = document.querySelector('.html__choice-prefix')


let currentQuestion = {}
let takingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

const htmlQuestions = [
    {
        question: "What does HTML stand for?",
        options: {
            A: "Hyper Text Markup Language",
            B: "High-Level Text Management Language",
            C: "Hyper Transfer Text Language",
            D: "Hyperlink and Text Management Language",
        },
        answer: "A"
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        options: {
            A: "<ul>",
            B: "<ol>",
            C: "<li>",
            D: "<ul></ul>",
        },

        answer: "A"
    },
    {
        question: "What is the purpose of the HTML <head> tag?",
        options: {
            A: "It defines the main content of the document.",
            B: "It contains metadata about the document.",
            C: "It defines a header for the document.",
            D: "It represents a paragraph in HTML.",
        },
        answer: "B"
    },
    {
        question: "Which attribute is used to provide additional information about an HTML element?",
        options: {
            A: "class",
            B: "style",
            C: "id",
            D: "title",
        },
        answer: "D"
    },
    {
        question: "In HTML, what does the acronym 'URL' stand for?",
        options: {
            A: "Uniform Resource Locator",
            B: "Universal Reference Language",
            C: "Unified Resource Link",
            D: "User Reference Locator",
        },
        answer: "A"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: {
            A: "<a>",
            B: "<link>",
            C: "<hyperlink>",
            D: "<url>",
        },
        answer: "A"
    },
    {
        question: "What is the purpose of the HTML <footer> tag?",
        options: {
            A: "It defines a section in the document.",
            B: "It represents the main content of the document.",
            C: "It contains metadata about the document.",
            D: "It defines a footer for the document.",
        },
        answer: "D"
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
    questionCounter++
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]
    questions.innerText = currentQuestion.question

    choices.forEach(choice => {
        for (const quizQuetions of htmlQuestions) {
            for (const [optionKey, optionValue] of Object.entries(quizQuetions.options)) {
                choicePrefix.innerText = optionKey
                choice.innerText = optionValue



            }
        }
    })
}

startGame()
