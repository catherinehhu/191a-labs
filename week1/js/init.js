// JavaScript const variable declaration
const map = L.map('the_map').setView([35,-116], 7); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // (2)!

//JavaScript let variable declaration to create a marker
let deathvalley = L.marker([36.5054, -117.0794]).addTo(map) // (3)!
        .bindPopup('One of the first parks I visited in California'); 

let joshuatree = L.marker([33.8734, -115.9010]).addTo(map) // (3)!
.bindPopup('One of my favorite national parks for stargazing'); 

let anzaborrego = L.marker([33.1005, -116.3013]).addTo(map) // (3)!
.bindPopup('So many flowers in the spring'); 
