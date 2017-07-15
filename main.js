var numero = document.querySelectorAll('.numbah')
var operate = document.querySelectorAll('.operator')
var viewer = document.querySelector('.view')
var clearout = document.querySelector('.Clear')
// var decimal = document.querySelector('.decimal')
var equals = document.querySelector('.Equals')

let num1 = ''
let num2 = ''
let sign = ''
let valueHolder = ''
let answer = ''

clearout.addEventListener('click', () => {
  valueHolder = ''
  viewer.textContent = valueHolder
})

// decimal.addEventListener('click', () => {
//   let current = decimal.innerText
//   valueHolder += current
//   viewer.textContent = valueHolder
// })

for (let i = 0; i < numero.length; i++) {
  numero[i].addEventListener('click', () => {
    let current = numero[i].innerText
    valueHolder += current
    viewer.textContent = valueHolder
    if (sign) {
      num2 += current
      console.log(num2)
    } else if (current === '+' || current === '-' || current === 'x' || current === '/') {
      sign = current
    } else {
      num1 += current
      console.log(num1)
    }
  })
}

equals.addEventListener('click', () => {
  if (sign === '+') {
    answer = Number(num1) + Number(num2)
    console.log(sign)
  }
  if (sign === '-') {
    answer = Number(num1) - Number(num2)
    console.log(sign)
  }
  if (sign === 'x') {
    answer = Number(num1) * Number(num2)
    console.log(sign)
  }
  if (sign === '/') {
    answer = Number(num1) / Number(num2)
    console.log(sign)
  }
  answer = `${answer}`
  viewer.textContent = answer

  num1 = ''
  num2 = ''
  sign = ''
})
