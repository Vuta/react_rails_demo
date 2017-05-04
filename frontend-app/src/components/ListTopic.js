// require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import Topic from './Topic';

class ListTopic extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			listTopic: []
		}
	}

	componentWillMount() {
		$.get('http://localhost:3000/api/topics', (data, status) => {
       	this.setState({
       		listTopic: data
       	})
    });
	}

  render() {
  	let topic = this.state.listTopic.map((topic, index) => {
  		return <Topic key={index} topic={topic}/>
  	});

    return (
      <div className="list-topic-component">
				{topic}
      </div>
    );
  }
}

export default ListTopic;
