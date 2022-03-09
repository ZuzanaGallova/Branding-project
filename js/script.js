const dots = document.getElementById("dots");
const addMenu = () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle("menu");
}
dots.addEventListener("click", addMenu)