import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

import App from './components/Main';
import ListTopic from './components/ListTopic';
import ListQuestion from './components/ListQuestion';
import Question from './components/Question';
// Render the main component into the dom
ReactDOM.render((
	<HashRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/topics" component={ListTopic} />
			<Route exact path="/topics/:id" component={ListQuestion} />
			<Route path="/topics/:topic_id/questions/:id" component={Question} />
		</div>
	</HashRouter>
	), document.getElementById('app'));
