const dots = document.querySelector(".fa-ellipsis-vertical");
const addMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle("menu");
}
dots.addEventListener("click", addMenu);

/*let popup = document.getElementById("about");
let closeIt = document.getElementById("x"); 
const photo = document.querySelector('.photo'); 
let clicked = false*/

/*popup.addEventListener("click", function(){ 
    console.log(this)
    photo.classList.toggle('toggleShow'); 
    if (this.id){
        closeIt.addEventListener("click", function(){
            console.log("his")
            photo.classList.remove('toggleShow');
        })
    }
})*/
/*const pop = () =>{
    if(clicked){
        photo.classList.toggle('toggleShow');
}
    else{
        photo.classList.remove('toggleShow');
    }
}
const changeBoolean = () => { 
    if (clicked){
        clicked = false;
    }else {
        clicked = true;
    }
    pop()
    } 

popup.addEventListener("click", changeBoolean);
closeIt.addEventListener("click", function(){
    photo.classList.remove('toggleShow');
})*/