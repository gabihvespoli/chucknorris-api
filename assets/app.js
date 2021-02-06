const URL_FETCH_CATEGORIES = 'https://api.chucknorris.io/jokes/categories';

const BASE_URL = 'https://api.chucknorris.io/jokes/'
const METHOD = 'GET'
const CONTENT_TYPE = 'application/json'
const MODE = 'cors'

let formSearch = document.querySelector('form')
let formInput = document.querySelector('input')
let render = document.getElementById('joke')

formSearch.addEventListener('submit', function(e){
  e.preventDefault();
  const resultSearch = getSearch(formInput.value).then((res) => {
      return res.result
    }
  ).then(data => {
    data.forEach(element => {
      render.innerHTML = `" ${element.value}. "`
    })
  })
})

async function getSearch(query){
  try{
    const response = await fetch(`${BASE_URL}search?query=${query}`, {
      method: METHOD,
      mode: MODE,
      headers: {
        'Content-Type': CONTENT_TYPE
      }
    })
    return await response.json()
  } catch (error){
    console.log(error);
  }
}

async function getJoke(category){
  const joke = await getRandomJokeFromCategory(category)

  let imgNode = document.getElementById('avatar')
  let jokeParagraph = document.getElementById('joke')

  imgNode.src = joke.icon_url
  jokeParagraph.innerHTML = joke.value
}

async function getRandomJoke() {
  try {
    const response = await fetch(`${BASE_URL}random`, {
      method: METHOD,
      mode: MODE,
      headers: {
        'Content-Type': CONTENT_TYPE
      }
    })
    return await response.json()
  } catch (error){
    console.log(error)
  }
}

async function getRandomJokeFromCategory(category){
  try{
    const response = await fetch(`${BASE_URL}random?category=${category}`, {
      method: METHOD,
      mode: MODE,
      headers: {
        'Content-Type': CONTENT_TYPE
      }
    })
    return await response.json()
  } catch (error){
    console.log(error)
  }
}