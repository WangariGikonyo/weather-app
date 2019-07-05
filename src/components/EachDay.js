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
       <div class='col-md-3'>{new Date(fday.date_epoch*1000).toDateString()}</div>
        <div class='col-md-3'>{fday.day.avgtemp_c}°</div>
       <div class='col-md-3'>{fday.day.condition.text}</div>
       <div class='col-md-3 condition'>
         <img src={fday.day.condition.icon} />
       </div>
     </div>
   );
 }



}
export default EachDay;
