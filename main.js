const menu = document.querySelector('.menu')

const buttom = document.querySelectorAll('.toggle')

for (const btn of buttom) {
  btn.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}

const menuLinks = document.querySelectorAll('.menu-links .links')

for (const menuL of menuLinks) {
  menuL.addEventListener('click', function () {
    menu.classList.remove('show')
  })
}
