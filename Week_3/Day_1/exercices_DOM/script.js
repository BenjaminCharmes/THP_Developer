const accueil = document.getElementById('accueil');
const accueilPage = document.getElementById('accueil_page');

const menu = document.getElementById('menu');
const menuPage = document.getElementById('menu_page');
const menu1Content = document.getElementById('menu1_content');
const menu2Content = document.getElementById('menu2_content');
const menu3Content = document.getElementById('menu3_content');
const btnMenu = document.getElementById('btn_menu');

const photos = document.getElementById('photos');
const photosPage = document.getElementById('photos_page');

const head = document.getElementById('head');
const main = document.getElementById('main');

const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

function getAMenu() {
  return `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
}

accueil.addEventListener('click', () => {
  accueilPage.style.display = 'block'
  menuPage.style.display = 'none'
  photosPage.style.display = 'none'
  accueil.classList = "nav-link active"
  menu.classList = "nav-link"
  photos.classList = "nav-link"
})

menu.addEventListener('click', () => {
  accueilPage.style.display = 'none'
  menuPage.style.display = 'block'
  photosPage.style.display = 'none'
  menu.classList = "nav-link active"
  accueil.classList = "nav-link"
  photos.classList = "nav-link"
  menu1Content.innerHTML = getAMenu()
  menu2Content.innerHTML = getAMenu()
  menu3Content.innerHTML = getAMenu()
})

photos.addEventListener('click', () => {
  accueilPage.style.display = 'none'
  menuPage.style.display = 'none'
  photosPage.style.display = 'block'
  accueil.classList = "nav-link"
  menu.classList = "nav-link"
  photos.classList = "nav-link active"
})

btn_menu.addEventListener('click', () => {
  menu1Content.innerHTML = getAMenu()
  menu2Content.innerHTML = getAMenu()
  menu3Content.innerHTML = getAMenu()
})

const exitPopup = document.getElementById('exit_popup')
const btnClosePopup = document.getElementById('btn_close_popup')

// document.addEventListener('mouseout', (e) => {
//   if (e.toElement === null && e.relatedTarget === null){
//     header.classList = "popup_active";
//     main.classList = "popup_active";
//     exit_popup.style.display = 'block';
//   }
// });

btnClosePopup.addEventListener('click', () => {
  exit_popup.style.display = 'none';
  header.classList.remove("popup_active");
  main.classList.remove("popup_active");
})

main.addEventListener('click', () => {
  exit_popup.style.display = 'none';
  header.classList.remove("popup_active");
  main.classList.remove("popup_active");
})

header.addEventListener('click', () => {
  exit_popup.style.display = 'none';
  header.classList.remove("popup_active");
  main.classList.remove("popup_active");
})

let dragindex = 0;
let clone = " ";

function drag(e){
  e.dataTransfer.setData("text",e.target.id);
}

function allowDrop(e){
  e.preventDefault();
}

const parent = document.querySelectorAll(".card");

function drop(e){
  e.preventDefault();
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  if (clone.id !== data) {
    let nodelist = []
    parent.forEach(child => {
      nodelist.push(child.childNodes);
    });
    for (let i = 0; i < nodelist.length; i++) {
      if (nodelist[i].id === data) {
        dragindex = i;
      }
    }

    let firstImageId = document.getElementById(data).id;
    let secondImageId = clone.id;

    let firstImage = document.getElementById(firstImageId);
    let secondImage = document.getElementById(secondImageId);

    secondImage.src = document.getElementById(data).src
    document.getElementById(data).src = clone.src
  }
}