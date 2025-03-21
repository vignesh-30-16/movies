
// header('Content-Type: application/json');
// header('Access-Control-Allow-Origin: *'); // Allow all origins, adjust as needed
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Allow necessary methods
// header('Access-Control-Allow-Headers: Content-Type, Authorization');
let bbody = document.getElementById("container");

let para = document.getElementById("name");

let users = localStorage.getItem('userName');
para.innerHTML = `Hii Welcome ${users}`;

console.log(bbody);

function getajax() {
  let getajax = new XMLHttpRequest();
  getajax.open("GET", "https://mimic-server-api.vercel.app/movies");

  getajax.onload = function () {
    let data = JSON.parse(getajax.response);

    data.forEach((lists) => {
      let div = document.createElement("div");
      let title = document.createElement("p");
      let releasedate = document.createElement("p");
      let adult = document.createElement("p");
      let genres = document.createElement("p");
      let language = document.createElement("p");
      let rating = document.createElement("p");

      let img = document.createElement("img");

      img.src = lists.poster_path;
      title.innerHTML = `Title: ${lists.title}`;
      releasedate.innerHTML = `Release Date: ${lists.release_date}`;

      adult.innerHTML = `Adult: ${lists.adult ? "Yes" : "No"}`;
      let genresname = {
        28: "Action",
        12: "Adventure",
        35: "Comedy",
        80: "Crime",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western",
      };

      lists.genre_ids = lists.genre_ids.map((id) => genresname[id] || "Unknown");
      genres.innerHTML = `Genres: ${lists.genre_ids}`;

      language.innerHTML = `Language: ${lists.original_language}`;
      if ("ta" == lists.original_language) {
        language.innerHTML = `Language: Tamil`;
      }

      rating.innerHTML = `Rating: <i class="fa-solid fa-star"></i> ${lists.vote_average}/10`;

      div.classList.add("movie-mname");
      img.classList.add("movie-img");
      title.classList.add("movie-title");
      releasedate.classList.add("movie-release");
      adult.classList.add("movie-adult");
      genres.classList.add("movie-genres");
      language.classList.add("movie-language");
      rating.classList.add("movie-rating");

      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(releasedate);
      div.appendChild(adult);
      div.appendChild(genres);

      div.appendChild(language);

      div.appendChild(rating);

      bbody.appendChild(div);
    });
  };

  getajax.send();
}
getajax();
function searchmovie() {

  let search = document.getElementById("search");
  let searchbtn=document.getElementById("search-btn")
  search.addEventListener("click", (e) => {
    e.preventDefault()
    let searchvalue = search.value.toLowerCase();
    let movietitle = document.getElementsByClassName("movie-title");

    for (let i = 0; i < movietitle.length; i++) {

      
      let titlt1 = movietitle[i].innerText.toLowerCase();
      if (titlt1.includes(searchvalue)) {
        movietitle[i].parentElement.style.display = "block";
      } else {
        movietitle[i].parentElement.style.display = "none"; 
      }
    }
  });
  searchbtn.addEventListener("click", (e) => {
    e.preventDefault()
    let searchvalue = search.value.toLowerCase();
    let movietitle = document.getElementsByClassName("movie-title");

    for (let i = 0; i < movietitle.length; i++) {

      let titlt1 = movietitle[i].innerText.toLowerCase();
      if (titlt1.includes(searchvalue)) {
        movietitle[i].parentElement.style.display = "block";
      } else {
        movietitle[i].parentElement.style.display = "none"; 
      }
    }
    
  });
}

searchmovie();



let addmovie = document.getElementById("add-movie");
addmovie.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.getElementById("movie-form-container");
  form.style.display = "block";
});
let closebtn=document.getElementById("close")

closebtn.addEventListener("click",(e)=>{
  e.preventDefault()
  let form = document.getElementById("movie-form-container");
  form.style.display="none"
  form.style.animation = "fadeOut 1.4s out-in-ease";
})
let submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let pform = document.getElementById("movie-form");
  let titleinput = document.getElementById("title");
  let dateinput = document.getElementById("releasedate");
  let adultinput = document.getElementById("adult");
  let languageinput = document.getElementById("language");
  let imageinput = document.getElementById("img").value;
  let ratinginput = document.getElementById("rating");

  let postajax = new XMLHttpRequest();
  postajax.open("post", "https://mimic-server-api.vercel.app/movies");
  postajax.setRequestHeader("Content-Type", "application/json");
  postajax.onload = function () {
    getajax();
  };
  let selectgenre = [...document.querySelectorAll("input[name=genre]:checked"),].map((checkbox) => parseInt(checkbox.value));
  let string = JSON.stringify({
    title: titleinput.value,
    release_date: dateinput.value,
    adult: adultinput.value,
    genre_ids: selectgenre,
    vote_average: ratinginput.value,
    original_language: languageinput.value,
    poster_path: imageinput,
  });
 
  alert("Your movie saved suceessfully");
  postajax.send(string);
  pform.reset();
  
});
