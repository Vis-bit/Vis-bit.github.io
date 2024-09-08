const container = document.querySelector('.container'),
altSignUpButton = document.querySelector('.alt-sign-up-button'),
altLoginButton = document.querySelector('.alt-login-button'),
title = document.querySelector('.container > h3'),
loginFormSubmitBtn = document.querySelector('.contents .ghost-button');

function login() {
    container.classList.remove('sign-up');
    container.classList.add('login');
    title.innerText = 'Selamat datang kembali!';
}

function signUp() {
    container.classList.remove('login');
    container.classList.add('sign-up');
    title.innerText = 'Selamat datang!';
}

altLoginButton.addEventListener('click', () => {
    login();
})

altSignUpButton.addEventListener('click', () => {
    signUp()
})

if (localStorage.getItem('login/signUp') == 'login') {
    login();
} else if (localStorage.getItem('login/signUp') == 'signUp') {
    signUp();
}

loginFormSubmitBtn.addEventListener('click', () => {
    localStorage.setItem('loggedIn', true);
})