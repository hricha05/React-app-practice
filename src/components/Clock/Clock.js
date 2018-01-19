import React, { Component } from 'react';
import './clock.css';

export default class Clock extends Component {
  
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  
  // function FormattedDate(props) {
  //   return <h2 className="clock">It is {this.state.date.toLocaleTimeString()}.</h2>;
  // }
  
  render() {
    return (
      <div className="container">
        <h1 className="text">Hello, World !</h1>
        <h2 className="clock">It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}