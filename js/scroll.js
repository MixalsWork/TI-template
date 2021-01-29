const anchors = document.querySelectorAll('.scroll-to');
const btnToUp =document.querySelector('.action__button');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function buttonUp(classToHide) {
  if (document.documentElement.scrollTop > 500 && btnToUp.classList.contains(classToHide)) {
      btnToUp.classList.remove(classToHide);
  } else if (document.documentElement.scrollTop < 500 && btnToUp.classList.contains(classToHide) == false) {
      btnToUp.classList.add(classToHide);
  }
}

window.addEventListener('scroll', function() {
  buttonUp('d-none'); 
});