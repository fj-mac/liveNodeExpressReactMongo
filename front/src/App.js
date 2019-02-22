import React, { Component } from "react";

import "./App.css";

import Comment from "./Comment.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    fetch("/api/getMessages")
      .then(res => res.json())
      .then(data => {
        console.log("got data!", data);
        this.setState({
          comments: data
        });
      });
  }

  renderComments() {
    return this.state.comments.map((c, i) => <Comment key={i++} comment={c} />);
  }

  postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
  }

  onCreateComment(event) {
    event.preventDefault();

    // Post
    console.log("Send the post");
    this.postData("/api/createMessage", {text:"John"} )
      .then(() => {
        console.log("Inserted the data!!");

        // Redraw
        console.log("Reload data");
        this.reloadData();
      });



  }

  render() {
    console.log("Rendering");

    return (
      <div className="App">
        <h1>Comments!</h1>
        <div className="row">{this.renderComments()}</div>
        <form onSubmit={this.onCreateComment.bind(this)}>
          <input type="text" name="text" />
        </form>

        <div>
          Made by John with{" "}
          <span role="img" aria-label="heart emoji">
            ♥️
          </span>
        </div>
      </div>
    );
  }
}

export default App;