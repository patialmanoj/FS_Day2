import React from "react";
import logo from "./logo1.svg";
import Navigation from "../navigation";




const Header = (props) => (
  <header className="row header">
    <div className="col-md-4">
      <img src={logo} className="logo" alt="logo"></img>
      <span>Dream Home</span>
    </div>
    <div className="col-md-8 mt-5 subtitles">
        {props.subtitle} 
    </div>
    <Navigation/>
  </header>
);
export default Header;
