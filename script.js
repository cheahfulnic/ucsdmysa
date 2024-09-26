let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})

nextBtn.addEventListener('click', () => {
    index = (index < 3) ? index + 1 : 3;
    listInfo.style.transform = `translateY(${index * -300}px)`;
    listImg.style.transform = `translateY(${index * -100}%)`;
})

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 0;
    listInfo.style.transform = `translateY(${index * -300}px)`;
    listImg.style.transform = `translateY(${index * -100}%)`;
})