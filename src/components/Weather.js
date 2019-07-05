import React from 'react';

const Weather = (props)=>{
    return(
      <div className='weather'>
      {props.date && <p>{props.date}</p>}
      {props.city && props.country && <p>Location:{props.country},{props.city}</p>}
      {props.temperature && <p>temperature:{props.temperature}°</p>}
      {props.description && <p>{props.description}</p>}
      {props.icon && <img src={props.icon} />}
      {props.error && <p>{props.error}</p>}
      </div>
    );

}
export default Weather;
