import React from 'react';

class AnalogClock extends React.Component {

  componentDidMount() {
    this.someCanvas = document.getElementById('someCircle');
    this.someContext = this.someCanvas.getContext("2d");
    this.drawClockLayout(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    this.drawClockLayout(nextProps);
  }
  drawClockLayout(newProps){
    this.someContext.clearRect(0,0,500,500);
    this.someContext.beginPath();
    this.someContext.arc(250,250,250,0,2*Math.PI);
    this.someContext.stroke();
    this.drawTicks();
    this.drawHourHand(newProps);
    this.drawMinuteHand(newProps);
    this.drawSecondHand(newProps);

  }
  drawTicks() {
    this.someContext.save();
    this.someContext.translate(250, 250);
    for (var i = 0; i < 60; i++) {
      this.someContext.rotate(Math.PI/30);
      this.someContext.beginPath();
      if(i%5===4){
        this.someContext.moveTo(0, -230);
        this.someContext.lineTo(0, -250);
      }
      else{
        this.someContext.moveTo(0, -240);
        this.someContext.lineTo(0, -250);
      }
      this.someContext.stroke();
    }
    this.someContext.restore();
  }

drawHourHand(newProps){
  this.someContext.save();
  this.someContext.translate(250, 250);
  this.someContext.rotate(((newProps.hours%12)*Math.PI/6)+((newProps.minutes)*Math.PI/360));
  this.someContext.beginPath();
  this.someContext.moveTo(0,0);
  this.someContext.lineTo(0,-125);
  this.someContext.stroke();
  this.someContext.restore();
}

drawMinuteHand(newProps){
  this.someContext.save();
  this.someContext.translate(250, 250);
  this.someContext.rotate(((newProps.minutes)*Math.PI/30)+((this.props.seconds)*Math.PI/1800));
  this.someContext.beginPath();
  this.someContext.moveTo(0,0);
  this.someContext.lineTo(0,-200);
  this.someContext.stroke();
  this.someContext.restore();
}

drawSecondHand(newProps){
  this.someContext.save();
  this.someContext.translate(250, 250);
  this.someContext.rotate((newProps.seconds*Math.PI/30)+(newProps.milliseconds*Math.PI/30000));
  this.someContext.beginPath();
  this.someContext.moveTo(0,0);
  this.someContext.lineTo(0,-200);
  this.someContext.stroke();
  this.someContext.restore();
}

  render() {
    return (
      <div>
        <canvas id="someCircle" height='500' width='500'></canvas>
      </div>
    );
  }

}

export default AnalogClock;
