import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import MainFrame from "./FA/MainFrame";

var FA_DIR = "./FA/"

class App extends Component {

  state = {
    value: 0
  }

  onChange(value) {
    this.setState({value: value});
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <MainFrame value={this.state.value} onChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

export default App;
