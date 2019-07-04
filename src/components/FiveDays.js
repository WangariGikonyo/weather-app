import React from 'react';
import EachDay from './EachDay.js';


class FiveDays extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { forecastdays } = this.props;
    return (
      <div className='five-days'>
          {forecastdays &&
            forecastdays.map((day, index) => {
              return <EachDay fday={day} key={index} />;
            })}
      </div>
    );


  }
}
export default FiveDays;
