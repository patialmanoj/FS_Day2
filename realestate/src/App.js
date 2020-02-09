import React from 'react';
import  Header from './components/header';
import { Switch, Route } from "react-router-dom";
import  HomePage from "./main-page";
import AboutUs from "./second-page";

class App extends React.Component {
    
    render() { 
        return ( 
        <div className="container">
            <Header subtitle="Help in Search Your Aashiyana around the World."/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/aboutus" component={AboutUs} />
            </Switch>
        </div>
        );
    }
}
 
export default App;