$(document).ready(function () {
  console.log("test", L);
  var map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log("lat", lat);
        console.log("lng", lng);
        map.setView([lat, lng], 13);
        L.marker([lat, lng]).addTo(map).bindPopup("You are here!").openPopup();
      },
      function (error) {
        console.error("Geolocation error:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});
