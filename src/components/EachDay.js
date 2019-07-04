import React from 'react';

class EachDay extends React.Component{
  constructor(props) {
   super(props);
 }

 render() {
   const { day } = this.props;
   const {forecastday} = this.props;
   if (!day) return null;
   return (
     <div>
       <div>{day.avgtemp_c}°</div>
       <div>{day.condition.text}</div>
       <div>
         <img src={day.condition.icon} />
       </div>
     </div>
   );
 }



}
export default EachDay;
