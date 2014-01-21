// ref: http://snazzymaps.com/

var initialize = function() {

    var styles = [{"stylers":[{"saturation":-100}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#78706b"}]},{"featureType":"landscape","stylers":[{"color":"#b8ada3"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#bebebe"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#c8c2bb"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#aba090"}]},{"featureType":"administrative","stylers":[{"color":"#b2a493"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]}];


    var myLatlng = new google.maps.LatLng(48.428793, -123.367453),
        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Union Victoria'
        }),
        mapOptions = {
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        //scrollwheel: false,
        center: myLatlng,
        zoom: 14,
        styles: styles
    };

    if (document.getElementById("map-canvas")) {
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        marker.setMap(map);
    }

};

google.maps.event.addDomListener(window, 'load', initialize);
