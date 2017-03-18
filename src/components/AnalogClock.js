import React from 'react';

class AnalogClock extends React.Component {

  componentDidMount() {
    this.someCanvas = document.getElementById('someCircle');
    this.someContext = this.someCanvas.getContext("2d");
    this.drawClockLayout();
  }
  drawClockLayout(){
    this.someContext.beginPath();
    this.someContext.arc(250,250,250,0,2*Math.PI);
    this.someContext.stroke();
  }
  render() {
    return (
      <div>
        <span>{this.props.hours}:</span>
        <span>{this.props.minutes}:</span>
        <span>{this.props.seconds}</span>
        <span>{this.props.ampm}</span>
        <canvas id="someCircle" height='500' width='500'></canvas>
      </div>
    );
  }

}

export default AnalogClock;
