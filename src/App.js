import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
  }

  componentDidMount() {
    // setTimeout(this.updateDateTime.bind(this), 5000);
    setInterval(this.updateDateTime.bind(this), 1000)
  }

  updateDateTime() {
    this.setState({
      dateTime: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.dateTime.toString()}
      </div>
    );
  }
}

export default App;
