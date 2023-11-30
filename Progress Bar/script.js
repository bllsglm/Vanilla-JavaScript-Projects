const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const circles = document.querySelectorAll('.circle')
const lines = document.querySelectorAll('.line')

nextBtn.addEventListener('click', Next)
prevBtn.addEventListener('click', Prev)

let i = 0 


//NEXT BUTTON
function Next() {
  console.log("circles",i);
  if(i < circles.length){
    circles[i].classList.add('active');

    if(i < lines.length){
      lines[i].classList.add('active')
      i++;
      console.log("lines",i);
    }
  }
}


//PREV BUTTON
function Prev() {
  if(i >= 0 ) {
    console.log(i);
    circles[i].classList.remove('active');

    if(i >= 1 ){
      lines[i-1].classList.remove('active')
      i--;
      console.log(i);
    }
  }else{
    i = 0
  }
}