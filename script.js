let imageContainer = document.querySelector('.img-container')
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let img = document.querySelector('body');
let classes = document.querySelector('.classes');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let video = document.querySelector('.video');
let reason = document.querySelector('.h3');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.FIVE');
let hand = document.querySelector('.hand');
let title1 = document.querySelector('.title1');
let title2 = document.querySelector('.title2');
let title3 = document.querySelector('.title3');

let x = 0;

prev.addEventListener('click', () => {
   x+=120;
   rotate();
})
next.addEventListener('click', () => {
   x-=120;
   rotate();
})


function rotate(){
   imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}

// img.addEventListener('mousemove',push);

function push(e){
   classes.style.color = 'rgb('+e.offsetX+', '+e.offsetY+',100)';
   about.style.color = 'rgb('+e.offsetX+', 110, '+e.offsetY+')';
   contact.style.color = 'rgb(120,'+e.offsetX+', '+e.offsetY+')';
   video.style.color = 'rgb(120,'+e.offsetX+', '+e.offsetY+')';
   reason.style.color = 'rgb('+e.offsetX+', '+e.offsetY+',130)';
   two.style.color = 'rgb('+e.offsetX+', 140, '+e.offsetY+')';
   three.style.color = 'rgb(150,'+e.offsetX+', '+e.offsetY+')';
   four.style.color = 'rgb('+e.offsetX+', '+e.offsetY+',160)';
   one.style.color = 'rgb('+e.offsetX+',170, '+e.offsetY+')';
   five.style.color = 'rgb(180,'+e.offsetX+','+e.offsetY+')';
   hand.style.color = 'rgb(180,'+e.offsetX+','+e.offsetY+')';
   title1.style.color = 'rgb(180,'+e.offsetX+','+e.offsetY+')';
   title2.style.color = 'rgb(180,'+e.offsetX+','+e.offsetY+')';
   title3.style.color = 'rgb(180,'+e.offsetX+','+e.offsetY+')';
}



function toggleMenu() {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".hamburger-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
 }


