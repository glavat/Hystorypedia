App.factory('$map', function() {
    var me = this;

    function attachEvents () {
        me.map.on('draw:created', showPolygonArea);
        me.map.on('draw:edited', showPolygonAreaEdited);
    }

    function configureLayers () {
        me.map.addLayer(me.osm);
        me.map.addLayer(me.featureGroup);
    }

    function init () {
        me.map = new L.Map('map');
        me.osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 8,
            maxZoom: 16,
            attribution: 'Map data (c)OpenStreetMap contributors'
        });
        me.featureGroup = new L.featureGroup();
        me.drawControl = new L.Control.Draw({
            edit: {
                featureGroup: me.featureGroup
            }
        });

        me.map.setView(new L.LatLng(49.8, 30.1), 12);
        me.map.addControl(me.drawControl);
    }

    function showPolygonArea (e) {
        me.featureGroup.clearLayers();
        me.featureGroup.addLayer(e.layer);
        e.layer.bindPopup((LGeo.area(e.layer) / 1000000).toFixed(2) + ' km<sup>2</sup>');
        e.layer.openPopup();
    }

    function showPolygonAreaEdited (e) {
        e.layers.eachLayer(function(layer) {
            showPolygonArea({ layer: layer });
        });
    }

    return {
        init: function () {
            init();
            configureLayers();
            attachEvents();
        },
        get: function () {
            return me.map
        }
    }
});
