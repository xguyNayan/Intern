const card = document.querySelector('.card');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');
const change_image = document.querySelector('.gif');


const cardrect = card.getBoundingClientRect();
const HI = nobtn.getBoundingClientRect();

yesbtn.addEventListener('click',()=>{
    question.innerHTML = " Thank You Sir, I won't let you down :) ";

})




nobtn.addEventListener('mouseover',()=>{
    const i = Math.floor(Math.random()*  (cardrect.width - HI.width))-1;
    const j = Math.floor(Math.random()*  (cardrect.height - HI.height))-1;

    nobtn.style.left = i + "px";
    nobtn.style.top = j + "px";
})