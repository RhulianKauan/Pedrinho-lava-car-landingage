const btnMobile = document.querySelector('.btn-menu')
      
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


// togge list

const accordion = document.querySelectorAll('.accordion')
const label = document.querySelectorAll('.label')
const iconAccordion = document.querySelectorAll('.accordion span')
accordion.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        label[index].classList.toggle('active')
        if(iconAccordion[index].innerHTML == '+') {
            iconAccordion[index].innerHTML = '-' 
        } else {
            iconAccordion[index].innerHTML = '+' 
        }
    })
})


const btnMonteSeuPacote = document.querySelector('#monte-pacote')

