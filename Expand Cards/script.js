const imgs = document.querySelectorAll('.panel')


imgs.forEach(img => {
  img.addEventListener('click', Expand)
  function Expand() {
    removeActives()
    img.classList.add('active')
    }
})


function removeActives() {
  imgs.forEach(img => {
      img.classList.remove('active')
})
}