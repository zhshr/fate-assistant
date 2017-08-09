import React, { Component } from 'react';
import EireiTab from "./EireiTab";
import "./EireiBar.css";

class EireiBar extends Component {

  render() {
    var bar = [];
    for (var i = 0; i < 7; i++) {
      bar.push(<EireiTab id={i} />);
    }
    return (
      <div className="EireiBar">
        {bar}
      </div>
    );
  }

}

export default EireiBar;
