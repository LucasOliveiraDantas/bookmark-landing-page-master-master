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

const marker1 = document.querySelector('.marker-1')
const tab1 = document.querySelector('.tab-1')

const marker2 = document.querySelector('.marker-2')
const tab2 = document.querySelector('.tab-2')

const marker3 = document.querySelector('.marker-3')
const tab3 = document.querySelector('.tab-3')

marker1.addEventListener('click', function () {
  marker1.classList.add('active')
  marker2.classList.remove('active')
  marker3.classList.remove('active')

  tab1.classList.add('show')
  tab2.classList.remove('show')
  tab3.classList.remove('show')
})
marker2.addEventListener('click', function () {
  marker2.classList.add('active')
  marker1.classList.remove('active')
  marker3.classList.remove('active')

  tab2.classList.add('show')
  tab3.classList.remove('show')
  tab1.classList.remove('show')
})
marker3.addEventListener('click', function () {
  marker3.classList.add('active')
  marker1.classList.remove('active')
  marker2.classList.remove('active')

  tab3.classList.add('show')
  tab2.classList.remove('show')
  tab1.classList.remove('show')
})
