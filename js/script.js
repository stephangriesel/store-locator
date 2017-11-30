function initMap() {

    //co-ordinates of map
    var myMapCenter = {lat: 52.353440, lng: 4.856411};

    //create map variable & define what html element the map must appear in
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myMapCenter,
        zoom:15
    });

    var marker = new google.maps.Marker({
        map:map,
        position:myMapCenter,
        title:'My Map'
    });

    marker.addListener('click',function(){
        alert('You clicked on me?');
    });

    var stores = [
        {
            name: 'Roots Amsterdam Wes',
            location: {lat: 52.353440, lng: 4.856411},
            hours: '8am to 10pm'
        },
        {
            name: 'Roots Amsterdam City Center',
            location: {lat:52.368284, lng:4.884632},
            hours: '8am to 10pm'
        }
    ];

}