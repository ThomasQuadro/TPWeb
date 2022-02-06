function menu (){
    const menu = document.querySelector(".navbar")
    const burger = document.querySelector(".burger")
    burger.addEventListener('click',(e)=>{
        menu.classList.toggle('show-nav');
    })
}
menu();