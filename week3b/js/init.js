// declare variables
let mapOptions = {'center': [35.0709,-117],'zoom':6}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);


L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng, place, notes){
    console.log(notes)
    L.circleMarker([lat,lng], {color:'#6fbed6', radius:5, fill:true, fillColor:'#6fbed6', fillOpacity: 1}).addTo(map).bindPopup(`<h2>${place}</h2>`+ `<p>${notes}</p>`)
    return notes
}

fetch("map.geojson") // fetch the GeoJSON file, this is the name from step 2.
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        // L.geoJSON(data).addTo(map)
        for (let i = 0; i < data.features.length; i++) {
            addMarker(data.features[i].geometry.coordinates[1],data.features[i].geometry.coordinates[0],data.features[i].properties.place,data.features[i].properties.notes)
        }

    });

