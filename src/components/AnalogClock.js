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
    this.drawTicks();
  }
  drawTicks() {
    this.someContext.save();
    this.someContext.translate(250, 250);
    for (var i = 0; i < 4; i++) {
      this.someContext.rotate(Math.PI/2);
      this.someContext.beginPath();
      this.someContext.moveTo(0, 0);
      this.someContext.lineTo(0, -250);
      this.someContext.stroke();
    }
    this.someContext.restore();
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
