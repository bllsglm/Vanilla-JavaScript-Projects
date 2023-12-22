const buttons = document.querySelectorAll('.ripple')


buttons.forEach(button => {
  button.addEventListener('click', (e)=> {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft
  
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    
    const circle = document.createElement('span');
    circle.innerHTML = `<span class="circle" style="left: ${xInside}px; top: ${yInside}px"></span>`
    button.appendChild(circle)

    setTimeout(()=> circle.remove(), 500) //remove circles from the dom

  })
});