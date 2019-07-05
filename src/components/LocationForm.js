import React from 'react';

class LocationForm extends React.Component{
  render(){
    return(
      <div className='form'>
        <form onSubmit={this.props.getWeather}>
          <input type='text' name='city' placeholder='type Location....'/>
          <button>check weather</button>
        </form>
      </div>
    );
  }
}
export default LocationForm;
