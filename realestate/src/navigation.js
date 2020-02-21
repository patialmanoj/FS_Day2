import React from 'react';
import {NavLink} from 'react-router-dom';

export default function(){
    return(
          <div class="nav_container">
                <div class="nav_inner">
                    <div class="nav_ele">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </div>
                    |
                    <div  class="nav_ele">  
                        <NavLink to="/aboutus">
                            About Us
                        </NavLink>
                    </div>
                </div>
            </div>    
         )
}
