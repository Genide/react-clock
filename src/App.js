import React, { Component } from 'react';
import './App.css';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';

class App extends Component {
  constructor(props) {
    super(props);
    var dateTime = new Date();
    // This should be the same as your updateDateTime function
    this.state = {
      hours: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds(),
      milliseconds: dateTime.getMilliseconds()
    };
  }

  componentDidMount() {
    setInterval(this.updateDateTime.bind(this), 1000/60)
  }

  updateDateTime() {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var milli = dateTime.getMilliseconds();

    // What happens if you hour 0 or 12?
    // Can this be condensed to one if statement?


    // ampm1 is a bad name
    this.setState({
      hours: hour,
      minutes: minute,
      seconds: second,
      milliseconds: milli

    });
  }

  render() {
    return (
      <div className="App">
        <AnalogClock
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          milliseconds={this.state.milliseconds}/>
        <DigitalClock
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          milliseconds={this.state.milliseconds}/>
      </div>
    );
  }
}

export default App;
