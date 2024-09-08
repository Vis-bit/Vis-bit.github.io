const mainNavUl = document.querySelector('.main-nav ul'),
menuButton = document.querySelector('.main-nav .menu-button'),
closeButton = document.querySelector('.main-nav .close-icon'),
darkenBG = document.querySelector('#darken-bg'),
loginSignUpContainer = document.querySelector('nav.main-nav li:has(.link)'),
loginButton = document.querySelector('.login-button'),
signUpButton = document.querySelector('.sign-up-button');

menuButton.addEventListener('click', () => {
    mainNavUl.classList.add('open');
    darkenBG.classList.add('open');
})

closeButton.addEventListener('click', e => {
    mainNavUl.classList.remove('open');
    darkenBG.classList.remove('open');
})

loginButton.addEventListener('click', () => {
    localStorage.setItem('login/signUp', 'login')
})

signUpButton.addEventListener('click', () => {
    localStorage.setItem('login/signUp', 'signUp')
})

if (localStorage.getItem('loggedIn') == 'true') {
    loginSignUpContainer.style.display = 'none';
}

