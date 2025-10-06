let burger = document.querySelector(".fa-bars");
let menu = document.querySelector(".navbar");
burger.onclick = ()=>{
  
    menu.classList.toggle("show");
};
let index = 0;
let ourMenu = document.querySelectorAll(".our-menu div");
let intervalId = null;

function showSlide(i){
  ourMenu[index].classList.remove("active");
  index = (i + ourMenu.length) % ourMenu.length;
  ourMenu[index].classList.add("active");
}

function next(){
    showSlide(index + 1);
}

function prev(){
    clearInterval(intervalId);
    showSlide(index - 1);
}
intervalId= setInterval(next, 4000);