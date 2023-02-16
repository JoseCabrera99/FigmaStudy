var form = document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault() //prevent autosubmit
    var a = document.getElementById('nombre').value;
    console.log("Nombre: " + a);
    document.getElementById('nombre').value = "";
    var b = document.getElementById('apellido').value;
    console.log("Apellido: "+ b);
    document.getElementById('apellido').value = "";
    var c = document.getElementById('edad').value;
    console.log("Edad: "+ c);
    document.getElementById('edad').value = "";
    var d = document.getElementById('celular').value;
    console.log("Celular: "+ d);
    document.getElementById('celular').value = "";
    var e = document.getElementById('email').value;
    console.log("Email: "+ e);
    document.getElementById('email').value = "";
})

const btnAbrir=
document.querySelector("#button");
const btnCerrar=
document.querySelector("#btn-cerrar");
const modal=
document.querySelector("#modal");

btnAbrir.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrar.addEventListener("click",()=>{
    modal.close();
})
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

backabout.addEventListener('click', () =>{
    alert("Hola");
})