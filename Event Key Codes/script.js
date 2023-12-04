window.addEventListener('keydown', Event)

const keys = document.querySelectorAll('.key')

function Event(e) {
  keys.forEach((key, idx) => {
    if(idx === 0 ){
      key.firstElementChild.innerText = e.key
      if(e.key === " "){
        key.firstElementChild.innerText = "space"
      }
    }else if (idx === 1){
      key.firstElementChild.innerText = e.keyCode
    }else{
      key.firstElementChild.innerText = e.code
    }

  });
}
