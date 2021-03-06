    // BeginOAWidget_Instance_2187524: #mapCanvas

    // initialize the google Maps

    function initializeGoogleMap() {
        // set latitude and longitude to center the map around
        var latlng = new google.maps.LatLng(40.1602365,
            -76.821288);

        // set up the default options
        var myOptions = {
            zoom: 15,
            center: latlng,
            navigationControl: true,
            navigationControlOptions:
                {style: google.maps.NavigationControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.TOP_LEFT },
            mapTypeControl: true,
            mapTypeControlOptions:
                {style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.TOP_RIGHT },

            scaleControl: true,
            scaleControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_LEFT
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: true,
            disableDoubleClickZoom: false,
            keyboardShortcuts: true
        };
        var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
        if (false) {
            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        }
        if (false) {
            var bikeLayer = new google.maps.BicyclingLayer();
            bikeLayer.setMap(map);
        }
        if (true) {
            addMarker(map,40.1602365,-76.821288,"Amphenol ICC");
        }
    }

window.onload = initializeGoogleMap();

// Add a marker to the map at specified latitude and longitude with tooltip
function addMarker(map,lat,long,titleText) {
    var markerLatlng = new google.maps.LatLng(lat,long);
    var marker = new google.maps.Marker({
        position: markerLatlng,
        map: map,
        title:"Roux Academy",
        icon: ""});
}


// EndOAWidget_Instance_2187524

