import React from 'react';

class Option extends React.Component {

  render() {
  	let content = this.props.option.content;
  	if (this.props.answer === content) {
  		$('input[value=' + '"' + content + '"' + ']').prop('checked', true);
  	}

    return (
      <div className="option-component">
      	<input type="radio" value={content} name="answer" onChange={this.props.setAnswer} />
      	{content}
      </div>
    );
  }

}

export default Option;