function onClick(element) {
    document.getElementById("image-zoomer").src = element.src;
    document.getElementById("image").style.display = "flex";
}

const burger = document.querySelector('.burger')
const body = document.querySelector('body');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    body.classList.toggle('open')
})