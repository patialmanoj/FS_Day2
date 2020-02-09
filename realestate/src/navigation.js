import React from 'react';
import {NavLink} from 'react-router-dom';

export default function(){
    return(
          <div class="nav_container">
                <ul class="nav_inner">
                    <li>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus">
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </div>    
         )
}
