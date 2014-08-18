(function(L){
    var map = L.map('cmap', {drawControl: true, fullscreenControl: true}).setView([38.8486555, -104.824], 18),
        osmTiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }),
    OpenMapSurfer_Roads = L.tileLayer('http://openmapsurfer.uni-hd.de/tiles/roads/x={x}&y={y}&z={z}', {
        attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),    
    ccBuildingInfo = new L.GeoJSON.AJAX("data/ccgeo.json"),
    baseMaps = {},
    overlayMaps = {};
    
    //osmTiles.addTo(map);
    OpenMapSurfer_Roads.addTo(map);
    L.control.locate().addTo(map);
    baseMaps = {
            "Flat": osmTiles,
            "3D Buildings": OpenMapSurfer_Roads
        };
    overlayMaps = {
            "Building info markers": ccBuildingInfo
        };
    L.control.layers(baseMaps, overlayMaps, {position: 'topright'}).addTo(map);
})(L);