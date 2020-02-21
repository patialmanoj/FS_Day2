import React from "react";
import "./main-page.css";
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import SearchResults from './search-results';
import HouseDetail from './house';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredHouse: null, 
      countries : [],
      activeHouse: null,
      filteredHouses: null,
    };
    this.allHouses= null;
  }

  componentDidMount() {
    this.fetchHouses();
  }
  //http://localhost:3000/houses/list
  ///houses.json
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
  filterHouses =(country) =>{
    //--2
    this.setState({activeHouse:null}); 
    const filteredHouses = this.allHouses.filter(h=> h.country === country);
     this.setState({filteredHouses});
     this.setState({country}); 
  }

  setActiveHouse =(house)=>{
    this.setState({activeHouse:house})
  }

  render() {
    let activeComponent = null;
    if (this.state.country)
        activeComponent = <SearchResults country={this.state.country} filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse} />;
    if (this.state.activeHouse)
        activeComponent = <HouseDetail house={this.state.activeHouse} />;
    if (!activeComponent)
        activeComponent = <FeaturedHouse house={this.state.featuredHouse} />;

    return (
      <div >
        <HouseFilter 
          countries={this.state.countries}
          filterHouses= {this.filterHouses}
        />
        {/* <FeaturedHouse 
          house={this.state.featuredHouse}
        /> */}
        {activeComponent}
      </div>
    );
  }
}

export default HomePage;
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
