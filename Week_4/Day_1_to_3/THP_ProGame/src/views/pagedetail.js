import { RAWG_KEY } from "../../env";

let screenshots = [];

const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      console.log(gameData)
      const {
        id,
        name,
        description,
        released,
        background_image,
        website,
        rating,
        rating_top,
        ratings_count,
        parent_platforms,
        stores,
        developers,
        genres,
        tags,
        publishers
      } = gameData;

      const todayDate = new Date();
      const today = `${todayDate.getFullYear()}-${(todayDate.getMonth()+1).toString().padStart(2, '0')}-${todayDate.getDate()}`;
      const oneYearLater = `${todayDate.getFullYear()+1}-${(todayDate.getMonth()+1).toString().padStart(2, '0')}-${todayDate.getDate()}`;

      screenshots = [];

      fetch(`https://api.rawg.io/api/games?dates=${today},${oneYearLater}&ordering=-rating&page_size=27&key=${RAWG_KEY}`)
        .then((response) => response.json())
        .then((DataScreenshots) => {
          for(let i = 0; i < DataScreenshots.results.length; i++) {
            if (DataScreenshots.results[i].name === name) {
              screenshots.push(DataScreenshots.results[i].short_screenshots)
            }
          }
          articleDOM.querySelector("div.screenshots").innerHTML = /*html*/`
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src="${screenshots[0][0].image}" class="card-img-top h-100" alt="...">
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="${screenshots[0][1].image}" class="card-img-top h-100" alt="...">
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="${screenshots[0][2].image}" class="card-img-top h-100" alt="...">
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="${screenshots[0][3].image}" class="card-img-top h-100" alt="...">
                </div>
              </div>
            </div>
          `;
      });

      fetch(`https://api.rawg.io/api/games/${id}/movies?&key=${RAWG_KEY}`)
      .then((response) => response.json())
      .then((DataTrailer) => {
        console.log(DataTrailer)
        articleDOM.querySelector("div.trailer").innerHTML += /*html*/`
          <video controls>
            <source src="${DataTrailer.results[0].data.max}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `
      })

      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("img.bg_img").src = background_image;
      articleDOM.querySelector("img.bg_img").style = "width: 100%;"
      articleDOM.querySelector("img.bg_img").alt = `Image du jeu: "${name}"`;
      articleDOM.querySelector("a.website").href = website;
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.release-date").innerHTML = released;
      developers.forEach(element => {
        articleDOM.querySelector("p.developers").innerHTML += element.name;
        if (developers.indexOf(element) < developers.length - 1) {
          articleDOM.querySelector("p.developers").innerHTML += ', ';
        } else {
          articleDOM.querySelector("p.developers").innerHTML += '.';
        }
      });
      parent_platforms.forEach(element => {
        articleDOM.querySelector("p.parent_platforms").innerHTML += element.platform.name;
        if (parent_platforms.indexOf(element) < parent_platforms.length - 1) {
          articleDOM.querySelector("p.parent_platforms").innerHTML += ', ';
        } else {
          articleDOM.querySelector("p.parent_platforms").innerHTML += '.';
        }
      });
      publishers.forEach(element => {
        articleDOM.querySelector("p.publishers").innerHTML += element.name;
        if (publishers.indexOf(element) < publishers.length - 1) {
          articleDOM.querySelector("p.publishers").innerHTML += ', ';
        } else {
          articleDOM.querySelector("p.publishers").innerHTML += '.';
        }
      });
      genres.forEach(element => {
        articleDOM.querySelector("p.genres").innerHTML += element.name;
        if (genres.indexOf(element) < genres.length - 1) {
          articleDOM.querySelector("p.genres").innerHTML += ', ';
        } else {
          articleDOM.querySelector("p.genres").innerHTML += '.';
        }
      });
      tags.forEach(element => {
        articleDOM.querySelector("p.tags").innerHTML += element.name;
        if (tags.indexOf(element) < tags.length - 1) {
          articleDOM.querySelector("p.tags").innerHTML += ', ';
        } else {
          articleDOM.querySelector("p.tags").innerHTML += '.';
        }
      });
      articleDOM.querySelector("p.rating").innerHTML = `${rating}/${rating_top} - ${ratings_count} votes`;
      stores.forEach(element => {
        articleDOM.querySelector("div.stores").innerHTML += /*html*/`
        <a href="http://www.${element.store.slug}.com/" class="text-white stretched-link">${element.store.name}</a>
        <br>
        `
      });
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${RAWG_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = /*html*/`
      <section class="page-detail text-white">
        <div class="article">
          <div class="position-relative">
            <img class="bg_img img-fluid" src="" alt="">
            <a class="website btn btn-danger position-absolute" style="bottom: 10px; right: 10px;" href="">Check Website</a>
          </div>

          <br>

          <div class="d-flex justify-content-between align-items-center">
            <h1 class="title"></h1>    
            <p class="rating text-danger"></p>       
          </div>


          <h4>Description: </h4>
          <p class="description"></p>

          <div class="row">
            <div class="col-sm-3">
              <div class="card d-flex align-items-center justify-content-center bg-dark h-100 text-center ">
                <h5 class="card-title">Release Date</h5>
                <p class="release-date card-text"></p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card d-flex align-items-center justify-content-center bg-dark h-100 text-center ">
                <h5 class="card-title">Developer(s)</h5>
                <p class="developers card-text"></p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card d-flex align-items-center justify-content-center bg-dark h-100 text-center ">
                <h5 class="card-title">Platform(s)</h5>
                <p class="parent_platforms card-text"></p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card d-flex align-items-center justify-content-center bg-dark h-100 text-center ">
                <h5 class="card-title">Publisher(s)</h5>
                <p class="publishers card-text"></p>
              </div>  
            </div>
          </div>

          <br>

          <div class="row">
            <div class="col-sm-6">
              <div class="card d-flex align-items-center justify-content-left bg-dark h-100 text-center ">
                <h5 class="card-title">Genre(s)</h5>
                <p class="genres card-text"></p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card d-flex align-items-left justify-content-center bg-dark h-100 text-center ">
                <h5 class="card-title">Tag(s)</h5>
                <p class="tags card-text"></p>
              </div>
            </div>
          </div>
          <br>
          <div>
            <h3 class="text-danger">Buy</h3>
            <div class="stores">
            </div>
          </div>
          <br>
          <div>
            <h3 class="text-danger">Trailer</h3>
            <div class="trailer">
            </div>
          </div>
          <br>
          <div>
            <h3 class="text-danger">Screenshots</h3>
            <div class="screenshots">
            </div>
          </div>

        </div>
      </section>
    `;

    preparePage();
  };

  render();
};

export {
  PageDetail
}