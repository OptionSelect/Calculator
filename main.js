var numero = document.querySelectorAll('.numbah')
var operate = document.querySelectorAll('.operator')
var viewer = document.querySelector('.view')
var clearout = document.querySelector('.Clear')
var decimal = document.querySelector('.Decimal')
var equals = document.querySelector('.Equals')

let valueHolder = ''

for (let i = 0; i < numero.length; i++) {
  let current = numero[i]
  current.addEventListener('click', () => {
    let value = current.innerText
    valueHolder += value
    viewer.textContent = valueHolder
  })
}

for (let i = 0; i < operate.length; i++) {
  let current = operate[i]
  current.addEventListener('click', () => {
    let value = current.innerText
    if (value === 'x') {
      valueHolder += '*'
    } else {
      valueHolder += value
    }
    viewer.textContent = valueHolder
  })
}

clearout.addEventListener('click', () => {
  valueHolder = ''
  viewer.textContent = valueHolder
})

decimal.addEventListener('click', () => {
  valueHolder += decimal.innerText
  viewer.textContent = valueHolder
})

equals.addEventListener('click', () => {
  let calced = eval(valueHolder).toString()
  viewer.textContent = calced
})
