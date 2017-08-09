import React, {Component} from 'react';

class ButtonWithSingleFunction extends Component {
  propTypes = {}

  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click = function() {
    this.props.onClick(this.props.value + 1);
  }

  render() {
    return (<input type="Button" value={this.props.name} onClick={this.click}/>);
  }

}

export default ButtonWithSingleFunction;
