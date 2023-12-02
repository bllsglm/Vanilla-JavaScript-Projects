const joke = document.querySelector('.joke')
const button = document.querySelector('button')

button.addEventListener('click', fetchData)

fetchData()


async function fetchData() {

  const config = {
    headers :{
      'Accept' : 'application/json'
    }
  }

 
  const response  =  await fetch("https://icanhazdadjoke.com" , config)
  const jokes = await response.json() 
  joke.innerText = jokes.joke

}