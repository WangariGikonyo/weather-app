import React from 'react';
import EachDay from '/home/somethinginc/Documents/practicals/weather-app/src/components/EachDay.js';


class FiveDays extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { forecastdays } = this.props;
    return (
      <div>
          {forecastdays &&
            forecastdays.map((day, idx) => {
              return <EachDay day={day.day} key={idx} />;
            })}
      </div>
    );


  }
}
export default FiveDays;
