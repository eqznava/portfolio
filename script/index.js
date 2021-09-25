const phone = window.matchMedia('screen and (max-width: 425px)');
phone.addEventListener('change',validation);
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

function validation(event){
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow);
    }else {
        burgerButton.removeEventListener('click', hideShow);
    }
}
validation(phone);

function hideShow(){
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    }
    else {
        menu.classList.add('is-active');
    }
}