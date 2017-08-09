'use strict'

import React, {Component} from 'react';
import "./MainFrame.css";
import ButtonWithSingleFunction from "./ButtonWithSingleFunction";
import EireiBar from "./EireiBar";

class MainFrame extends Component {

  render() {
    return (
      <div id="MainFrame">
        {this.props.value}
        <ButtonWithSingleFunction
          name="test"
          value={this.props.value}
          onClick={this.props.onChange}/>
        <EireiBar />
      </div>
    );
  }
}

export default MainFrame;
