const dots = document.querySelector(".fa-ellipsis-vertical");
const addMenu = () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle("menu");
}
dots.addEventListener("click", addMenu);

let popup = document.getElementById("about"); //find the button
let closeIt = document.querySelector("main"); //find the x
const photo = document.querySelector('.photo'); //find the video

popup.addEventListener("click", function(){ //does anzbodz press it
    photo.classList.toggle('toggleShow'); //add the class "toggleshow" to the video element
})
closeIt.addEventListener("click", function(){//does anzbodz press the x button
    photo.classList.remove('toggleShow');//remove the class
})