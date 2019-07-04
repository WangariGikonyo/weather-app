import React from 'react';

const Weather = (props)=>{
    return(
      <div>
      {props.city && props.country && <p>Location:{props.country},{props.city}</p>}
      {props.temperature && <p>temperature:{props.temperature}°</p>}
      {props.humidity && <p>Humidity:{props.humidity}</p>}
      {props.description && <p>Situation:{props.description}</p>}
      {props.icon && <img src={props.icon} />}
      {props.error && <p>{props.error}</p>}

      {props.day && <p>{props.day}</p>}
      </div>
    );

}
export default Weather;
