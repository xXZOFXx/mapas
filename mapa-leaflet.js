// VARIABLE GLOBAL
let map
let pointsArray

// DOM READY
document.addEventListener("DOMContentLoaded", function () {
    map = L.map("mapid").setView([19.4, -99.4], 10)

    // Tiles de open street maps
    //L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.light'
    }).addTo(map);
    let marker1 = L.marker([19.385278, -99.099722]).addTo(map)
    let marker2 = L.marker([19.416111, -99.191944]).addTo(map)
    let marker3 = L.marker([19.271389, -99.203889]).addTo(map)
    let marker4 = L.marker([19.498611, -99.145278]).addTo(map)
    let marker5 = L.marker([19.453611 , -99.11111]).addTo(map)
    marker1.bindTooltip("Tezontle")
    marker2.bindTooltip("Molino del rey")
    marker3.bindTooltip("Ecoguardas")
    marker4.bindTooltip("Ciencias biologicas ipn II")
    marker5.bindTooltip("Ciencias biologicas ipn ")
    
})
