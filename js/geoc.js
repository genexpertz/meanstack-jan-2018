/**
 * Created by admin on 14/02/18.
 */

var latitude ;
var longitude;

function getPosition(position) {

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    //alert('first'+latitude + ',' + longitude);
}

function displayMap() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        alert('not working')
    }
    setTimeout(showMap,1000);

}

function showMap(){

    //alert('second'+latitude + ',' + longitude);
    var maplocation = document.getElementById("maplocation");
    var mapOptions = { zoom: 10,
        center: {lat: parseFloat(latitude) , lng: parseFloat(longitude)},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(maplocation, mapOptions);
}
