

const optionListItem = Array.from(document.querySelectorAll('.option__list'))

function handleClick() {
    return window.location.assign('./html-quiz.html')
}

optionListItem.forEach(options => (
    options.addEventListener('click', handleClick)
))