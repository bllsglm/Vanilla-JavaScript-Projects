const cards = document.querySelector('.cards')
const search = document.querySelector('#search')
const form = document.getElementById('form')


const API_URL = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


//Get Inital Movies

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjVlYTMyOTZjOGEyNDM2MzIwZmQyMTg5ZTZiOTYyNSIsInN1YiI6IjY1N2I3M2JmMTc2YTk0MDBjNDQ4ZTkwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y454cPaovP6ee2LNRRwKNwyLutrIookv4BZBE-xc7M4'
  }
};


// SEARCH MOVİE

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const searchTerm = search.value;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
  console.log(SEARCH_URL);
  if(searchTerm && searchTerm !== ''){
    cards.innerHTML='';
    getMovie(SEARCH_URL)
    search.value = '';
  }else{
    window.location.reload()
  }
  
})

// GET MOVİE
getMovie(API_URL)


async function getMovie(url) {
  try {
    const res =  await fetch(url, options);
    const data =  await res.json()

    const movies = data.results;

    
 
    movies.forEach(movie => {

      const img = IMG_PATH + movie.poster_path ;
      const movieName = movie.original_title;
      const overview = movie.overview;
      const rating = movie.vote_average;
      const date = movie.release_date;

      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<img
        src=${img}
        alt="img"
      />
      <p class="overview">${overview}</p>
      <div class="info">
      <p class="name">${date.slice(0,4)}</p>
        <p class="name">${movieName}</p>
        <p class="rating">${rating}</p>
      </div>
    `
    cards.appendChild(card)

    });
    
    // CARD OVERVIEW PART
    const films = document.querySelectorAll('.card')
    const summary = document.querySelectorAll('.overview')
    const ratings = document.querySelectorAll('.rating')

    ratings.forEach((rating,idx)=>{
      
      if(+rating.innerHTML >= 8 ) {
        rating.style.color = 'green'
      }else if (+rating.innerHTML < 8 && +rating.innerHTML >= 6){
        rating.style.color = 'orange'
      }else{
        rating.style.color = 'red'
      }
    })

    films.forEach((film,idx)=>{
      film.addEventListener('mouseenter', ()=>{
        summary[idx].classList.add('show')
      })

      film.addEventListener('mouseleave', ()=>{
        summary[idx].classList.remove('show')
      })
    })

   
  } catch (error) {
    console.log('Error: ', error);
  }
}




