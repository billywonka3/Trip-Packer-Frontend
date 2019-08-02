import React from 'react';
// import Geocode from "react-geocode";
 
function Weather(){

    var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
    searchBox.addListener('places_changed', function() {
      var locale = searchBox.getPlaces()[0];
    });

    document.querySelector("#latitude").value = place.geometry.location.lat();
    document.querySelector("#longitude").value = place.geometry.location.lng();

    return(
        <form method="get">
            <fieldset>

                <ul>
                    <li>
                        <label for="city-search">City Name : </label>
                        <input type="text" id="city-search" placeholder="e.g. Rochester, NY"/>
                    </li>
                </ul>
                    <br/>
                <ul>
                    <li>
                        <label for="latitude">Latitude : </label>
                        <input type="text" id="latitude" placeholder="e.g. 42.9150747" required/>
                    </li>
                    <li>
                        <label for="longitude">Longitude : </label>
                        <input type="text" id="longitude" placeholder="e.g. -77.784323" required/>
                    </li>
                </ul>
            
                <button>Get Weather</button>

            </fieldset>
        </form>

        // <script type='text/javascript' src="https://darksky.net/widget/default/25.7743,-80.1937/us12/en.js?width=100%&height=350&title=Miami, Florida&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes"></script>
    )
}


export default Weather;