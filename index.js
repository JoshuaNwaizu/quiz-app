

const optionListItem = document.querySelector('.option__list')

function handleClick() {
    return window.location.assign('./html-quiz.html')
}

optionListItem.addEventListener('click', handleClick)

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId) => {
    const toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        toggle.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
       
    })
}
showMenu('toggle-box')

