const form = document.getElementById("form");
const filmTitle = document.getElementById('film_title');
const divShowFilm = document.getElementById("show_film");
const popup = document.getElementById('popup');
const main = document.getElementById('main');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fimlToFind = filmTitle.value;
  try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ccd4d1fe&s=${fimlToFind}`);
      const data = await response.json();
      const dataFilm = data.Search;
      divShowFilm.innerHTML = "";
      console.log(dataFilm)
      dataFilm.forEach(film => {
        showFilms(divShowFilm, film.Title, film.Year, film.Poster);
      });
      const infoBtnS = document.getElementsByClassName('btn btn-success');
      for (let i = 0; i < infoBtnS.length; i++) {
        infoBtnS[i].addEventListener('click', () => {
          showResume(dataFilm[i].Title)
        })    
      }
  } catch (error) {
    console.error('Response error:', error.message);
  }
});

const showFilms = (element, title, year, poster) => {
  element.innerHTML += `
    <div data-aos="zoom-in" data-aos-duration="3000">
      <div class="card mb-3" style="margin: 5px; padding: 5px">
        <div class="row no-gutters">
          <div class="col-md-2" style="margin-right: 50px;">
            <img src="${poster}" class="card-img items-center" style="width: 250px; height: 250px;" alt="Affiche du film: ${title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${title}</h3>
              <p class="card-text"><strong>Sortie:</strong> ${year}</p>
              <a href="#" class="btn btn-success">Plus d'informations</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

const showResume = async (title) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ccd4d1fe&t=${title.replace(" ", "+")}`);
    const data = await response.json();
    console.log(data)
    popup.innerHTML = `
      <div class="row no-gutters" data-aos="zoom-in" data-aos-duration="3000">
        <div class="col-md-4">
          <img src="${data.Poster}" class="card-img items-center" style="width: 100%; height: 100%;" alt="Affiche du film: ${data.Title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">${data.Title}</h3>
          </br>
            <p class="card-text"><strong>Sortie:</strong> ${data.Released}</p>
            <p class="card-text">${data.Plot}</p>
          </div>
        </br>
          <button href="#" class="btn btn-danger">Quitter</button>
        </div>
      </div>
    `;
    popup.style.display = 'block'
    main.classList = "popup_active";
    const exitPopup = document.getElementsByClassName("btn-danger")[0];
    console.log(exitPopup)
    exitPopup.addEventListener('click', () => {
      popup.style.display = 'none'
      main.classList.remove("popup_active");
    })
  } catch (error) {
    console.error('Response error:', error.message);
  }  
};
