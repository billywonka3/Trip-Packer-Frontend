import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(props){

    const doTheLogout = () =>{
        props.pleaseLogOut();
    }

    return(
        <nav>
            {props.theUser && 
                <span>
                    <Link to="/api/trips" style={{ textDecoration: 'none', color: '#00B7FF', margin: '10px' }}> My Trips </Link>
                </span>
            }

            {!props.theUser && 
                <span>
                    <button onClick = {()=> props.toggleForm('login')} > Login </button>
                    <button onClick = {()=> props.toggleForm('signup')}> Sign Up </button>
                </span>
            }
            
            {props.theUser && 
                <span className='centralMSG'> Welcome, {props.theUser.username}. Let's plan for your trip. </span>
            }

            {props.theUser && 
                <span>
                    <button onClick = {doTheLogout} > Log Out </button>
                </span>
            }
        </nav>
    )
}

export default Navbar;