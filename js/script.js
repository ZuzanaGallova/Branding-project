const dots = document.querySelector(".fa-ellipsis-vertical");
const addMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle("menu");
}
dots.addEventListener("click", addMenu);

let popup = document.getElementById("about");
let closeIt = document.querySelector("main"); 
const photo = document.querySelector('.photo'); 

popup.addEventListener("click", function(){ 
    photo.classList.toggle('toggleShow'); 
})
closeIt.addEventListener("click", function(){
    photo.classList.remove('toggleShow');
})