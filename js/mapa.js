let map;
let marker;
let watchID;
let geoLoc;

function initMap()
{
    const myLatLng = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: myLatLng,
      });
      marker = new google.maps.Marker({
          position: myLatLng,
          map,
          title: "Agroservi"
      });
      getPosition();
}

function getPosition()
{
    if(navigator.geolocation)
    {
        var options = {timeout:10000};
        geoLoc = navigator.geolocation;
        watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options);
    }
    else
    {
        alert("Lo sentimos, el explorador no soporta geolocalización")
    }
}

function showLocationOnMap(position)
{
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    const myLatLng = {lat: latitud, lng: longitud };
    marker.setPosition(myLatLng);
    map.setCenter(myLatLng);
}

function errorHandler(err)
{
    if(err.code == 1)
    {
        alert("Error: Acceso denegado!!");
    }
    else if(err.code == 2)
    {
        alert("Error: Position no existe o no se encuentra!");
    }
}