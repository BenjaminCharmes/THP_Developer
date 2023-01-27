import { RAWG_KEY } from "../../env";

let start = 0;
let end = 9;

function Home(argument) {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      console.log(articles)
      let resultsContent = articles.slice(start, end).map((article) => (
        /*html*/`
        <div class="col" style="height:498px;">
          <div class="card h-100">
            <div class="changeover h-100">
              <img src="${article.background_image}" class="card-img-top" alt="Image du jeu: ${article.name}" style="display:block; height:345px;">
            </div>
            <div class="card-body">
              <h3 class="card-title">${article.name}</h3>
              <p class="card-text"><strong>Sortie:</strong> ${article.released}</p>
              <a class= "btn btn-success" href="#pagedetail/${article.slug}">${article.id}</a>
            </div>
          </div>
        </div>
      `
      ));
      const resultsContainer = document.querySelector('.home .articles');
      console.log(resultsContainer)
      if (start === 0){
        resultsContainer.innerHTML = resultsContent.join("\n");
      } else {
        resultsContainer.innerHTML += resultsContent.join("\n");
      }

      let btnShowMore = document.getElementById('showMore')
      btnShowMore.addEventListener('click', (event) => {
        start += 9
        end += 9
        displayResults(articles);
        if (end === 27) {
          btnShowMore.remove()
        }
      });

      let everyChangeOver = document.querySelectorAll('div.changeover')
      let everyImg = document.querySelectorAll('img')
       
      for(let i = 0; i < everyImg.length; i++) {
        const id = articles[i].id
        everyImg[i].addEventListener('mouseover', () => {
          fetch(`https://api.rawg.io/api/games/${id}?&key=${RAWG_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            let gamePublishers = '';
            data.publishers.forEach(element => {
              gamePublishers += `<button class="publisher btn btn-warning">${element.name}</button>`
            });
            let gameGenres = '';
            data.genres.forEach(element => {
              if (data.genres.indexOf(element) < data.genres.length - 1) {
                gameGenres += element.name + ', ';
              } else {
                gameGenres += element.name + '.';
              }
            });
            everyChangeOver[i].innerHTML = /*html*/`
            <div class="row h-50">
              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex align-items-center justify-content-center bg-dark text-center rounded" style="height:169px;">
                    <h5 class="card-title text-danger">Released: ${articles[0].released}</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex align-items-center justify-content-center bg-dark h-100 text-center rounded" style="height:169px;">
                    <h5 class="card-title text-danger">Rating: ${data.rating}/${data.rating_top} - ${data.ratings_count} vote(s)</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row h-50">
              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex align-items-center justify-content-center bg-dark h-100 text-center rounded" style="height:169px;">
                    <h5 class="card-title text-danger">Publisher(s): ${gamePublishers}</h5>
                    
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex align-items-center justify-content-center bg-dark h-100 text-center rounded" style="height:169px;">
                    <h5 class="card-title text-danger">Genre(s): ${gameGenres}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `

            const publishersBtn = document.querySelectorAll("button.publisher")
            publishersBtn.forEach((element, i) => {
              element.addEventListener('click', () => {
                HomePublisher(data.publishers[i].id)
              })
            });

            everyChangeOver[i].addEventListener('mouseleave', () => {
              everyChangeOver[i].innerHTML = `<img src="${data.background_image}" class="card-img-top" alt="Image du jeu: ${data.name}" style="display:block; height:345px;">`;
            });
          });
        });
      };

    };

    const fetchHome = (url, cleanedArgument) => {
      const finalURL = cleanedArgument ? `${url}&search=${cleanedArgument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    fetchHome(`https://api.rawg.io/api/games?&page_size=27&key=${RAWG_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = /*html*/`
      <section class="home">
        <div class="articles row row-cols-1 row-cols-md-3 g-4">Loading...</div>
        <br>
        <button id="showMore" class="btn btn-success">Show more</button>
      </section>
    `;

    preparePage();
  };

  render();

}

const form = document.getElementById('form');
const searchForm = document.getElementById('search');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchValue = searchForm.value;
  Home(searchValue);
});

const HomePublisher = async (argument) => {
  const response = await fetch(`https://api.rawg.io/api/games?&publishers=${argument}&page_size=27&key=${RAWG_KEY}`);
  const PublisherGames = await response.json();
  let articles = PublisherGames.results
  let resultsContent = PublisherGames.results.map((article) => (
    /*html*/`
    <div class="col" style="height:498px;">
      <div class="card h-100">
        <div class="changeover h-100">
          <img src="${article.background_image}" class="card-img-top" alt="Image du jeu: ${article.name}" style="display:block; height:345px;">
        </div>
        <div class="card-body">
          <h3 class="card-title">${article.name}</h3>
          <p class="card-text"><strong>Sortie:</strong> ${article.released}</p>
          <a class= "btn btn-success" href="#pagedetail/${article.slug}">${article.id}</a>
        </div>
      </div>
    </div>
  `
  ));
  const resultsContainer = document.querySelector('.page-home .articles');
  if (start === 0){
    resultsContainer.innerHTML = resultsContent.join("\n");
  } else {
    resultsContainer.innerHTML += resultsContent.join("\n");
  }

  let btnShowMore = document.getElementById('showMore')
  btnShowMore.addEventListener('click', (event) => {
    start += 9
    end += 9
    displayResults(articles);
    if (end === 27) {
      btnShowMore.remove()
    }
  });

  let everyChangeOver = document.querySelectorAll('div.changeover')
  let everyImg = document.querySelectorAll('img')
    
  for(let i = 0; i < everyImg.length; i++) {
    const id = articles[i].id
    everyImg[i].addEventListener('mouseover', () => {
      fetch(`https://api.rawg.io/api/games/${id}?&key=${RAWG_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        let gamePublishers = '';
        data.publishers.forEach(element => {
          gamePublishers += `<button class="publisher btn btn-warning">${element.name}</button>`
        });
        let gameGenres = '';
        data.genres.forEach(element => {
          if (data.genres.indexOf(element) < data.genres.length - 1) {
            gameGenres += element.name + ', ';
          } else {
            gameGenres += element.name + '.';
          }
        });
        everyChangeOver[i].innerHTML = /*html*/`
        <div class="row h-50">
          <div class="col">
            <div class="card h-100">
              <div class="card-body d-flex align-items-center justify-content-center bg-dark text-center rounded" style="height:169px;">
                <h5 class="card-title text-danger">Released: ${articles[0].released}</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body d-flex align-items-center justify-content-center bg-dark h-100 text-center rounded" style="height:169px;">
                <h5 class="card-title text-danger">Rating: ${data.rating}/${data.rating_top} - ${data.ratings_count} vote(s)</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row h-50">
          <div class="col">
            <div class="card h-100">
              <div class="card-body d-flex align-items-center justify-content-center bg-dark h-100 text-center rounded" style="height:169px;">
                <h5 class="card-title text-danger">Publisher(s): ${gamePublishers}</h5>
                
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body d-flex align-items-center justify-content-center bg-dark h-100 text-center rounded" style="height:169px;">
                <h5 class="card-title text-danger">Genre(s): ${gameGenres}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
        `

        const publishersBtn = document.querySelectorAll("button.publisher")
        publishersBtn.forEach((element, i) => {
          element.addEventListener('click', () => {
            HomePublisher(data.publishers[i].id)
          })
        });

        everyChangeOver[i].addEventListener('mouseleave', () => {
          everyChangeOver[i].innerHTML = `<img src="${data.background_image}" class="card-img-top" alt="Image du jeu: ${data.name}" style="display:block; height:345px;">`;
        });
      });
    });
  };
};

export {
  Home
}