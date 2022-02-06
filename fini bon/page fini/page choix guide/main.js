const burger = document.querySelector('.burger')
const body = document.querySelector('body');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    body.classList.toggle('open')
})

function navToAliment() {
    window.location.href = "https://www.google.com";
}

function navToEffet() {
    window.location.href = "https://www.google.com";
}

function navToDictionnaire() {
    window.location.href = "https://www.google.com";
}

function navToStuff() {
    window.location.href = "https://www.google.com";
}