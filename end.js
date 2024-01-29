const finalScore = document.querySelector('.score'),
    scoreRemains = document.querySelector('.score__remains'),
    button = document.querySelector('.end-btn'),
    navBox = document.querySelector('.toggle__box')


const mostRecentScore = localStorage.getItem('mostRecentScore'),
    MAX_QUESTIONS = localStorage.getItem('MAX_QUESTIONS'),
    questionCounter = localStorage.getItem('questionCounter'),
    finalScoreText = localStorage.getItem('finalScore'),
    selectedThemeEnd = localStorage.getItem('selected-theme'),
    selectedIconEnd = localStorage.getItem('selected-icon')



const theFinalText = finalScoreText
scoreRemains.innerText = `Got ${theFinalText} out of ${MAX_QUESTIONS} questions`
finalScore.innerText = mostRecentScore

if (selectedIconEnd) {

    navBox.classList.toggle(selectedIconEnd)
}
if (selectedThemeEnd) {
    document.body.classList.add(selectedThemeEnd)
}

function handleClick() {
    return window.location.assign('index.html')
}
button.addEventListener('click', handleClick)

