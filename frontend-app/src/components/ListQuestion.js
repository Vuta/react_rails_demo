// require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';

class ListQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuestion: []
    }
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    $.get("http://localhost:3000/api/topics/" + id, (data, status) => {
      console.log(data);
      this.setState({
        listQuestion: data
      })
    });
  }

  render() {
    // console.log(this.props.params.id)
    let questions = this.state.listQuestion.map((question, index) => {
      return <p key={index}>{question.content}</p>
    });

    return (
      <div className="question-component">
        <h1>10 questions</h1>
        <button>Start the quiz</button>
				{questions}
      </div>
    );
  }
}

export default ListQuestion;
