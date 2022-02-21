const btnMobile = document.querySelector('#menu__icon')
      
function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


// togge list

const toggeList = document.querySelectorAll('.contentBx')
toggeList.forEach((item)=> {
    item.addEventListener('click', ()=> {
        item.classList.toggle('active')
    })
})