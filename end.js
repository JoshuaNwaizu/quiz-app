const finalScore = document.querySelector('.score'),
scoreRemains = document.querySelector('.score__remains')


const mostRecentScore = localStorage.getItem('mostRecentScore')
const MAX_QUESTIONS = localStorage.getItem('MAX_QUESTIONS')
const questionCounter = localStorage.getItem('questionCounter')

scoreRemains.innerText = `out of ${MAX_QUESTIONS}`
finalScore.innerText = questionCounter