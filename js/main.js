const nav = document.querySelector('nav ul')
const barsIcon = document.querySelector('.fa-bars')
const timesIcon = document.querySelector('.fa-times')
const burgerBtn = document.querySelector('.burger')

const handleNav = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barsIcon.classList.toggle('hide')
    timesIcon.classList.toggle('hide')

}




burgerBtn.addEventListener('click', handleNav)
