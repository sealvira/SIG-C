var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wheelchair': 'wheelchair', 'roof:orientation': 'roof:orientation', 'roof:material': 'roof:material', 'roof:colour': 'roof:colour', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name': 'name', 'club': 'club', 'parking': 'parking', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'parking': 'parking', 'capacity': 'capacity', 'government': 'government', 'pump:unit': 'pump:unit', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'branch': 'branch', 'construction': 'construction', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'covered': 'covered', 'access': 'access', 'kitchen:facilities': 'kitchen:facilities', 'rooms': 'rooms', 'reservation': 'reservation', 'image': 'image', 'description': 'description', 'official_name:id': 'official_name:id', 'official_name:en': 'official_name:en', 'healthcare': 'healthcare', 'self_service': 'self_service', 'alt_name': 'alt_name', 'takeaway': 'takeaway', 'opening_hours': 'opening_hours', 'drive_through': 'drive_through', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'sport': 'sport', 'leisure': 'leisure', 'stars': 'stars', 'official_name': 'official_name', 'cuisine': 'cuisine', 'website': 'website', 'smoking': 'smoking', 'name:ja': 'name:ja', 'name:en': 'name:en', 'addr:province': 'addr:province', 'brand': 'brand', 'beauty': 'beauty', 'ground_floor:height': 'ground_floor:height', 'atm': 'atm', 'name:es': 'name:es', 'phone': 'phone', 'internet_access:ssid': 'internet_access:ssid', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'fax': 'fax', 'email': 'email', 'bar': 'bar', 'air_conditioning': 'air_conditioning', 'addr:housenumber': 'addr:housenumber', 'religion': 'religion', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'shop': 'shop', 'height': 'height', 'office': 'office', 'admin_level': 'admin_level', 'tourism': 'tourism', 'name': 'name', 'amenity': 'amenity', 'type': 'type', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wheelchair': '', 'roof:orientation': '', 'roof:material': '', 'roof:colour': '', 'operator': '', 'opening_hours': '', 'name': '', 'club': '', 'parking': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'parking': '', 'capacity': '', 'government': '', 'pump:unit': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator': '', 'branch': '', 'construction': '', 'tower:type': '', 'tower:construction': '', 'man_made': '', 'covered': '', 'access': '', 'kitchen:facilities': '', 'rooms': '', 'reservation': '', 'image': '', 'description': '', 'official_name:id': '', 'official_name:en': '', 'healthcare': '', 'self_service': '', 'alt_name': '', 'takeaway': '', 'opening_hours': '', 'drive_through': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'sport': '', 'leisure': '', 'stars': '', 'official_name': '', 'cuisine': '', 'website': '', 'smoking': '', 'name:ja': '', 'name:en': '', 'addr:province': '', 'brand': '', 'beauty': '', 'ground_floor:height': '', 'atm': '', 'name:es': '', 'phone': '', 'internet_access:ssid': '', 'internet_access:fee': '', 'internet_access': '', 'fax': '', 'email': '', 'bar': '', 'air_conditioning': '', 'addr:housenumber': '', 'religion': '', 'addr:street': '', 'addr:postcode': '', 'shop': '', 'height': '', 'office': '', 'admin_level': '', 'tourism': '', 'name': '', 'amenity': '', 'type': '', 'school:type_idn': '', 'operator:type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wheelchair': 'no label', 'roof:orientation': 'no label', 'roof:material': 'no label', 'roof:colour': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'club': 'no label', 'parking': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'parking': 'no label', 'capacity': 'no label', 'government': 'no label', 'pump:unit': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'branch': 'no label', 'construction': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'covered': 'no label', 'access': 'no label', 'kitchen:facilities': 'no label', 'rooms': 'no label', 'reservation': 'no label', 'image': 'no label', 'description': 'no label', 'official_name:id': 'no label', 'official_name:en': 'no label', 'healthcare': 'no label', 'self_service': 'no label', 'alt_name': 'no label', 'takeaway': 'no label', 'opening_hours': 'no label', 'drive_through': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'sport': 'no label', 'leisure': 'no label', 'stars': 'no label', 'official_name': 'no label', 'cuisine': 'no label', 'website': 'no label', 'smoking': 'no label', 'name:ja': 'no label', 'name:en': 'no label', 'addr:province': 'no label', 'brand': 'no label', 'beauty': 'no label', 'ground_floor:height': 'no label', 'atm': 'no label', 'name:es': 'no label', 'phone': 'no label', 'internet_access:ssid': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'fax': 'no label', 'email': 'no label', 'bar': 'no label', 'air_conditioning': 'no label', 'addr:housenumber': 'no label', 'religion': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'shop': 'no label', 'height': 'no label', 'office': 'no label', 'admin_level': 'no label', 'tourism': 'no label', 'name': 'no label', 'amenity': 'no label', 'type': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});