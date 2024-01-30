

const optionListItem = document.querySelector('.option__list')

function handleClick() {
    return window.location.assign('./html-quiz.html')
}

optionListItem.addEventListener('click', handleClick)

/*=============== SHOW MENU ===============*/
/*
const showMenu = (toggleId) => {

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        toggle.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
       
    })
}
showMenu('toggle-box')
-*/

/*=============== DARK LIGHT THEME ===============*/
const toggle = document.getElementById('toggle-box')
const darkTheme = 'dark-theme'
const iconTheme = 'toggle-icon'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => toggle.classList.contains(iconTheme) ? 'toggle-icon' : ''

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    toggle.classList[selectedIcon === 'toggle-icon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
toggle.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    toggle.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function displayAndHideText() {

    const showText =  document.querySelector('#show-text')

    showText.style.display= 'block'

    setTimeout(() => {
        showText.style.display = 'none'
    }, 5000);
}

window.onload = displayAndHideText