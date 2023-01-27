const getVelibData = () => {
  fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const getVelibStationsData = data.records;
      const divVelibStations = document.getElementById("Velib_Stations");
      divVelibStations.innerHTML = "";
      getVelibStationsData.forEach(station => {
        showVelibStation(divVelibStations,station.fields.name, station.fields.mechanical, station.fields.ebike )
      });
    })
    .catch((error) => {
      console.error('Response error:', error.message);
    });
}

const showVelibStation = (element, name, mechanicals, ebikes) => {
  element.innerHTML += `
      <div class="col">
        <div class="card" style="width: 25rem; height: 15rem; margin: 15px; padding: 15px;">
          <div class="card-body">
            <h2 class="card-title">Station : ${name}</h2>
            <p class="card-text">${mechanicals} classical Velibs</p>
            <p class="card-text">${ebikes} electric Velibs</p>
          </div>
        </div>
      </div>
  `;
}

getVelibData();
setInterval(getVelibData, 60000)

