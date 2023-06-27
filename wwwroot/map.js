var map;

function initializeMap(mapsKey) {
    // Initialize the Azure Maps
    atlas.setSubscriptionKey(mapsKey);

    // Create the map instance
    map = new atlas.Map("mapDiv", {
        view: "Auto",
        center: [2.3522, 48.8566],
        zoom: 3
    });
}

function addMarker(position) {
    const marker = new atlas.HtmlMarker(position.longitude, position.latitude);

    map.markers.add(marker);
    return marker;
}

function requestUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
                error => reject(error)
            );
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}