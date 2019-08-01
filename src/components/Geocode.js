import Geocode from "react-geocode";
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyDd4_Pz6EprCD1gFI6IrfSy0izMEl6guug");
 
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


// function Geocoding(props){

//     var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
//     searchBox.addListener('places_changed', function() {
//       var locale = searchBox.getPlaces()[0];
//     });

//     document.querySelector("#latitude").value = place.geometry.location.lat();
//     document.querySelector("#longitude").value = place.geometry.location.lng();

//     return(
//         <form method="get">
//             <fieldset>

//                 <ul>
//                     <li>
//                         <label for="city-search">City Name : </label>
//                         <input type="text" id="city-search" placeholder="e.g. Rochester, NY"/>
//                     </li>
//                 </ul>
//                     <br/>
//                 <ul>
//                     <li>
//                         <label for="latitude">Latitude : </label>
//                         <input type="text" id="latitude" placeholder="e.g. 42.9150747" required/>
//                     </li>
//                     <li>
//                         <label for="longitude">Longitude : </label>
//                         <input type="text" id="longitude" placeholder="e.g. -77.784323" required/>
//                     </li>
//                 </ul>
            
//                 <button>Get Weather</button>

//             </fieldset>
//         </form>

//         <script type='text/javascript' src="https://darksky.net/widget/default/25.7743,-80.1937/us12/en.js?width=100%&height=350&title=Miami, Florida&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes"></script>
//     )
// }

export default Geocode;





