import React from 'react';

class Result extends React.Component {

  render() {

    return (
      <div>
      	<h3>Your score is: {this.props.totalScore}/{this.props.length}</h3>
      </div>
    );
  }

}

export default Result;