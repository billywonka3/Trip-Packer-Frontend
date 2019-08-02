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

            {props.theUser && 
                <script type='text/javascript' src="https://darksky.net/widget/default/25.7743,-80.1937/us12/en.js?width=100%&height=350&title=Miami, Florida&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes"></script>
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