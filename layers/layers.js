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
var format_Predio_pp_1 = new ol.format.GeoJSON();
var features_Predio_pp_1 = format_Predio_pp_1.readFeatures(json_Predio_pp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predio_pp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_pp_1.addFeatures(features_Predio_pp_1);
var lyr_Predio_pp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predio_pp_1, 
                style: style_Predio_pp_1,
                interactive: true,
    title: 'Predio_pp<br />\
    <img src="styles/legend/Predio_pp_1_0.png" /> 719598<br />\
    <img src="styles/legend/Predio_pp_1_1.png" /> 720193<br />\
    <img src="styles/legend/Predio_pp_1_2.png" /> <br />'
        });
var format_Predio_sa_2 = new ol.format.GeoJSON();
var features_Predio_sa_2 = format_Predio_sa_2.readFeatures(json_Predio_sa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predio_sa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_sa_2.addFeatures(features_Predio_sa_2);
var lyr_Predio_sa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Predio_sa_2, 
                style: style_Predio_sa_2,
                interactive: true,
    title: 'Predio_sa<br />\
    <img src="styles/legend/Predio_sa_2_0.png" /> AVICULTURA<br />\
    <img src="styles/legend/Predio_sa_2_1.png" /> SIN DEFINIR<br />\
    <img src="styles/legend/Predio_sa_2_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Predio_pp_1.setVisible(true);lyr_Predio_sa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Predio_pp_1,lyr_Predio_sa_2];
lyr_Predio_pp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CUB': 'CUB', 'COD_DEP': 'COD_DEP', 'NOM_DEP': 'NOM_DEP', 'COD_MUN': 'COD_MUN', 'NOM_MUN': 'NOM_MUN', 'COD_VER': 'COD_VER', 'NOM_VER': 'NOM_VER', 'NOM_PNN': 'NOM_PNN', 'NOM_RI': 'NOM_RI', 'NOM_TC': 'NOM_TC', 'CATEGORIA': 'CATEGORIA', 'MEMORANDO': 'MEMORANDO', 'LINEA_PP': 'LINEA_PP', 'ZONA_RF': 'ZONA_RF', 'FECHA': 'FECHA', 'OPERADOR': 'OPERADOR', 'AREA': 'AREA', 'OBSERVACIO': 'OBSERVACIO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Predio_sa_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_DEP': 'COD_DEP', 'NOM_DEP': 'NOM_DEP', 'NOM_MUN': 'NOM_MUN', 'COD_VER': 'COD_VER', 'NOM_VER': 'NOM_VER', 'NOM_PNN': 'NOM_PNN', 'NOM_RI': 'NOM_RI', 'NOM_TC': 'NOM_TC', 'CATEGORIA': 'CATEGORIA', 'MEMORANDO': 'MEMORANDO', 'LINEA_SA': 'LINEA_SA', 'SUBLINEA_S': 'SUBLINEA_S', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'FECHA': 'FECHA', 'OPERADOR': 'OPERADOR', 'OBSERVACIO': 'OBSERVACIO', 'COD_MUN': 'COD_MUN', 'ZONA_RF': 'ZONA_RF', 'CUB': 'CUB', });
lyr_Predio_pp_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CUB': 'TextEdit', 'COD_DEP': 'Range', 'NOM_DEP': 'TextEdit', 'COD_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'COD_VER': 'TextEdit', 'NOM_VER': 'TextEdit', 'NOM_PNN': 'TextEdit', 'NOM_RI': 'TextEdit', 'NOM_TC': 'TextEdit', 'CATEGORIA': 'TextEdit', 'MEMORANDO': 'TextEdit', 'LINEA_PP': 'TextEdit', 'ZONA_RF': 'TextEdit', 'FECHA': 'TextEdit', 'OPERADOR': 'TextEdit', 'AREA': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Predio_sa_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_DEP': 'Range', 'NOM_DEP': 'TextEdit', 'NOM_MUN': 'TextEdit', 'COD_VER': 'TextEdit', 'NOM_VER': 'TextEdit', 'NOM_PNN': 'TextEdit', 'NOM_RI': 'TextEdit', 'NOM_TC': 'TextEdit', 'CATEGORIA': 'TextEdit', 'MEMORANDO': 'TextEdit', 'LINEA_SA': 'TextEdit', 'SUBLINEA_S': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'FECHA': 'TextEdit', 'OPERADOR': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'COD_MUN': 'TextEdit', 'ZONA_RF': 'TextEdit', 'CUB': 'TextEdit', });
lyr_Predio_pp_1.set('fieldLabels', {'OBJECTID': 'no label', 'CUB': 'no label', 'COD_DEP': 'no label', 'NOM_DEP': 'no label', 'COD_MUN': 'no label', 'NOM_MUN': 'no label', 'COD_VER': 'no label', 'NOM_VER': 'no label', 'NOM_PNN': 'no label', 'NOM_RI': 'no label', 'NOM_TC': 'no label', 'CATEGORIA': 'no label', 'MEMORANDO': 'no label', 'LINEA_PP': 'no label', 'ZONA_RF': 'no label', 'FECHA': 'no label', 'OPERADOR': 'no label', 'AREA': 'no label', 'OBSERVACIO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Predio_sa_2.set('fieldLabels', {'OBJECTID': 'no label', 'COD_DEP': 'no label', 'NOM_DEP': 'no label', 'NOM_MUN': 'no label', 'COD_VER': 'no label', 'NOM_VER': 'no label', 'NOM_PNN': 'no label', 'NOM_RI': 'no label', 'NOM_TC': 'no label', 'CATEGORIA': 'no label', 'MEMORANDO': 'no label', 'LINEA_SA': 'no label', 'SUBLINEA_S': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'FECHA': 'no label', 'OPERADOR': 'no label', 'OBSERVACIO': 'no label', 'COD_MUN': 'no label', 'ZONA_RF': 'no label', 'CUB': 'no label', });
lyr_Predio_sa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});