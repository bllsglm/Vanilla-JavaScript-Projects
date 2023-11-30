const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const circles = document.querySelectorAll('.circle')
const lines = document.querySelectorAll('.line')

nextBtn.addEventListener('click', Next)
prevBtn.addEventListener('click', Prev)

let i = 0 

if(i === 0 ) {
  prevBtn.setAttribute('disabled', '')
}

//NEXT BUTTON
function Next() {
  prevBtn.removeAttribute('disabled')
  if(i < circles.length){

    if(i === 0 ){
      circles[i].classList.add('active');
      i++;
    }else{
      lines[i - 1].classList.add('active')
      circles[i].classList.add('active');
      i++;

      if(i === circles.length ){
        nextBtn.setAttribute('disabled', '')
     }
    }
  }
}


//PREV BUTTON
function Prev() {
    nextBtn.removeAttribute('disabled')
    if(i > 1){
      circles[i-1].classList.remove('active');
      lines[i-2].classList.remove('active')
      i--;
    }else{
      circles[i-1].classList.remove('active');
      i--;
      if(i === 0 ){
        prevBtn.setAttribute('disabled', '')
      }
    }
}


