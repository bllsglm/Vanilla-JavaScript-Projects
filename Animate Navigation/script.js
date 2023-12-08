const lines = document.querySelector(".lines")
const ulTag = document.querySelector("ul")

lines.addEventListener('click', (e)=> {
  ulTag.classList.toggle('close')
  lines.classList.toggle('active')
})