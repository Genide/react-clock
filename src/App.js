import React, { Component } from 'react';
import './App.css';
import ClockDigital from './components/ClockDigital.js';
import ClockCanvas from './components/ClockCanvas.js';

class App extends Component {
  constructor(props) {
    super(props);
    var dateTime = new Date();
    this.state = {
      hours: dateTime.getHours(),
      minutes: dateTime.getMinutes(),
      seconds: dateTime.getSeconds(),
      milliseconds: dateTime.getMilliseconds()
    };
  }

  componentDidMount() {
    // setTimeout(this.updateDateTime.bind(this), 5000);
    setInterval(this.updateDateTime.bind(this), 1000/60);
  }

  updateDateTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var milliseconds = dateTime.getMilliseconds()

    this.setState({
      hours,
      minutes,
      seconds,
      milliseconds
    });
  }

  render() {
    return (
      <div className="App">
        <ClockDigital
          hour={this.state.hours}
          minute={this.state.minutes}
          second={this.state.seconds}
        />
        <ClockCanvas
          hour={this.state.hours}
          minute={this.state.minutes}
          second={this.state.seconds}
          milliseconds={this.state.milliseconds}
          width={500}
          height={500}
        />
      </div>
    );
  }
}

export default App;
