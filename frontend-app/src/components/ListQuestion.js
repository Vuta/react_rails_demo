// require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import Question from './Question';

class ListQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listQuestion: [],
      step: 0
    }
    this.startQuiz = this.startQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.changeAnswers = this.changeAnswers.bind(this);
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

  startQuiz() {
    let id = this.props.match.params.id;
    $.get("http://localhost:3000/api/topics/" + id, (data, status) => {
      console.log(data);
      this.setState({
        listQuestion: data,
        step: 1
      });
    });
  }

  nextQuestion() {
    this.setState((prevState) => ({
      step: prevState.step + 1
    }));
  }

  prevQuestion() {
    this.setState((prevState) => ({
      step: prevState.step - 1
    }));
  }

  changeAnswers() {
    this.setState({
      step: 1
    })
  }

  render() {
    // console.log(this.props.params.id)
    let questions = this.state.listQuestion.map((question, index) => {
      return <Question key={index} question={question} index={index} />
    });

    let startButton = null;
    let nextButton = null;
    let backButton = null;

    if (this.state.step === 0) {
      startButton = <button onClick={this.startQuiz}>Start the quiz</button>;
    }

    if (this.state.step > 0 && this.state.step <= this.state.listQuestion.length) {
      nextButton = <button onClick={this.nextQuestion}>Next</button>;
      backButton = <button onClick={this.prevQuestion}>Back</button>;
    }

    let submitPhase = null;
    if (this.state.step > this.state.listQuestion.length) {
      submitPhase = (
        <div>
          {questions}
          <button onClick={this.changeAnswers}>Change Answers</button>
          <button>Submit</button>
        </div>
      );
    }

    return (
      <div className="question-component">
        <h1>10 questions</h1>
        {startButton}
        {questions[this.state.step - 1]}
        {backButton}
        {nextButton}
        {submitPhase}
      </div>
    );
  }

}

export default ListQuestion;
