const secondaryBtn = document.getElementById('secondary-btn');
const signIn = document.getElementById('sign-in');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const burgerMenu = document.getElementById('menu');
const burgerIcon = document.getElementById('burger-icon');

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu-active');
})



secondaryBtn.addEventListener('click', () => {
    registerForm.classList.toggle('active');
    loginForm.classList.toggle('active');
})

function start(){
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
}