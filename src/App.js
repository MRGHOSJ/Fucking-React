import React, { Component } from 'react';
import Hello from './Hello';
import Whynot from './Whynot';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
      <Hello name="YAssin" age="15" prof="idk :P" cdn="256345564" />
      </div>
    );
  }
  constructor(props)
    {
        super(props);
        this.state = { attribute : "value" };
    }
}

export default App;
