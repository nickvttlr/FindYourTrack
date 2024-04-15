// Wait for the DOM content to be fully loaded before initializing the map
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the HERE Maps API with your API key
    var platform = new H.service.Platform({
        apikey: 'YOUR_API_KEY' // Replace 'YOUR_API_KEY' with your actual API key
    });

    // Define the map container
    var mapContainer = document.getElementById('mapContainer');

    // Create default layers for the map
    var defaultLayers = platform.createDefaultLayers();

    // Create a new map object
    var map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
        center: { lat: 52.5, lng: 13.4 }, // Berlin coordinates
        zoom: 10
    });

    // Enable map interaction behaviors
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Add default UI components to the map
    var ui = H.ui.UI.createDefault(map, defaultLayers);
});