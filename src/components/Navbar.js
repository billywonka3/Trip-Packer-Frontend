import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){

    const doTheLogout = () =>{
        props.pleaseLogOut();
    }

    return(
        <nav>
            {!props.theUser && 
                <div>
                    <button onClick = {()=> props.toggleForm('login')} > Login </button>
                    <i> &nbsp;&nbsp; or &nbsp;&nbsp; </i>
                    <button onClick = {()=> props.toggleForm('signup')}> Sign Up </button>
                </div>
            }

            {/* {props.theTrip && 
                <span className='trip-tab'> 
                    <Link to="/trips"> {props.theTrip.title} </Link>
                </span>
            } */}
            {/* {props.theUser && 
                <span>
                    <Link to="/trips" style={{ textDecoration: 'none', color: '#00B7FF', margin: '10px' }}> My Trips </Link>
                </span>
            } */}

            {props.theUser && 
                <span className='centralMSG'> 
                    {/* Welcome <b>{props.theUser.username}</b> -  */}
                    Click on <Link to="/trips" style={{ textDecoration: 'none', color: '#00B7FF', margin: '10px' }}> My Trips </Link> to get started
                </span>
            }

            {props.theUser && 
                <span className="logout-btn">
                    <button onClick = {doTheLogout} > Log Out </button>
                </span>
            }
        </nav>
    )
}

export default Navbar;