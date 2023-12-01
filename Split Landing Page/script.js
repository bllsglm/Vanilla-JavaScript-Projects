const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


left.addEventListener('mouseenter', Left)
left.addEventListener('mouseleave', leftLeave)
right.addEventListener('mouseenter', Right)
right.addEventListener('mouseleave', rightLeave)


function Left() {
  container.classList.add('hover-left')
}
function leftLeave() {
  container.classList.remove('hover-left')
}


function Right() {
  container.classList.add('hover-right')
}

function rightLeave() {
  container.classList.remove('hover-right')
}

