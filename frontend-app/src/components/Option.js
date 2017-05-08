import React from 'react';

class Option extends React.Component {

  render() {
  	let content = this.props.option.content;

    return (
      <div className="option-component">
      	<input type="radio" value={content} name="answer" onChange={this.props.setAnswer} checked={this.props.isChecked} />
      	{content}
      </div>
    );
  }

}

export default Option;