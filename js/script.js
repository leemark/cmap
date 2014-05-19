var map = L.map('cmap', {drawControl: true}).setView([38.8486555, -104.824], 18);
var osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var OpenMapSurfer_Roads = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});

//osmTiles.addTo(map);
OpenMapSurfer_Roads.addTo(map);

var geojsonLayer = new L.GeoJSON.AJAX("data/ccgeo.json");
geojsonLayer.addTo(map);
