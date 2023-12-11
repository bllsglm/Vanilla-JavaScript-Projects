const counts = document.querySelectorAll('h2')

counts.forEach(count=> {
  const maxValue = +count.innerText;

  let amount = 0;
  const inc = maxValue / 300

  const increment = setInterval(()=>{
    if(maxValue > amount){
      amount += inc;
    }else{
      clearInterval(increment)
    }
  
    count.innerText = amount;

  }, 1)

  
})