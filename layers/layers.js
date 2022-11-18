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
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 한라산천연보호구역'
            });
var format__All_2 = new ol.format.GeoJSON();
var features__All_2 = format__All_2.readFeatures(json__All_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__All_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__All_2.addFeatures(features__All_2);
var lyr__All_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__All_2, 
                style: style__All_2,
                interactive: true,
                title: '<img src="styles/legend/_All_2.png" /> 문화재구역_All'
            });
var format__poly_3 = new ol.format.GeoJSON();
var features__poly_3 = format__poly_3.readFeatures(json__poly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__poly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__poly_3.addFeatures(features__poly_3);
var lyr__poly_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__poly_3, 
                style: style__poly_3,
                interactive: true,
                title: '<img src="styles/legend/_poly_3.png" /> 백록담_poly'
            });
var format__All_4 = new ol.format.GeoJSON();
var features__All_4 = format__All_4.readFeatures(json__All_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__All_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__All_4.addFeatures(features__All_4);
var lyr__All_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__All_4, 
                style: style__All_4,
                interactive: true,
    title: '탐방로_All<br />\
    <img src="styles/legend/_All_4_0.png" /> 기존<br />\
    <img src="styles/legend/_All_4_1.png" /> 구<br />'
        });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 보이는 대상'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 보는 지점'
            });
var format__1017_epsg5181_7 = new ol.format.GeoJSON();
var features__1017_epsg5181_7 = format__1017_epsg5181_7.readFeatures(json__1017_epsg5181_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1017_epsg5181_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1017_epsg5181_7.addFeatures(features__1017_epsg5181_7);
var lyr__1017_epsg5181_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1017_epsg5181_7, 
                style: style__1017_epsg5181_7,
                interactive: true,
                title: '<img src="styles/legend/_1017_epsg5181_7.png" /> 산방산_경로포인터1017_epsg5181'
            });
var format___epsg5181_8 = new ol.format.GeoJSON();
var features___epsg5181_8 = format___epsg5181_8.readFeatures(json___epsg5181_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___epsg5181_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___epsg5181_8.addFeatures(features___epsg5181_8);
var lyr___epsg5181_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource___epsg5181_8, 
                style: style___epsg5181_8,
                interactive: true,
                title: '<img src="styles/legend/__epsg5181_8.png" /> 방선문_경로포인터_epsg5181'
            });
var format__360_9 = new ol.format.GeoJSON();
var features__360_9 = format__360_9.readFeatures(json__360_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__360_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__360_9.addFeatures(features__360_9);
var lyr__360_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__360_9, 
                style: style__360_9,
                interactive: true,
                title: '<img src="styles/legend/_360_9.png" /> 방선문_360사진'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__10, 
                style: style__10,
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> 보이는대상-기우단'
            });
var format____11 = new ol.format.GeoJSON();
var features____11 = format____11.readFeatures(json____11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____11.addFeatures(features____11);
var lyr____11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource____11, 
                style: style____11,
                interactive: true,
                title: '<img src="styles/legend/___11.png" /> 선작지왓_윗세오름_경로'
            });
var format__point_12 = new ol.format.GeoJSON();
var features__point_12 = format__point_12.readFeatures(json__point_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__point_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__point_12.addFeatures(features__point_12);
var lyr__point_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__point_12, 
                style: style__point_12,
                interactive: true,
                title: '<img src="styles/legend/_point_12.png" /> 백록담_point'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr__1.setVisible(true);lyr__All_2.setVisible(true);lyr__poly_3.setVisible(true);lyr__All_4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__1017_epsg5181_7.setVisible(true);lyr___epsg5181_8.setVisible(true);lyr__360_9.setVisible(true);lyr__10.setVisible(true);lyr____11.setVisible(true);lyr__point_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr__1,lyr__All_2,lyr__poly_3,lyr__All_4,lyr__5,lyr__6,lyr__1017_epsg5181_7,lyr___epsg5181_8,lyr__360_9,lyr__10,lyr____11,lyr__point_12];
lyr__1.set('fieldAliases', {'fid': 'fid', 'GID': 'GID', 'CP_CD': 'CP_CD', 'SGG_NM': 'SGG_NM', 'HE_SEID': 'HE_SEID', 'CPH_NM': 'CPH_NM', 'CPH_FULL_N': 'CPH_FULL_N', 'CAC_CD': 'CAC_CD', 'APM_NO': 'APM_NO', 'SID_CD': 'SID_CD', 'SGG_CD': 'SGG_CD', 'AREA_SZ': 'AREA_SZ', 'CREATE_DT': 'CREATE_DT', 'CREATOR_ID': 'CREATOR_ID', 'UPDATE_DT': 'UPDATE_DT', 'UPDATER_ID': 'UPDATER_ID', 'AREA_SZ2': 'AREA_SZ2', 'MIN_SCALE': 'MIN_SCALE', 'MAX_SCALE': 'MAX_SCALE', 'URL': 'URL', });
lyr__All_2.set('fieldAliases', {'fid': 'fid', '문화재?': '문화재?', '종목코?': '종목코?', '문화??': '문화??', '지정번?': '지정번?', '면적': '면적', '시도코?': '시도코?', '시군구?': '시군구?', '문화재?_1': '문화재?_1', 'layer': 'layer', 'path': 'path', });
lyr__poly_3.set('fieldAliases', {'id': 'id', 'photo': 'photo', 'Title': 'Title', 'Web_IMG': 'Web_IMG', 'pict01': 'pict01', 'pdf01': 'pdf01', });
lyr__All_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', '탐방경?': '탐방경?', '경로 구': '경로 구', 'length': 'length', 'layer': 'layer', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'id': 'id', '권역': '권역', '대상명': '대상명', '명승권': '명승권', });
lyr__6.set('fieldAliases', {'fid': 'fid', '명승': '명승', '번호': '번호', '위도': '위도', '경도': '경도', '내용': '내용', 'Visibility': 'Visibility', '가시권역': '가시권역', '보는지점': '보는지점', '보이는대상': '보이는대상', 'NUM': 'NUM', 'coordx': 'coordx', 'coordy': 'coordy', '사진': '사진', '고회화': '고회화', '고문헌링크': '고문헌링크', '고지도링크': '고지도링크', });
lyr__1017_epsg5181_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr___epsg5181_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', });
lyr__360_9.set('fieldAliases', {'fid': 'fid', '명승': '명승', '번호': '번호', '위도': '위도', '경도': '경도', '내용': '내용', 'Visibility': 'Visibility', '가시권�': '가시권�', '보는지�': '보는지�', '보이는�': '보이는�', 'NUM': 'NUM', 'coordx': 'coordx', 'coordy': 'coordy', '고회화': '고회화', '고문헌�': '고문헌�', '고지도�': '고지도�', '360pic': '360pic', });
lyr__10.set('fieldAliases', {'fid': 'fid', 'id': 'id', '권역': '권역', '대상명': '대상명', '명승권': '명승권', '고문헌': '고문헌', 'pdf01': 'pdf01', });
lyr____11.set('fieldAliases', {'id': 'id', '고회화': '고회화', '사진01': '사진01', '사진02': '사진02', '고문헌0': '고문헌0', });
lyr__point_12.set('fieldAliases', {'fid': 'fid', '명승': '명승', '번호': '번호', '위도': '위도', '경도': '경도', '내용': '내용', 'Visibility': 'Visibility', '가시권': '가시권', '보는지�': '보는지�', '보이는�': '보이는�', 'NUM': 'NUM', 'coordx': 'coordx', 'coordy': 'coordy', '사진': '사진', '고회화': '고회화', '고문헌': '고문헌', '고지도': '고지도', 'pdf01': 'pdf01', });
lyr__1.set('fieldImages', {'fid': '', 'GID': 'TextEdit', 'CP_CD': 'TextEdit', 'SGG_NM': 'TextEdit', 'HE_SEID': 'TextEdit', 'CPH_NM': 'TextEdit', 'CPH_FULL_N': 'TextEdit', 'CAC_CD': 'TextEdit', 'APM_NO': 'TextEdit', 'SID_CD': 'TextEdit', 'SGG_CD': 'TextEdit', 'AREA_SZ': 'TextEdit', 'CREATE_DT': 'TextEdit', 'CREATOR_ID': 'TextEdit', 'UPDATE_DT': 'TextEdit', 'UPDATER_ID': 'TextEdit', 'AREA_SZ2': 'TextEdit', 'MIN_SCALE': 'TextEdit', 'MAX_SCALE': 'TextEdit', 'URL': 'TextEdit', });
lyr__All_2.set('fieldImages', {'fid': 'TextEdit', '문화재?': 'TextEdit', '종목코?': 'TextEdit', '문화??': 'TextEdit', '지정번?': 'TextEdit', '면적': 'Range', '시도코?': 'TextEdit', '시군구?': 'TextEdit', '문화재?_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__poly_3.set('fieldImages', {'id': 'TextEdit', 'photo': 'TextEdit', 'Title': 'TextEdit', 'Web_IMG': 'TextEdit', 'pict01': 'TextEdit', 'pdf01': 'TextEdit', });
lyr__All_4.set('fieldImages', {'fid': '', 'id': 'Hidden', '탐방경?': 'Hidden', '경로 구': 'Hidden', 'length': 'Hidden', 'layer': 'Hidden', });
lyr__5.set('fieldImages', {'fid': '', 'id': 'Hidden', '권역': 'Hidden', '대상명': 'TextEdit', '명승권': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': '', '명승': 'TextEdit', '번호': 'Hidden', '위도': 'TextEdit', '경도': 'TextEdit', '내용': 'Hidden', 'Visibility': 'Hidden', '가시권역': 'TextEdit', '보는지점': 'Hidden', '보이는대상': 'Hidden', 'NUM': 'Hidden', 'coordx': 'Hidden', 'coordy': 'Hidden', '사진': 'TextEdit', '고회화': 'TextEdit', '고문헌링크': 'TextEdit', '고지도링크': '', });
lyr__1017_epsg5181_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'TextEdit', 'Images': 'TextEdit', });
lyr___epsg5181_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'TextEdit', 'Images': 'TextEdit', });
lyr__360_9.set('fieldImages', {'fid': 'TextEdit', '명승': 'TextEdit', '번호': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '내용': 'TextEdit', 'Visibility': 'TextEdit', '가시권�': 'TextEdit', '보는지�': 'TextEdit', '보이는�': 'TextEdit', 'NUM': 'TextEdit', 'coordx': 'TextEdit', 'coordy': 'TextEdit', '고회화': 'TextEdit', '고문헌�': 'TextEdit', '고지도�': 'TextEdit', '360pic': '', });
lyr__10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '권역': 'TextEdit', '대상명': 'TextEdit', '명승권': 'TextEdit', '고문헌': '', 'pdf01': '', });
lyr____11.set('fieldImages', {'id': 'TextEdit', '고회화': '', '사진01': '', '사진02': '', '고문헌0': '', });
lyr__point_12.set('fieldImages', {'fid': 'TextEdit', '명승': 'TextEdit', '번호': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '내용': 'TextEdit', 'Visibility': 'TextEdit', '가시권': 'TextEdit', '보는지�': 'TextEdit', '보이는�': 'TextEdit', 'NUM': 'TextEdit', 'coordx': 'TextEdit', 'coordy': 'TextEdit', '사진': 'TextEdit', '고회화': 'TextEdit', '고문헌': 'TextEdit', '고지도': 'TextEdit', 'pdf01': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'GID': 'no label', 'CP_CD': 'no label', 'SGG_NM': 'no label', 'HE_SEID': 'no label', 'CPH_NM': 'no label', 'CPH_FULL_N': 'no label', 'CAC_CD': 'no label', 'APM_NO': 'no label', 'SID_CD': 'no label', 'SGG_CD': 'no label', 'AREA_SZ': 'no label', 'CREATE_DT': 'no label', 'CREATOR_ID': 'no label', 'UPDATE_DT': 'no label', 'UPDATER_ID': 'no label', 'AREA_SZ2': 'no label', 'MIN_SCALE': 'no label', 'MAX_SCALE': 'no label', 'URL': 'no label', });
lyr__All_2.set('fieldLabels', {'fid': 'no label', '문화재?': 'no label', '종목코?': 'no label', '문화??': 'no label', '지정번?': 'no label', '면적': 'no label', '시도코?': 'no label', '시군구?': 'no label', '문화재?_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr__poly_3.set('fieldLabels', {'id': 'no label', 'photo': 'no label', 'Title': 'no label', 'Web_IMG': 'no label', 'pict01': 'header label', 'pdf01': 'header label', });
lyr__All_4.set('fieldLabels', {'fid': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', '대상명': 'no label', '명승권': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', '명승': 'inline label', '위도': 'inline label', '경도': 'inline label', '가시권역': 'header label', '사진': 'header label', '고회화': 'header label', '고문헌링크': 'header label', '고지도링크': 'header label', });
lyr__1017_epsg5181_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Name': 'no label', 'Date': 'no label', 'Time': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Altitude': 'no label', 'North': 'no label', 'Azimuth': 'no label', 'Cam. Maker': 'no label', 'Cam. Model': 'no label', 'Title': 'no label', 'Comment': 'no label', 'Path': 'no label', 'RelPath': 'no label', 'Timestamp': 'no label', 'Images': 'no label', });
lyr___epsg5181_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Name': 'no label', 'Date': 'no label', 'Time': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Altitude': 'no label', 'North': 'no label', 'Azimuth': 'no label', 'Cam. Maker': 'no label', 'Cam. Model': 'no label', 'Title': 'no label', 'Comment': 'no label', 'Path': 'no label', 'RelPath': 'no label', 'Timestamp': 'no label', 'Images': 'no label', });
lyr__360_9.set('fieldLabels', {'fid': 'no label', '명승': 'no label', '번호': 'no label', '위도': 'no label', '경도': 'no label', '내용': 'no label', 'Visibility': 'no label', '가시권�': 'no label', '보는지�': 'no label', '보이는�': 'no label', 'NUM': 'no label', 'coordx': 'no label', 'coordy': 'no label', '고회화': 'no label', '고문헌�': 'no label', '고지도�': 'no label', '360pic': 'no label', });
lyr__10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '권역': 'no label', '대상명': 'no label', '명승권': 'no label', '고문헌': 'header label', 'pdf01': 'header label', });
lyr____11.set('fieldLabels', {'id': 'no label', '고회화': 'header label', '사진01': 'header label', '사진02': 'header label', '고문헌0': 'header label', });
lyr__point_12.set('fieldLabels', {'fid': 'inline label', '명승': 'header label', '번호': 'no label', '위도': 'header label', '경도': 'header label', '내용': 'no label', 'Visibility': 'no label', '가시권': 'no label', '보는지�': 'header label', '보이는�': 'header label', 'NUM': 'header label', 'coordx': 'header label', 'coordy': 'header label', '사진': 'no label', '고회화': 'header label', '고문헌': 'header label', '고지도': 'header label', 'pdf01': 'header label', });
lyr__point_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});