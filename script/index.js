const phone = window.matchMedia('screen and (max-width: 425px)');
phone.addEventListener('change', validation);
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

function validation(event) {
    if (event.matches) {
        burgerButton.addEventListener('click', hideShow);
    } else {
        burgerButton.removeEventListener('click', hideShow);
    }
}
validation(phone);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}

function alertWork() {
    swal({
        title: "Hola! | Hello!",
        text: "📌 Por el momento no he trabajado para nadie, pero me gustaría formar parte de un equipo de desarrollo, puedes contactarme y platicar al respecto 👾.\n\n" +
            "📌 Me puedes contactar por medio del formulario en el área de contacto en la página principal o por mis redes sociales 👾.\n\n" +
            "📌 At the moment I have not worked for anyone but I would like to be part of a development team, you can contact me and talk about it 👾.\n\n" +
            "📌 You can contact me through the form in the contact area on the main page or through my social networks 👾.",
        icon: "info",
        button: "Salir | Exit",
    });
}