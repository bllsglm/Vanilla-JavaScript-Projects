const input = document.querySelector('input')
const labels = document.querySelectorAll('label')
const form = document.querySelector('.form-group')


labels.forEach(label =>{
  label.innerHTML = label.innerText
  .split('')
  .map((letter, idx) => `<span style="transition: transform 0.1s linear ${(idx)*50}ms">${letter}</span>`)
  .join('')
})


