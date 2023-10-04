const menu = document.querySelector('.menu')
const buttons = document.querySelector('#buttons')

menu.addEventListener('click',()=>{
  if(!menu.classList.contains('opened')){
    menu.classList.toggle('opened');
    menu.setAttribute('aria-expanded', 
    menu.classList.contains('opened'))
  }

  setTimeout(() => {
      menu.style.visibility = 'hidden'
      buttons.style.display = 'block'
    }, 500);
})

buttons.addEventListener('click',(e)=>{
      menu.style.visibility = 'visible'
      buttons.style.display = 'none'
      menu.classList.toggle('opened');
})
