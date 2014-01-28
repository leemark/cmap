var map = L.map('cmap', {drawControl: true}).setView([38.8486555, -104.824], 18);
var osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});
osmTiles.addTo(map);
var geojsonLayer = new L.GeoJSON.AJAX("data/ccgeo.json");
geojsonLayer.addTo(map);