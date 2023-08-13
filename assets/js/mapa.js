
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucess, error, options);
} else {
    alert('Los servicios de geolocalización no están disponibles');
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function sucess(position) {
    let latitude = 43.362344; // Latitud de La Coruña, Galicia
    let longitude = -8.411540; // Longitud de La Coruña, Galicia

    let map = L.map('map', {
        center: [latitude, longitude],
        zoom: 13
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(40.42693, -3.68387)
        ],
        language: 'es',
    }).addTo(map);

    // Agregar un marcador en un punto específico de La Coruña
    let marker = L.marker([43.370873, -8.397955]).addTo(map);
    marker.bindPopup("<b>Aquí hay algo interesante</b><br>Un punto en La Coruña.").openPopup();
}

function error() {
    // Manejo del error de geolocalización
}