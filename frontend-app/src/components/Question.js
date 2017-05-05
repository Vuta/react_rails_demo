import React from 'react';
import Option from './Option';

class Question extends React.Component {

	constructor(props) {
		super(props);
		this.setAnswer = this.setAnswer.bind(this);
	}

	setAnswer(event) {
		this.setState({
			answer: event.target.value,
		});
	}

  render() {
  	let options = this.props.question.options.map((option, index) => {
	  	return <Option key={index} option={option} setAnswer={this.setAnswer} />
		});

    return (
      <div className="topic-component">
	  		<h4>{this.props.index + 1}. {this.props.question.content}</h4>
	  		<form action="">{options}</form>
      </div>
    );
  }

}

export default Question;