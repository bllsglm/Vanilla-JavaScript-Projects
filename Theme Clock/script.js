const body = document.querySelector('body')
const digital =  document.querySelector('.digital');
const dates =  document.querySelector('.date');
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour')
const date = new Date().toDateString();
const button = document.querySelector('button')

document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener('click', changeBackground)
    body.style.backgroundColor ='white';
    minute.style.borderColor = 'black' ;
    digital.style.color = 'black';
    dates.style.color = 'black';
  function changeBackground() {
    body.style.backgroundColor = body.style.backgroundColor === 'white' ?  'black' : 'white' ;
    button.innerText = button.innerText === 'Dark Mode'? 'Light Mode' : 'Dark Mode';
    minute.style.borderColor = minute.style.borderColor === 'black' ? '#fff' : 'black';
    digital.style.color = digital.style.color === 'black' ? 'white' : 'black';
    dates.style.color = dates.style.color === 'black' ? 'white' : 'black';
  }

  setInterval(()=>{
    // MINUTE
    let mintime = new Date().toLocaleTimeString().slice(2,4);
    let min = parseInt(mintime);
    minute.style.rotate= `${360*(min/60)}deg`;
    // HOUR
    let hourtime = new Date().toLocaleTimeString().slice(0,1);
    let hourClock = parseInt(hourtime);

    if(hourClock > 10 ){
      hourtime = new Date().toLocaleTimeString().slice(0,2);
      hourClock = parseInt(hourtime);
    }
    hour.style.rotate = `${hourClock*30 + 30*(min/60)}deg`;
    // SECOND
    let sectime = new Date().toLocaleTimeString().slice(5,7);
    let sec = parseInt(sectime);
    const time = new Date().toLocaleTimeString();
    second.style.rotate= `${sec*6}deg`;

    // DIGITAL CLOCK
    digital.innerHTML = `${time.slice(0,4)} ${time.slice(-2)}`;
    // DATE
    dates.innerHTML = `${date.slice(0,10)}`;

  },1000)

})


