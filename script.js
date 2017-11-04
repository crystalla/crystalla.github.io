function myMap() {
    var coordinates =  new google.maps.LatLng(55.8034851, 37.5180903);
    var mapOptions = {
        center: coordinates,
        zoom: 19,
        mapTypeId: 'roadmap'
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Marusya tady!'
    });
}