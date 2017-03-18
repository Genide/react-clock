import React from 'react';

class ClockDigital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: this.formattedHour(props.hour),
      minute: this.formattedMinute(props.minute),
      second: this.formattedSecond(props.second),
      ampm: this.formatedAmPm(props.hour)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      hour: this.formattedHour(nextProps.hour),
      minute: this.formattedMinute(nextProps.minute),
      second: this.formattedSecond(nextProps.second),
      ampm: this.formatedAmPm(nextProps.hour)
    });
  }

  formattedHour(hour) {
    var formattedHour = hour
    if (formattedHour > 11) {
      formattedHour -= 12;
      if (formattedHour === 0) formattedHour += 1;
    }
    return formattedHour;
  }

  formattedMinute(minute) {
    return minute.toLocaleString("US",{minimumIntegerDigits:2});
  }

  formattedSecond(second) {
    return second.toLocaleString("US",{minimumIntegerDigits:2});
  }

  formatedAmPm(hour) {
    return (hour > 11) ? "PM" : "AM";
  }

  render() {
    return (
      <div>
        <span>{this.state.hour}:</span>
        <span>{this.state.minute}:</span>
        <span>{this.state.second} </span>
        <span>{this.state.ampm}</span>
      </div>
    );
  }

}

export default ClockDigital;
