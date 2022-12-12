'use strict';



const btn = document.querySelector('btn');

function getLocation(position) {

    const { latitude, longitude } = position.coords;

    mapboxgl.accessToken = 'pk.eyJ1IjoiMDkyMzExMDE3OTI2MyIsImEiOiJjbGJncnB4M3UwaXY2M3ZxcHI5cWpkMHEwIn0.bmWXX5jtjn7IE-GC-U4Y7g';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [longitude, latitude], // starting position [lng, lat]
    zoom: 9, // starting zoom
    });

    
const marker = new mapboxgl.Marker()
.setLngLat([longitude, latitude])
.addTo(map);

    
 }

//  const map = new mapboxgl.Map({attributionControl: false})
// .addControl(new mapboxgl.AttributionControl({
// customAttribution: 'Map design by me'
// }));


function errorHandler(error) {
    console.log(error.message);
}
// // to get the map full screen
// const map = new mapboxgl.Map({
//     container: 'map',
//     projection: 'globe'
// });

// map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));



const options = {
    enableHighAccuracy: true
};
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorHandler, options);
} else {
    console.log('Geolocation is not supported by your browser');
}

// map.addControl(new mapboxgl.GeolocateControl({
//     positionOptions: {
//     enableHighAccuracy: true
//     },
//     trackUserLocation: true,
//     showUserHeading: true
//     }));





