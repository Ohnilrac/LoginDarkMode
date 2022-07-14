const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('button')
const errorEmail = document.getElementById('user-error')
const errorPassword = document.getElementById('password-error')

button.addEventListener('click', e => {
  e.preventDefault()

  const emailValue = email.value
  const passwordValue = password.value

  if (emailValue === '') {
    errorEmail.classList.add('error')
    errorEmail.textContent = 'Inserir um e-mail valido'
  } else if (passwordValue === '' || emailValue === '') {
    errorPassword.classList.add('error')
    errorPassword.textContent = 'Senha é obrigatória'
  } else {
    errorEmail.classList.remove('error')
    errorPassword.classList.remove('error')
  }

  setTimeout(() => {
    errorEmail.textContent = ''
    errorPassword.textContent = ''
  }, 3000)

  email.value = ''
  password.value = ''
})
