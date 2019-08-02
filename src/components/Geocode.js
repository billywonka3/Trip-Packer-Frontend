import Geocode from "react-geocode";
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("REACT_APP_GEOCODE_KEY");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// Get address from latidude & longitude.
Geocode.fromLatLng("48.8583701", "2.2922926").then(
  response => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  error => {
    console.error(error);
  }
);
 
// Get latidude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);


export default Geocode;


// Documentation : 
// https://developers.google.com/maps/documentation/geocoding/start
// https://www.npmjs.com/package/react-geocode
