import React, { Component } from "react";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };
  }

  onClick() {
    this.setState({
      votes: this.state.votes+1
    });
  }

  render() {
    return (
      <div className="Comment">
        <button className="btn btn-info"
          onClick = {this.onClick.bind(this)}>
          <span role="img" aria-label="vote for this comment">👍</span>
        </button>
        &nbsp;&nbsp;
        <span>{this.state.votes}</span>
        &nbsp;&nbsp;
        <span>{this.props.comment.text}</span>
      </div>
    );
  }
}