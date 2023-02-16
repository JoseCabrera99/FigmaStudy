const submenu = document.querySelector('.opciones');
const hiddenmain = document.querySelector('.main-container');
const hiddenmenu = document.querySelector('.menu');
const backhome = document.querySelector('.back');

submenu.addEventListener('click', () =>{
    hiddenmain.classList.toggle('hidden');
    hiddenmenu.classList.toggle('hidden');
})

backhome.addEventListener('click', () =>{
    hiddenmenu.classList.toggle('hidden');
    hiddenmain.classList.toggle('hidden');
})
