
const bigWrapper = document.querySelector('.big-wrapper');
const toggleBtn = document.querySelector('.toggle-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu')
let dark = false;
toggleBtn.addEventListener('click', ()=>{
    dark = !dark
    if(dark){
        bigWrapper.classList.remove("dark");
        bigWrapper.classList.add("light");
    }
    else{
        bigWrapper.classList.remove("light");
        bigWrapper.classList.add("dark");
    }
})

hamburgerMenu.addEventListener('click',()=>{
    bigWrapper.classList.toggle("active");
})

// slider js

const slider = document.querySelector(".slider-input");
const value = document.querySelector(".value");
value.textContent = slider.value
slider.oninput = function(){
    value.textContent = this.value;
}