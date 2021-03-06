import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Heading from './components/Heading';
import LocationForm from './components/LocationForm';
import Weather from './components/Weather';
import FiveDays from './components/FiveDays';
import Look from './components/Look';
import './App.css';

const API_KEY = 'c9ff504cde8549e886991433190407 ';
class App extends React.Component{
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    description:undefined,
    icon:undefined,
    error:undefined,
    day:undefined,
    date:undefined,
    forecastdays:undefined,
  }
  getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;


    const api = await fetch(`http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=4
`);
    const data = await api.json();
    if(city){
      console.log(data);
      this.setState({
        temperature:data.current.temp_c,
        city:data.location.name,
        country:data.location.country,
        description:data.current.condition.text,
        day:data.current.is_day,
        icon:data.current.condition.icon,
        forecastdays:data.forecast.forecastday,
        date:data.forecast.forecastday.date_epoch,
        error:''
      })
    }else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        description:undefined,
        icon:undefined,
        day:undefined,
        forecastdays:undefined,
        date:undefined,
        error:'Enter the location'
      })
    }
  }
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/look" component={Look} />
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
