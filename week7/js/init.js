// declare variables
let mapOptions = {'center': [34.0709,-118.444],'zoom':5}

let vaccinated = L.featureGroup();
let nonVaccinated = L.featureGroup();

let layers = {
    "Vaccinated Respondent": vaccinated,
    "Unvaccinated Respondent": nonVaccinated
}

let circleOptions = {
    radius: 4,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmc1uUHcf8Fjo_ylciM3OEWxR4Y9MnwixM9U3-BDFGm_e4Aks-LAxEc8DwyT_X_Yyub7DQwIDBcwHw/pub?gid=1644397384&single=true&output=csv"

// define the leaflet map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

// add layer control box
L.control.layers(null,layers).addTo(map)

let Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

Esri_WorldGrayCanvas.addTo(map);

function addMarker(data){
    
        circleOptions.fillColor = "blue"
        // createButtons(data.lat,data.lng)
        console.log("yay")
    return data
}



function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })

    // let allLayers = L.featureGroup([vaccinated,nonVaccinated]);
    // map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
