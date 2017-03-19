import React from 'react';

class DigitalClock extends React.Component {

  // formatTime(){
  //   var ampm;
  //
  //   if(hour===0){
  //     ampm=" AM";
  //     hour+=12;
  //   }
  //   else if (hour<12) {
  //     ampm=" AM";
  //   }
  //   else if (hour===12) {
  //     ampm=" PM";
  //   }
  //   else{
  //     ampm=" PM";
  //     hour-=12;
  //   }
  // }
  render() {
    return (
      <div>
        <span>{this.props.hours}:</span>
        <span>{this.props.minutes}:</span>
        <span>{this.props.seconds}:</span>
        <span>{this.props.milliseconds}</span>
        <span>{this.props.ampm}</span>
      </div>
    );
  }

}

export default DigitalClock;
