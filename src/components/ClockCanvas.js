import React from 'react';

class ClockCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    let diameter = (props.width > props.height) ? props.height : props.width;
    this.radius = diameter/2;
  }

  componentDidMount() {
    this.canvas = document.getElementById("clockCanvas");
    this.ctx = this.canvas.getContext("2d");
    // this.ctx.font = "30px Arial";
    // this.ctx.fillRect(0,0,150,75);
    this.update(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log(nextProps);
    this.update(nextProps);
  }

  update(nextProps) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle="rgba(0,0,0,1)";
    this.ctx.save();
    this.drawClockLayout();
    this.drawHourHand(nextProps);
    this.drawMinuteHand(nextProps);
    this.drawSecondHand(nextProps);
    // this.ctx.fillText(nextProps.hour, 10, 50);
    // this.ctx.fillText(nextProps.minute, 50, 50);
    // this.ctx.fillText(nextProps.second, 90, 50);
    this.ctx.restore();
  }

  drawClockLayout() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.props.width/2, this.props.height/2, this.radius, 0, 2*Math.PI);
    this.ctx.stroke();
    this.drawTicks();
    this.ctx.restore();
  }

  drawTicks() {
    let centerWidth = this.props.width/2;
    let centerHeight = this.props.height/2;
    var tickSize;
    this.ctx.save();
    this.ctx.translate(centerWidth,centerHeight);
    this.ctx.rotate(-Math.PI/30);
    this.ctx.beginPath();
    for (var i = 0; i < 60; i++) {
      tickSize = (i % 5 === 0) ? centerWidth-(this.radius/10) : this.radius-(this.radius/30);
      this.ctx.rotate(Math.PI/30);
      this.ctx.moveTo(0, tickSize);
      this.ctx.lineTo(0, this.radius);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  drawHourHand(nextProps) {
    let centerWidth = this.props.width/2;
    let centerHeight = this.props.height/2;
    var offset = nextProps.hour + nextProps.minute/60;
    var angle = Math.PI/6 * offset;
    this.ctx.save();
    this.ctx.lineWidth = 5;
    this.ctx.translate(centerWidth,centerHeight);
    this.ctx.rotate(angle);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.radius/2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawMinuteHand(nextProps) {
    let centerWidth = this.props.width/2;
    let centerHeight = this.props.height/2;
    var offset = nextProps.minute/60 + nextProps.second/3600;
    var angle = Math.PI * 2 * offset;
    this.ctx.save();
    this.ctx.lineWidth = 3;
    this.ctx.translate(centerWidth,centerHeight);
    this.ctx.rotate(angle);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.radius * .8);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawSecondHand(nextProps) {
    let centerWidth = this.props.width/2;
    let centerHeight = this.props.height/2;
    var offset = nextProps.second/60 + nextProps.milliseconds/60000;
    var angle = Math.PI * 2 * offset;
    this.ctx.save();
    this.ctx.strokeStyle="rgba(255,0,0,1)";
    this.ctx.translate(centerWidth,centerHeight);
    this.ctx.rotate(angle);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.radius * .9);
    this.ctx.stroke();
    this.ctx.restore();
  }

  render() {
    return (
      <canvas id="clockCanvas" width={this.props.width} height={this.props.height}></canvas>
    );
  }
}

export default ClockCanvas;