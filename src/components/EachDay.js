import React from 'react';

class EachDay extends React.Component{
  constructor(props) {
   super(props);
 }

 render() {
   const { fday } = this.props;
   const {forecastday} = this.props;
   if (!fday) return null;
   return (
     <div className='each row'>
      <div class='col-md-3'>
       <div>{new Date(fday.date_epoch*1000).toDateString()}°</div>
         <div>{fday.day.avgtemp_c}°</div>
       <div>{fday.day.condition.text}</div>
       <div>
         <img src={fday.day.condition.icon} />
       </div>
      </div>
     </div>
   );
 }



}
export default EachDay;
