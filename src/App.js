import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var dateTime = new Date();
    // This should be the same as your updateDateTime function
    this.state = {
      hours: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds()
    };
  }

  componentDidMount() {
    setInterval(this.updateDateTime.bind(this), 1000)
  }

  updateDateTime() {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes().toLocaleString("US",{minimumIntegerDigits:2});
    var second = dateTime.getSeconds().toLocaleString("US",{minimumIntegerDigits:2});

    // What happens if you hour 0 or 12?
    // Can this be condensed to one if statement?
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

    // ampm1 is a bad name
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
