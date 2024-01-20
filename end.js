const finalScore = document.querySelector('.score'),
    scoreRemains = document.querySelector('.score__remains'),
    button = document.querySelector('.end-btn')


const mostRecentScore = localStorage.getItem('mostRecentScore'),
    MAX_QUESTIONS = localStorage.getItem('MAX_QUESTIONS'),
    questionCounter = localStorage.getItem('questionCounter'),
    finalScoreText = localStorage.getItem('finalScore')


const theFinalText = parseInt(finalScoreText) + 1
scoreRemains.innerText = `Got ${theFinalText} out of ${MAX_QUESTIONS} questions`
finalScore.innerText = parseInt(mostRecentScore) + 10


function handleClick() {
    return window.location.assign('index.html')
}
button.addEventListener('click', handleClick)