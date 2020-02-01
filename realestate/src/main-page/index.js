import React from "react";
import "./main-page.css";
import Header from "./components/header";
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredHouse: null, 
      countries : []
    };
    this.allHouses= null;
  }

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch("/houses.json")
      .then(rsp => rsp.json())
      .then(allHouses => {
        this.allHouses = allHouses;
          this.determineFeaturedHouse();
          this.determineUniqueCountries();
      });
  };
// 2nd step
  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    };
  };

  determineUniqueCountries = () => {
    const countries = this.allHouses ? Array.from( new Set(this.allHouses.map(h=> h.country))) : [];
    countries.unshift(null);
    this.setState({countries});
  }

  render() {
    return (
      <div className="container">
        <Header subtitle="Help in Search Your Aashiyana around the World."/>
        <HouseFilter countries={this.state.countries}/>
        <FeaturedHouse house={this.state.featuredHouse}
          countries={this.state.countries}
        />
      </div>
    );
  }
}

export default App;
// function App() {
//   return (
// <div className="container">
//   <Header subtitle= "Help in Search Your Aashiyana across the India."/>
// </div>

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }
