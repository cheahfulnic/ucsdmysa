let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const bgs = document.querySelectorAll('.bg');

let index = 0;

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';
  hill1.style.top = value * 1 + 'px';
});

/* =========================
   Events carousel controls
   ========================= */
nextBtn.addEventListener('click', () => {
  index = (index < 6) ? index + 1 : 6;
  listInfo.style.transform = `translateY(${index * -310}px)`;
  listImg.style.transform = `translateY(${index * -310}px)`;
  bgs[index].classList.add('active');
});

prevBtn.addEventListener('click', () => {
  const indexPrev = index; // keep track of what we're leaving
  index = (index > 0) ? index - 1 : 0;

  listInfo.style.transform = `translateY(${index * -310}px)`;
  listImg.style.transform = `translateY(${index * -310}px)`;

  // remove active gradient for the slide we left
  if (bgs[indexPrev]) bgs[indexPrev].classList.remove('active');
});

/* =========================
   WhatsApp popup modal
   ========================= */
const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappModal = document.getElementById('whatsappModal');

if (whatsappBtn && whatsappModal) {
  const modalBackdrop = whatsappModal.querySelector('.modal__backdrop');
  const modalClose = whatsappModal.querySelector('.modal__close');

  function openWhatsAppModal() {
    whatsappModal.classList.add('show');
    whatsappModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('blurred');
  }

  function closeWhatsAppModal() {
    whatsappModal.classList.remove('show');
    whatsappModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('blurred');
  }

  whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openWhatsAppModal();
  });

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeWhatsAppModal);
  if (modalClose) modalClose.addEventListener('click', closeWhatsAppModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && whatsappModal.classList.contains('show')) {
      closeWhatsAppModal();
    }
  });
}
