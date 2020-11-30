const API_KEY = "EISIkxkEVY1mVfueskyLqgYWxkx6TcHq";
const BASE_URL = "https://api.giphy.com/v1/gifs/search";
let form=document.getElementById("form");
let input=document.getElementById("input-text");
let result=document.getElementById("result");
form.addEventListener("submit",getGiphy);

function getGiphy(e) {
    e.preventDefault();
    const url = `${BASE_URL}?api_key=${API_KEY}&q=${input.value}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
displayGif(data.data[0].images.original.url);
      })
}

  function displayGif(u){
   let image=document.querySelector('img');
   image.src=u;
   }

