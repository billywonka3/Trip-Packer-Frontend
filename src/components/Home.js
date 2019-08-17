import React from 'react';
import {Link} from 'react-router-dom';

function Home(props){
    return (
        <div>
            {props.theUser && 
                <span>
                    <Link to="/api/trips" style={{ textDecoration: 'none', color: '#00B7FF', margin: '10px' }}> To begin, vist the "My Trips" page </Link>
                </span>
            }

            {!props.theUser && 
                <div>
                    <div className= "landing-page">
                        <div className= "landing-text">
                            <h2> Travelling is about experiencing new things, and being unprepared can mean missed opportunities. </h2>
                            <h2> Trip-Packer helps you generate customizable packing checklists to make sure you don’t miss a thing. </h2>
                        </div>
                        {/* <div >
                            <img src="/images/laoTzu-miles.jpg"/>
                        </div> */}
                    </div>
                    <div className="img-stripe">
                        <img src="/images/backgrounds/maldives.jpeg"/>
                        <img src="/images/backgrounds/kyoto-yakasa-pagoda.jpg"/>
                        <img src="/images/backgrounds/Torii-Gate1.jpg"/>
                        <img src="/images/backgrounds/Fushimi Inari1.jpg"/>
                        <img src="/images/backgrounds/broken-bay.jpg"/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;