const form = document.getElementById('link-form')
const warning = document.getElementById('warning')
const input = document.getElementById('link-input')

form.addEventListener('submit', e => {
  e.preventDefault()
  
  if(input.value === '') {
    console.log('Plz enter a valid email.', input.value)
    warning.innerHTML = 'Plz enter a valid email.'
    input.style.borderColor = 'red'
  } else {
    warning.innerHTML = ''
    input.style.border = 'none'
  }
})

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

})