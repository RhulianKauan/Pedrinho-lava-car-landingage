const btnMobile = document.querySelector('#menu__icon')
      



function toggleMenu() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu);