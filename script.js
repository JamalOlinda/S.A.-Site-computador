function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -27.59, lng: -48.55 }, // Coordenadas iniciais
        zoom: 12,
    });

    // Exemplo de marcadores de ônibus (pode ser atualizado com API futura)
    var onibus = [
        { lat: -27.582, lng: -48.550, nome: "Ônibus 1" },
        { lat: -27.590, lng: -48.560, nome: "Ônibus 2" }
    ];

    onibus.forEach(bus => {
        new google.maps.Marker({
            position: { lat: bus.lat, lng: bus.lng },
            map: map,
            title: bus.nome,
        });
    });
}

window.onload = initMap;
