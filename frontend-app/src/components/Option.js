import React from 'react';
import { Link } from 'react-router-dom';

class Option extends React.Component {


  render() {
    return (
      <div className="option-component">
      	<input type="radio" value={this.props.option.content} name="answer" />
      	{this.props.option.content}
      </div>
    );
  }
}

export default Option;