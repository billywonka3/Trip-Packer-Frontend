import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Navbar(props){

    const doTheLogout = () =>{
        props.pleaseLogOut();
    }

    return(
        <nav>
            {props.theUser && 
                <Link to="/api/trips" style={{ textDecoration: 'none', margin: '10px' }}> Trips </Link>
            }

            {!props.theUser && 
                <span>
                    <button onClick = {()=> props.toggleForm('login')} > Login </button>
                    <button onClick = {()=> props.toggleForm('signup')}> Sign Up </button>
                </span>
            }

            {props.theUser && 
                <span>
                    <button onClick = {doTheLogout} > Log Out </button>
                    <br/> <span> Welcome, {props.theUser.username}. Let's start planning for your trip. </span>
                </span>
            }
        </nav>
    )
}

export default Navbar;