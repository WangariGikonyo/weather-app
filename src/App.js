import React from 'react';
import Heading from './components/Heading';
import LocationForm from './components/LocationForm';
import Weather from './components/Weather';
import './App.css';

const API_KEY = 'f34f1a4ac483a6f4eaa262533c01847f';
class App extends React.Component{
  getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api.json();
    console.log(data);

  }
  render(){
    return(
      <div>
        <Heading />
        <LocationForm getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
