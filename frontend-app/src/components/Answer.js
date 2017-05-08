import React from 'react';

class Answer extends React.Component {

  render() {

    return (
    <div>
	    <h4>{this.props.index + 1}.{this.props.question.content}</h4>
	    <p>{this.props.answer}</p>
    </div>
    );
  }

}

export default Answer;