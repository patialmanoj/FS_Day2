import React from 'react';
import logo from './logo1';

const Header=() =>{
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo"></img>
        </div>
        <div className="col-md-7 mt-5 subtitles">
            Help in Search Your Aashiyana across the India.
        </div>
    </header>
}