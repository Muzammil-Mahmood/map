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




function errorHandler(error) {
    console.log(error.message);
}



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





