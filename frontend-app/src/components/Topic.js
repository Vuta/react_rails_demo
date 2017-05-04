// require('normalize.css/normalize.css');
// require('styles/App.css');

import React from 'react';
import { Link } from 'react-router-dom';

class Topic extends React.Component {

  render() {
  	let topic_path = "/topics/" + this.props.topic.id;
    return (
      <div className="topic-component">
	  		<Link to={topic_path}><h1>{this.props.topic.name}</h1></Link>
      </div>
    );
  }
}

export default Topic;
