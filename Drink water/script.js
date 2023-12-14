const bigBottle = document.querySelector('.big-bottle')
const miniBottle = document.querySelectorAll('.mini-bottle')
const remained = document.querySelector('.remained')
const filled = document.querySelector('.filled')


filled.style.display = 'none';


miniBottle.forEach((bottle, idx)=>{

  bottle.addEventListener('click', Fill)

  function Fill() {

    // Make every bottle empty
    miniBottle.forEach((b,i) =>{
      miniBottle[i].style.backgroundColor = '#54B4D3';
    })

    filled.style.display = 'block' ;
    const filledAmount = (12.5)*`${idx + 1}`;
    filled.innerHTML = `<div>${filledAmount}%</div>`;
    remained.innerHTML = `<h3>${2 - ((filledAmount/100)*2)}L<small>Remained</small></h3>`


    remained.style.height = `${100-filledAmount}%`
    filled.style.height = `${filledAmount}%`
    
    for(let i = 0; i <= idx; i++){
      miniBottle[i].style.backgroundColor = '#3B71CA';
    }
  }
})