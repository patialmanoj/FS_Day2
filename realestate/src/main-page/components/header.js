import React from "react";
import logo from "../logo1.svg";

const Header = (props) => (
  <header className="row header">
    <div className="col-md-3">
      <img src={logo} className="logo" alt="logo"></img>
    </div>
    <div className="col-md-9 mt-5 subtitles">
        {props.subtitle} 
    </div>
  </header>
);
export default Header;
