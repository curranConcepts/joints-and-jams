mapboxgl.accessToken =
  "pk.eyJ1IjoiYWN1cnJhbjExIiwiYSI6ImNsbjNiZGJycTBkcDgyamw3bTBkaTkzdnAifQ.1uiEBXRtHQsHTLMchIvxNQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-111.7756824579275, 45.81615179504574],
  zoom: 9.5,
});
const marker2 = new mapboxgl.Marker({ color: "red" })
  .setLngLat([-111.7756824579275, 45.81615179504574])
  .addTo(map);
