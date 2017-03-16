import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var dateTime = new Date();
    this.state = {
      hours: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds()
    };
  }

  componentDidMount() {
    // setTimeout(this.updateDateTime.bind(this), 5000);
    setInterval(this.updateDateTime.bind(this), 1000)
  }

  updateDateTime() {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes().toLocaleString("US",{minimumIntegerDigits:2});
    var second = dateTime.getSeconds().toLocaleString("US",{minimumIntegerDigits:2});
//    var addZero = function(digit){
  //    var num = "0" + digit.toString();
    //  return num;
    //}
    //if(second<10){
      //second = addZero(second);
    //}
    var ampm;
    if(hour>11){
      ampm=" PM";
    }
    else {
      ampm=" AM";
    }
    if(hour>11){
      hour-=12;
    }
    this.setState({
      hours: hour,
      minutes: minute,
      seconds: second,
      ampm1: ampm
    });
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.hours}:</span>
        <span>{this.state.minutes}:</span>
        <span>{this.state.seconds}</span>
        <span>{this.state.ampm1}</span>

      </div>
    );
  }
}

export default App;
