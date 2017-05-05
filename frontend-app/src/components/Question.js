import React from 'react';
import { Link } from 'react-router-dom';
import Option from './Option';

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
		// let id = this.props.match.params.id;
		// let topic_id = this.props.match.params.topic_id;
		// let question_path = "http://localhost:3000/api/topics/" + topic_id + "/questions/" + id;
		// $.get(question_path, (data, status) => {
		// 	// data.options.map((option, index) => {
		// 	// 	console.log(option.content)
		// 	// })
		// 	this.setState({
		// 		question: data
		// 	})
		// })
	}

  render() {
  	let options = this.props.question.options.map((option, index) => {
	  	return <Option key={index} option={option}/>
		});

    return (
      <div className="topic-component">
	  		<p>{this.props.index + 1}.{this.props.question.content}</p>
	  		<form action="">{options}</form>
      </div>
    );
  }

}

export default Question;