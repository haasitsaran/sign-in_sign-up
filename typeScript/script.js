const wraper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link-1');
const registerLink = document.querySelector('.register-link-1');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wraper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wraper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wraper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wraper.classList.remove('active-popup');
});