import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Heading from './Heading';
import LocationForm from './LocationForm';
import Weather from './Weather';
import FiveDays from './FiveDays';
import Look from './Look';


const API_KEY = 'c9ff504cde8549e886991433190407 ';
class LandingPage extends React.Component{
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


    const api = await fetch(`https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=4
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
          <div class='main'>
            <div>
              <Weather
                temperature={this.state.temperature}
                city = {this.state.city}
                country = {this.state.country}
                description={this.state.description}
                icon={this.state.icon}
                date={this.state.date}
                error={this.state.error}
              />
            </div>
            <div>
              <LocationForm getWeather={this.getWeather} />
            </div>
          </div>
          <div className='five'>
            <FiveDays
              forecastdays={this.state.forecastdays}
            />
          </div>
      </div>


    );
  }
}

export default LandingPage;
