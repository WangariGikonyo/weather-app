import React from 'react';

class LocationForm extends React.Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type='text' name='country' placeholder='country' />
          <input type='text' name='city' placeholder='city'/>
          <button>check weather</button>
        </form>
      </div>
    );
  }
}
export default LocationForm;
