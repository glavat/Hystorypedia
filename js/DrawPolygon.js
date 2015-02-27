/**
 * Created by Mykhailo_Glavatskyh on 2/25/2015.
 */
var featureGroup = L.featureGroup().addTo(map);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: featureGroup
    }
}).addTo(map);

map.on('draw:created', showPolygonArea);
map.on('draw:edited', showPolygonAreaEdited);

function showPolygonAreaEdited(e) {
    e.layers.eachLayer(function(layer) {
        showPolygonArea({ layer: layer });
    });
}

function showPolygonArea(e) {
    //featureGroup.clearLayers();
    featureGroup.addLayer(e.layer);
    e.layer.bindPopup((LGeo.area(e.layer) / 1000000).toFixed(2) + ' km<sup>2</sup>');
    e.layer.openPopup();
}



//
//var marker = L.marker([50.5, 30.5], {
//    draggable : true
//}).addTo(map);
//
//marker.bindPopup("<b>ssss</b>");
//marker.click(function(a, b, c, d) {marker.openPopup()});
