// require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import Question from './Question';

class ListQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listQuestion: []
      // step: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    // let id = this.props.match.params.id;
    // $.get("http://localhost:3000/api/topics/" + id, (data, status) => {
    //   console.log(data);
    //   this.setState({
    //     listQuestion: data
    //   })
    // });
  }

  handleClick() {
    let id = this.props.match.params.id;
    $.get("http://localhost:3000/api/topics/" + id, (data, status) => {
      console.log(data);
      this.setState({
        listQuestion: data
        // step: prevState.step + 1
      });
    });
  }

  render() {
    // console.log(this.props.params.id)
    let questions = this.state.listQuestion.map((question, index) => {
      return <Question key={index} question={question} />
    });

    return (
      <div className="question-component">
        <h1>10 questions</h1>
        <button onClick={this.handleClick}>Start the quiz</button>
        {questions}
      </div>
    );
  }

}

export default ListQuestion;
