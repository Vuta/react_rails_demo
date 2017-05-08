import React from 'react';
import Option from './Option';

class Question extends React.Component {

	constructor(props) {
		super(props);
	}

  render() {
  	let options = this.props.question.options.map((option, index) => {
	  	return <Option key={option.id} option={option} setAnswer={() => {this.props.setAnswer(option)}} isChecked={this.props.question.answer == option} />
		});

    return (
      <div className="topic-component">
	  		<h4>{this.props.index + 1}. {this.props.question.content}</h4>
	  		{options}
      </div>
    );
  }

}

export default Question;