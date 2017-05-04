import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: {
				options: []
			}
		}
	}
	componentWillMount() {
		let id = this.props.match.params.id;
		let topic_id = this.props.match.params.topic_id;
		let question_path = "http://localhost:3000/api/topics/" + topic_id + "/questions/" + id;
		$.get(question_path, (data, status) => {
			// data.options.map((option, index) => {
			// 	console.log(option.content)
			// })
			this.setState({
				question: data
			})
		})
	}

  render() {
  	let options = this.state.question.options.map((option, index) => {
	  	return <div key={index}><input type="radio" value={option.content} name="answer" />{option.content}</div>
		});
    return (
      <div className="topic-component">
	  		<p>{this.state.question.content}</p>
	  		<form action="">{options}</form>
      </div>
    );
  }
}

export default Question;