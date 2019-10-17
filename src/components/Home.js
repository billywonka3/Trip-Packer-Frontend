import React from 'react';
import {Link} from 'react-router-dom';

function Home(props){
    return (
        <body>
            {!props.theUser && 
                    <div className= "landing-page">
                        <div className= "landing-text">
                            <h1> Trip-Packer </h1>
                            <h3> Customizable Lists for Packing your Bags & Prepping your Home </h3>
                        </div>
                    </div>
            }

            {!props.theUser && 
                    <div className="image-row landing-wrap">
                        <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="ergo-circle" src="images/plane-trip.jpeg"/>>
                            </div>
                            <p> Create a Trip </p> 
                        </div>
                        <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="ergo-circle" src="images/check-weather-1.jpg"/>> 
                            </div>
                            <p> Check the Weather </p> 
                        </div>
                        <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="ergo-circle" src="images/pack-bags1.jpg"/>> 
                            </div>
                            <p> Pack Your Bags </p>
                        </div>
                        <div className="circle-divs">
                            <div className="image-cropper"> 
                                <img className="ergo-circle" src="images/Preparing-Your-Home-for-Your-Trip.jpg"/>> 
                            </div>
                            <p> Prep your Home </p>
                        </div>
                     </div>
            }

                    {/* <div className="img-stripe">
                        <showHousehold src="/images/laotzu-1000-miles.jpg"/>
                        <img src="/images/backgrounds/maldives.jpeg"/>
                        <img src="/images/backgrounds/kyoto-yakasa-pagoda.jpg"/>
                        <img src="/images/backgrounds/Torii-Gate1.jpg"/>
                        <img src="/images/backgrounds/Fushimi Inari1.jpg"/>
                        <img src="/images/backgrounds/broken-bay.jpg"/>
                    </div> */}

                    {/* <div> <img src="/images/laotzu-1000-miles.jpg"/> </div> */}

            }
        </body>
    )
}

export default Home;