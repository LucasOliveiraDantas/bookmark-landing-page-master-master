const menu = document.querySelector('.menu')

const buttom = document.querySelectorAll('.toggle')

for (const btn of buttom) {
  btn.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}
