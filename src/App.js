import React, { Component } from 'react';
// import fetch from 'fetch';
import logo from './images/cyf.png';
import './styles/App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './CountryDetails';
import YearList from './components/YearList';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
      countriesList: [],
      countryData: {},
      YearList : [],
      year: null,
      country: null
      
    }

  }
   changeCountryList = (event) => {
         this.setState({country: event.target.value});
     }
   changeYearList = (event) => {
         this.setState({year: event.target.value});
     }
     onSubmit = () => {
      console.log(this.state.country);
      console.log(this.state.year);
      this.getCountryStatistics(this.state.country, this.state.year)
     }
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>UNHCR Data Browser</h2>
        </div>
        <div className="app-search-box">
          <div>
            <CountriesList countries={this.state.countriesList}  changeing={this.changeCountryList}/>
          </div>
          <div>
            <YearList years={this.state.YearList} changeing={this.changeYearList}/>
          </div>
          <div>
            <button onClick={this.onSubmit} type="submit">Retrieve Country statistics</button>
          </div>
        </div>
        <CountryDetails details={this.state.countryData}/>
      </div>
    );
  }
  componentDidMount() {
      this.getCountriesList();
      // this.getCountryStatistics('TUR', '2013');
      this.getYearList();
  }
  getCountriesList() {
    fetch('http://data.unhcr.org/api/stats/country_of_residence.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ countriesList: data } );
      });
  }
   getYearList() {
    fetch('http://data.unhcr.org/api/stats/time_series_years.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ YearList: data } );
      });
  }
  getCountryStatistics(countryCode, year) {
    const url = 'http://data.unhcr.org/api/stats/demographics.json?country_of_residence=' + countryCode + '&year=' + year;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      //The data comes back as an array, we take the first element of the array as it contains our country data
      this.setState({ countryData: data[0]})
    })
  }
}

export default App;
