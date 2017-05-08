// require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import Answer from './Answer';
import Result from './Result';

class ListQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listQuestion: [],
      step: 0,
      totalScore: 0,
      showResult: false
    }

    this.startQuiz = this.startQuiz.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.changeAnswers = this.changeAnswers.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    $.get("http://localhost:3000/api/topics/" + id, (data) => {
      this.setState({
        listQuestion: data
      });
    });
  }

  startQuiz() {
    this.setState({
      step: 1
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

  setAnswer(option) {
    let listQuestion = this.state.listQuestion;
    listQuestion[this.state.step - 1]['answer'] = option;
    if (listQuestion[this.state.step - 1]['answer'].is_right_choice) {
      listQuestion[this.state.step - 1]['answer']['score'] = 1
    } else {
      listQuestion[this.state.step - 1]['answer']['score'] = 0
    }

    this.setState({
      listQuestion: listQuestion
    })

  }

  handleSubmit() {
    let totalScore = 0;

    this.state.listQuestion.map((question, index) => {
      if (question.answer) {
        totalScore += question.answer.score;
      }
    })
    this.setState({
      totalScore: totalScore,
      showResult: true
    })
  }

  render() {
    // console.log(this.props.params.id)
    let questions = this.state.listQuestion.map((question, index) => {
      return <Question key={question.id} question={question} index={index} setAnswer={this.setAnswer} />
    });

    let startQuiz = null;
    let nextButton = null;
    let backButton = null;
    let submitPhase = null;

    // start quiz
    if (this.state.step === 0) {
      startQuiz = (
        <div>
          <h1>This quiz has {this.state.listQuestion.length} questions</h1>
          <button onClick={this.startQuiz}>Start the quiz</button>
        </div>
      );
    }

    // next, back question button
    if (this.state.step > 0 && this.state.step <= this.state.listQuestion.length) {
      nextButton = <button onClick={this.nextQuestion}>Next</button>;
      if (this.state.step > 1) {
        backButton = <button onClick={this.prevQuestion}>Back</button>;
      }
    }

    // change answer, submit button
    if (this.state.step > this.state.listQuestion.length) {
      let answers = this.state.listQuestion.map((question, index) => {
        if (question.answer) {
          return <Answer key={question.answer.id} question={question} answer={question.answer.content} index={index} />
        }
      });

      submitPhase = (
        <div>
          <h2>Review your answers</h2>
          {answers}
          <button onClick={this.changeAnswers}>Change Answers</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }

    if (this.state.showResult) {
      return (
        <div>
          <Result totalScore={this.state.totalScore} length={this.state.listQuestion.length} />
          <Link to="/topics"><button>Continue</button></Link>
        </div>
      );
    }

    return (
      <div className="question-component">
        {startQuiz}
        {questions[this.state.step - 1]}
        {backButton}
        {nextButton}
        {submitPhase}
      </div>
    );
  }

}

export default ListQuestion;