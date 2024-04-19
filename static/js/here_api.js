// Replace with your actual API key
const apiKey = 'jHuy8xcT9FRlTfU3EqM1dDy-Xr9_w5ly9B8-yrMvn_8';

function initializeMap() {
  const platform = new H.service.Platform({
    'apikey': apiKey
  });

  const defaultLayers = platform.createDefaultLayers();

  const map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 47.7, lng: 10.3 }  // Kempten
    }
  );
  var mapEvents = new H.mapevents.MapEvents(map);

  // Instantiate the default behavior, providing the mapEvents object:
  new H.mapevents.Behavior(mapEvents);
}

// Call the function after libraries are loaded (optional, see below)
window.addEventListener('load', initializeMap);